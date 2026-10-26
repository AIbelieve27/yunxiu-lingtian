# 云岫灵田

修仙主题的网页种田 / 放置经营游戏。参考《Kittens Game》的资源链、职业分工与逐步解锁机制，代码、界面、画面和数值均重新设计。没有使用原项目代码或美术。

## 本地试玩

需要 Node.js 22 或更新版本。在此文件夹打开终端：

```powershell
npm start
```

浏览器访问 http://127.0.0.1:4173 。不用安装依赖。源码中的 index.html 需要通过本地服务器打开。

也可运行 `npm run build`，直接双击构建产物 `dist/index.html` 游玩；它已将全部代码、样式和图形打包为单一 HTML，无需服务器。单文件移动位置或改文件名可能影响浏览器本地存档，请先导出备份。

## 第一段仙途

1. 一键播种灵稻，约 31 秒后在春季收获，领取右侧机缘奖励。
2. 下山采集木石，营造生产建筑和弟子居。招募弟子，分派灵植、樵采、采石、参悟、护山等职司。
3. 积累 40 灵气和 30 灵米突破炼气初期，解锁凝露灵草。
4. 建造听雨书斋，派弟子参悟；习得草木丹诀后建丹炉炼丹。
5. 通过技艺、仓储和宗门扩建走向炼气后期、筑基、金丹。

灵植弟子会自动收获并补种；补种仍需灵石。灵米和药草可以在小市出售。心力每两秒恢复 1 点。缺粮会降低生产效率，可通过采集或种稻恢复。春季生长 +15%，秋季产量 +20%，冬季生长 −25%，山雨额外提高生长速度 15%。

本地自动存档每 5 秒保存；离线结算最多 8 小时。农田离线可成熟，分配灵植弟子后才会离线自动收种。换浏览器或设备前请在「山门设置」导出存档；本版没有云存档或账号系统。

## 发布到 GitHub Pages

仓库已包含 `.github/workflows/pages.yml`。使用纯静态相对路径，支持 `https://用户名.github.io/仓库名/`，无需修改 base URL。

### 自动发布脚本

本机安装 Git、Node.js、GitHub CLI，并在你自己的 PowerShell 中运行：

```powershell
gh auth login
cd F:\game\myGame\yunxiu-lingtian
.\publish.ps1
```

脚本会先测试，使用当前 GitHub 账号创建 **公开** 仓库 `yunxiu-lingtian`，推送源码、开启 GitHub Pages 的 Actions 发布，并等待部署完成后打印地址。不会修改旧的 farm-idle 仓库。若仓库已经存在且不是本目录上次发布的仓库，脚本会停止；更换名称可用 `./publish.ps1 -RepoName 你的新名称`。同目录、同远端的中断发布可以重新执行。首次执行如被 PowerShell 的执行策略阻止，请在确认脚本内容后按你所在设备的脚本执行规则运行；脚本不会改动系统安全设置。

发布脚本已修复 Windows PowerShell 5.1 中「查询不存在的仓库时提前终止」的问题：仅在 GitHub 返回 HTTP 404 时创建仓库或开启 Pages，网络错误和权限错误会明确停止。已在 PowerShell 7 通过六种模拟场景（仓库和 Pages 尚不存在、网络失败、仓库权限不足、Pages 权限不足、保护已有仓库、提交失败后恢复）；此开发沙箱无法正常运行 Windows PowerShell 5.1 脚本文件，尚未在该版本完成实际发布验证。你本机截图显示已登录；当前开发沙箱访问 GitHub 仍返回 HTTP 401，尚未代为完成远端创建、推送与部署。

### 手动发布

1. 在 GitHub 创建一个新的空公开仓库，把本目录源码（包括隐藏的 `.github` 目录）推送到 `main` 分支。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 在 **Actions → Test and deploy game** 中执行 **Run workflow**。
4. 工作流成功后，从 **Settings → Pages** 进入实际网页地址。之后推送 main 会自动测试并更新网页。

发布流程参考 [GitHub Pages 官方工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 验证

```powershell
npm test
```

测试覆盖：播种与收获、资源支付、建筑和境界锁定、弟子自动收种、在线与离线一致性、八小时限制、四季与缺粮、炼丹与突破、机缘领取、非法存档、满仓交易，以及从零到金丹的完整模拟。浏览器已验证首屏加载、批量播种、实时生长及领奖。

## 文件

| 文件 | 用途 |
| --- | --- |
| engine.js | 游戏状态、数值和纯逻辑，独立于界面 |
| app.js | 页面、交互、存档、音效 |
| art.js | 原创 SVG 山景和灵植 |
| styles.css | 桌面与移动端布局 |
| tests/engine.test.js | 游戏规则验证 |
| 设计说明.md | 完整玩法和版本边界 |
| publish.ps1 | 本机 GitHub Pages 发布脚本 |

本版是一个可完整游玩的单人经营版本，以金丹为阶段终点，达到后可以继续经营。没有战斗、多人、付费、后端服务或无限境界。
