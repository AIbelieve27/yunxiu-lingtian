param([ValidatePattern('^[a-zA-Z0-9][a-zA-Z0-9._-]*$')][string]$RepoName = 'yunxiu-lingtian')
$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $false
Set-Location -LiteralPath $PSScriptRoot
function Assert-Success([string]$Message) { if ($LASTEXITCODE -ne 0) { throw $Message } }
function Get-NativeResult([string]$Command, [string[]]$Arguments) {
    # Windows PowerShell 5.1 turns redirected native stderr into ErrorRecords.
    # Probe exit codes explicitly so a normal HTTP 404 does not abort the script.
    $PreviousPreference = $ErrorActionPreference
    try {
        $ErrorActionPreference = 'Continue'
        $OutputLines = & $Command @Arguments 2>&1
        $NativeExitCode = $LASTEXITCODE
        return [pscustomobject]@{
            ExitCode = $NativeExitCode
            Text = (($OutputLines | ForEach-Object { $_.ToString() }) -join "`n").Trim()
        }
    } finally {
        $ErrorActionPreference = $PreviousPreference
    }
}
foreach ($Tool in @('git', 'gh', 'node')) {
    if (-not (Get-Command $Tool -ErrorAction SilentlyContinue)) { throw "Install $Tool before publishing." }
}
& node --test tests/engine.test.js
Assert-Success 'Game tests failed; publishing stopped.'
& gh auth status
Assert-Success 'Run gh auth login in your own terminal, then run this script again.'
$Account = (& gh api user --jq '.login').Trim()
Assert-Success 'Cannot read the signed-in GitHub account.'
$AccountId = (& gh api user --jq '.id').Trim()
Assert-Success 'Cannot read the GitHub account ID.'
$FullRepo = "$Account/$RepoName"
$Remote = "https://github.com/$FullRepo.git"
$HasLocalGit = Test-Path -LiteralPath (Join-Path $PSScriptRoot '.git')
if ($HasLocalGit) {
    $RemoteResult = Get-NativeResult 'git' @('remote', 'get-url', 'origin')
    $ExistingRemote = if ($RemoteResult.ExitCode -eq 0) { $RemoteResult.Text } else { $null }
    if ($ExistingRemote -and $ExistingRemote -ne $Remote) { throw "This checkout belongs to another remote: $ExistingRemote. Stopped." }
}
$RepositoryResult = Get-NativeResult 'gh' @('api', "repos/$FullRepo", '--jq', '.full_name')
if ($RepositoryResult.ExitCode -eq 0) {
    if (-not $HasLocalGit -or $ExistingRemote -ne $Remote) { throw "Repository $FullRepo already exists. Choose another name with -RepoName." }
    Write-Host "Resuming publication of $FullRepo."
} elseif ($RepositoryResult.Text -match 'HTTP 404') {
    Write-Host "Repository does not exist yet; creating $FullRepo."
    if (-not $HasLocalGit) {
        & git init -b main
        Assert-Success 'Cannot initialize the new game repository.'
        $HasLocalGit = $true
    }
    & gh repo create $FullRepo --public --description 'Yunxiu Lingtian - a cultivation farming and idle sect-building browser game'
    Assert-Success 'Could not create a new public repository.'
    if (-not $ExistingRemote) {
        & git remote add origin $Remote
        Assert-Success 'Cannot add the new game remote.'
        $ExistingRemote = $Remote
    }
} else {
    throw "Could not check repository access. No repository was created. $($RepositoryResult.Text)"
}
if (-not $HasLocalGit) {
    & git init -b main
    Assert-Success 'Cannot initialize the new game repository.'
}
if (-not (& git config --get user.name)) { & git config user.name $Account }
if (-not (& git config --get user.email)) { & git config user.email "$AccountId+$Account@users.noreply.github.com" }
& git add -- .
Assert-Success 'Cannot stage game files.'
& git diff --cached --quiet
if ($LASTEXITCODE -eq 1) { & git commit -m 'Build cultivation farming game and GitHub Pages deployment'; Assert-Success 'Cannot commit game files.' }
elseif ($LASTEXITCODE -ne 0) { throw 'Cannot inspect staged game files.' }
if (-not (& git remote 2>$null | Where-Object { $_ -eq 'origin' })) { & git remote add origin $Remote; Assert-Success 'Cannot add the new game remote.' }
& git -c 'credential.helper=!gh auth git-credential' push -u origin HEAD:main
Assert-Success 'Push failed. No force push was attempted. Check the repository and your login.'
$PagesResult = Get-NativeResult 'gh' @('api', "repos/$FullRepo/pages", '--jq', '.build_type')
if ($PagesResult.ExitCode -ne 0 -and $PagesResult.Text -match 'HTTP 404') {
    & gh api --method POST "repos/$FullRepo/pages" -f 'build_type=workflow' --silent
    Assert-Success 'Cannot enable Pages. Select GitHub Actions in repository Settings > Pages, then rerun.'
} elseif ($PagesResult.ExitCode -ne 0) {
    throw "Cannot check Pages settings. $($PagesResult.Text)"
} elseif ($PagesResult.Text -ne 'workflow') {
    & gh api --method PUT "repos/$FullRepo/pages" -f 'build_type=workflow' --silent
    Assert-Success 'Cannot configure the new game Pages workflow.'
}
& gh workflow run pages.yml --repo $FullRepo --ref main
Assert-Success 'Could not dispatch deployment. Run the workflow from the Actions tab.'
$RunId = $null
for ($Attempt = 0; $Attempt -lt 12; $Attempt++) {
    Start-Sleep -Seconds 3
    $RunId = & gh run list --repo $FullRepo --workflow pages.yml --event workflow_dispatch --limit 1 --json databaseId --jq '.[0].databaseId'
    if ($LASTEXITCODE -eq 0 -and $RunId) { break }
}
if (-not $RunId) { throw "Deployment was requested; check https://github.com/$FullRepo/actions for its status." }
& gh run watch $RunId --repo $FullRepo --exit-status
Assert-Success "Deployment failed. Inspect https://github.com/$FullRepo/actions/runs/$RunId ."
$PageUrl = & gh api "repos/$FullRepo/pages" --jq '.html_url'
Assert-Success 'Deployment succeeded but the Pages URL could not be read.'
Write-Host "Game deployed: $PageUrl" -ForegroundColor Green
