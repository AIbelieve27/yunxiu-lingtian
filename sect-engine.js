export const VERSION = 2;
export const HOUR = 2;
export const SEASON_DAYS = 15;
export const RES = {grain:{name:'灵米',icon:'穗',color:'#a98943'},wood:{name:'灵木',icon:'木',color:'#648573'},stone:{name:'青石',icon:'石',color:'#819095'},coin:{name:'灵石',icon:'晶',color:'#669b94'},herb:{name:'药草',icon:'叶',color:'#889951'},knowledge:{name:'学识',icon:'书',color:'#aa8e66'},qi:{name:'灵气',icon:'气',color:'#9787ab'},pill:{name:'灵丹',icon:'丹',color:'#b77e70'}};
export const JOBS = {
 foreman:{name:'灵植队长',icon:'穗',kind:'管理',desc:'安排灵田，核实收成与运粮，向上呈报实情。',keys:['grain','herb'],skill:'foreman'},
 farmer:{name:'灵植弟子',icon:'田',kind:'生产',desc:'依排班照料灵植，提高持续收成。',keys:['grain','herb'],skill:'farmer'},
 woodcutter:{name:'樵采弟子',icon:'木',kind:'生产',desc:'采集灵木，支撑营造与扩张。',keys:['wood'],skill:'woodcutter'},
 miner:{name:'采石弟子',icon:'石',kind:'生产',desc:'开采青石，支撑设施与仓储。',keys:['stone'],skill:'miner'},
 hr:{name:'人事执事',icon:'人',kind:'管理',desc:'接触候选人、积累识人经验，按目标招聘和任用。',keys:[],skill:'hr'},
 deputy:{name:'副宗主',icon:'令',kind:'协调',desc:'依据各司报告配置制度、预算，协调扩建需求。',keys:[],skill:'deputy',building:'hall'},
 builder:{name:'营造执事',icon:'工',kind:'生产',desc:'承接营造需求，用材料与工时完成建筑。',keys:['wood','stone'],skill:'builder',building:'workshop'},
 treasurer:{name:'仓储财务',icon:'仓',kind:'管理',desc:'掌握实存、处理交易和俸禄，核对资金与库存。',keys:['grain','wood','stone','coin','herb','knowledge','qi','pill'],skill:'treasurer'},
 scholar:{name:'研习执事',icon:'书',kind:'生产',desc:'积累学识与灵气，研习改变生产结构的技艺。',keys:['knowledge','qi'],skill:'scholar',building:'library'},
 alchemist:{name:'丹房执事',icon:'丹',kind:'生产',desc:'将药草与灵气持续加工成可贸易的灵丹。',keys:['herb','qi','pill'],skill:'alchemist',building:'furnace'},
 auditor:{name:'监察执事',icon:'鉴',kind:'监督',desc:'交叉核对账目与利益往来，发现异常和资金证据。',keys:[],skill:'auditor',building:'registry'},
 investigator:{name:'巡察执事',icon:'察',kind:'调查',desc:'追查货物流向和关联人员，以证据还原责任。',keys:[],skill:'investigator',building:'watchpost'}
};
export const CROPS = {rice:{name:'青穗灵稻',resource:'grain',base:.25,labor:2,price:2,color:'#a9a353',desc:'基础产量 6 / 日·田，灵植弟子当值时额外增产。'},herb:{name:'凝露灵草',resource:'herb',base:.08,labor:.6,price:4,color:'#719a79',tech:'botany',desc:'基础产量 1.92 / 日·田，供应丹房与山市。'},lotus:{name:'月华莲',resource:'qi',base:.06,labor:.35,price:8,color:'#ac8eaa',tech:'formation',desc:'基础产量 1.44 / 日·田，为宗门阵法与炼丹供气。'}};
export const BUILDINGS = {
 field:{name:'开垦灵田',icon:'田',desc:'新增一方持续生产的灵田。',base:{wood:18,stone:8},scale:1.18,hours:5},
 hut:{name:'弟子居',icon:'舍',desc:'增加 3 个住处；是否招人由人事岗位决定。',base:{wood:55,stone:30,coin:15},scale:1.45,hours:8},
 store:{name:'纳物仓',icon:'仓',desc:'提高所有资源的储量上限，打开下一阶段的营造门槛。',base:{wood:50,stone:20},scale:1.6,hours:8},
 workshop:{name:'营造坊',icon:'工',desc:'允许 NPC 承担营造岗位，持续处理建设队列。',base:{wood:35,stone:20,coin:15},scale:1.7,hours:8},
 library:{name:'听雨书斋',icon:'书',desc:'开启 NPC 研习岗位，产出学识与灵气。',base:{wood:60,stone:35,coin:25},scale:1.6,hours:10},
 hall:{name:'议事堂',icon:'令',desc:'开启 NPC 副宗主，协调人事与营造的需求。',base:{wood:180,stone:130,coin:120},scale:1.8,hours:16},
 registry:{name:'档案监察院',icon:'鉴',desc:'允许 NPC 监察和档案复核，提升制度监督效果。',base:{wood:90,stone:60,knowledge:25,coin:45},scale:1.7,hours:12},
 watchpost:{name:'巡察司',icon:'察',desc:'允许 NPC 追查案件、货物和相关人员。',base:{wood:100,stone:75,knowledge:35,coin:50},scale:1.7,hours:12},
 furnace:{name:'丹房',icon:'丹',desc:'开启丹修，将药草、灵气加工为灵丹。',base:{wood:80,stone:100,coin:65},scale:1.65,hours:12}
};
export const TECHS = {irrigation:{name:'引泉灌溉',desc:'所有灵田的产出增加 25%。',cost:{knowledge:15,wood:30,coin:20}},botany:{name:'草木辨识',desc:'解锁凝露灵草，开启新的商品与加工链。',cost:{knowledge:25,coin:25}},records:{name:'交接与复核',desc:'岗位档案帮助新人了解同道，提高监察效率。',cost:{knowledge:35,wood:25,coin:30}},alchemy:{name:'草木丹诀',desc:'丹房每份灵丹消耗 6 药草与 3 灵气。',cost:{knowledge:65,herb:20,coin:50}},formation:{name:'聚灵阵法',desc:'解锁月华莲，生产和研习效率增加 20%。',cost:{knowledge:140,stone:140,qi:100,coin:180}}};
export const TRAITS = {careful:{name:'细致谨慎',desc:'仓储、监察效率 +20%。'},green:{name:'草木亲和',desc:'灵植效率 +25%。'},craft:{name:'巧手',desc:'营造、炼丹效率 +20%。'},scholarly:{name:'好学',desc:'研习与岗位经验增长更快。'},frugal:{name:'节俭',desc:'个人日常支出较少。'},sociable:{name:'善于交际',desc:'人事接触与关系调查更高效。'},greedy:{name:'重利',desc:'对额外利益更敏感，处境会影响其选择。'},upright:{name:'守正',desc:'较不愿冒险谋取私利，但并非不受处境影响。'}};
export const SEASONS = ['春','夏','秋','冬'];
const NAMES = ['沈禾','陆青','温衡','顾砚','林栖','苏澄','许岚','白芷','程松','孟遥','唐宁','方竹','江棠','周晏','楚溪','叶川','谢芙','宋知','魏然','柳岩','陈霁','秦安','杜衡','赵蕴'];
const LOOKS = ['仪表端正','神情沉稳','衣着朴素','眉目清朗','谈吐温和','风尘仆仆'];
const PRICES = {grain:.35,wood:.24,stone:.3,herb:1.1,pill:5};
const cap = (n,a,b)=>Math.max(a,Math.min(b,n));
export function random(s) { s.rng=(Math.imul(s.rng,1664525)+1013904223)>>>0; return s.rng/4294967296; }
export function day(s) { return Math.floor(s.hour/24)+1; }
export function season(s) { return Math.floor(s.hour/(24*SEASON_DAYS))%4; }
export function seasonFactor(s) { return [1.5,1,1,.25][season(s)]; }
export function housing(s) { return 6+s.buildings.hut*3; }
export function capacity(s,key) { return ({grain:160,wood:100,stone:100,coin:500,herb:100,knowledge:100,qi:150,pill:50}[key]||100)+s.buildings.store*({grain:200,wood:150,stone:150,coin:500,herb:100,knowledge:100,qi:150,pill:50}[key]||100); }
export function members(s) { return s.people.filter(n=>n.active); }
export function costFor(s,key) { const b=BUILDINGS[key];return Object.fromEntries(Object.entries(b.base).map(([r,n])=>[r,Math.ceil(n*b.scale**s.buildings[key])])); }
export function canPay(s,cost) { return Object.entries(cost).every(([k,n])=>Number.isFinite(n)&&n>=0&&s.resources[k]>=n); }
export function log(s,text,kind='notice') { s.logs.unshift({id:++s.serial,hour:s.hour,text,kind});s.logs=s.logs.slice(0,100); }
function change(s,key,amount,book=true) { const before=s.resources[key];s.resources[key]=cap(before+amount,0,capacity(s,key));const delta=s.resources[key]-before;if(book)s.books[key]=cap(s.books[key]+delta,0,capacity(s,key));if(s.gathered&&amount>0&&['wood','stone'].includes(key))s.gathered[key]+=Math.max(0,delta);return delta; }
function spend(s,cost) { for(const [key,n] of Object.entries(cost))change(s,key,-n); }
function transaction(s,kind,amount,actor=null,resource='coin',extra={}) { s.ledger.unshift({id:++s.serial,hour:s.hour,kind,amount,resource,actor,...extra});s.ledger=s.ledger.slice(0,240); }
export function makePerson(s,id,job='idle') {
 const skills=Object.fromEntries(Object.keys(JOBS).map(k=>[k,Math.floor(8+random(s)*35)]));if(job!=='idle')skills[job]=44+Math.floor(random(s)*18);
 const potentials=Object.fromEntries(Object.keys(JOBS).map(k=>[k,.75+random(s)*.7]));
 const traits=Object.keys(TRAITS), first=traits[Math.floor(random(s)*traits.length)], second=traits[Math.floor(random(s)*traits.length)];
 return {id,name:NAMES[(id-1)%NAMES.length]+(id>NAMES.length?String(Math.floor(id/NAMES.length)):''),active:true,job,shift:0,hours:8,appearance:LOOKS[Math.floor(random(s)*LOOKS.length)],skills,potentials,traits:[...new Set([first,second])],honesty:35+Math.floor(random(s)*60),courage:15+Math.floor(random(s)*75),greed:15+Math.floor(random(s)*65),trust:15,wealth:2+random(s)*3,pressure:0,happiness:76,fatigue:4,arrears:0,contact:0,daysTogether:0,workToday:0,employedToday:0,baseWage:.8,emergency:null,privateNotes:[],lastIncident:-100,knownBy:{},status:'新入山门'};
}
export function initialState(now=Date.now(),seed=537191) {
 const s={version:VERSION,savedAt:now,hour:0,carry:0,rng:seed>>>0,serial:0,player:{role:'farmer',hours:12,skills:Object.fromEntries(Object.keys(JOBS).map(k=>[k,k==='hr'?10:30]))},resources:{grain:100,wood:0,stone:0,coin:120,herb:0,knowledge:0,qi:0,pill:0},books:{},reports:{},buildings:Object.fromEntries(Object.keys(BUILDINGS).map(k=>[k,0])),plots:[{crop:'rice'},{crop:'rice'},{crop:'rice'}],people:[],candidates:[],nextPerson:5,techs:[],policies:{hours:8,overtime:true,benefits:false,wage:1,review:true},orders:{hr:{target:6,priority:'farmer',reserveDays:3},trade:{auto:true,reserve:80},deputy:{autoBuild:true,budget:150}},requests:[],projects:[],research:null,archives:{},incidents:[],cases:[],inquiries:[],ledger:[],logs:[],autoClocks:{},stats:{produced:0,sold:0,paid:0,contributions:0,lost:0,recovered:0,completed:0,researched:0},benefitFund:0,lastDay:{production:0,consumption:0,revenue:0,wages:0},today:{production:0,consumption:0,revenue:0,wages:0},lastPayroll:[],recentDisclosures:[]};
 s.paused=false;s.governance=2;s.player.jobs=['farmer'];s.player.stamina=10;s.development={goal:null,needs:{wood:false,stone:false},frame:false};s.manual={clicks:0,reviewed:{}};s.unlockedJobs=['farmer'];s.tutorialSeen=[];s.workRecords={};s.workReports={};s.gathered={wood:0,stone:0};s.player.field=0;s.plots.forEach((p,i)=>p.owner=i===0?'player':i);
 for(const [i,job] of ['farmer','farmer','farmer','farmer'].entries()){const n=makePerson(s,i+1,job);n.honesty=[88,78,74,56][i];n.traits=i===0?['green','upright']:i===3?['careful','greedy']:n.traits;s.people.push(n);}
 s.books={...s.resources};for(const k of Object.keys(RES))s.reports[k]={value:s.resources[k],hour:0,by:'开山盘点',source:'实物盘点'};
 s.productionReport={normal:averageRates(s,1).grain+s.people.length*2,hour:0,by:'开山测产'};
 for(let i=0;i<3;i++){const n=makePerson(s,s.nextPerson++);n.active=false;s.candidates.push(n);}
 log(s,'云岫山门初立。四位同道各司其职，先算清口粮、俸禄与下一座建筑。');return s;
}
export function onDuty(s,n,hour=s.hour) { const h=hour%24;return ((h-n.shift+24)%24)<n.hours; }
export function skillFactor(n,job) { let f=.55+n.skills[job]/100; if(n.traits.includes('green')&&['farmer','foreman'].includes(job))f*=1.25;if(n.traits.includes('craft')&&['builder','alchemist'].includes(job))f*=1.2;if(n.traits.includes('careful')&&['treasurer','auditor'].includes(job))f*=1.2;if(n.traits.includes('sociable')&&['hr','investigator'].includes(job))f*=1.15;return f*(.65+n.happiness/220)*(1-n.fatigue/250); }
export function staff(s,job,activeOnly=false) { return members(s).filter(n=>n.job===job&&(!activeOnly||onDuty(s,n))); }
export function power(s,job) { let p=staff(s,job,true).reduce((sum,n)=>sum+skillFactor(n,job),0);if(playerHasJob(s,job)&&s.hour%24<s.player.hours)p+=(.9+s.player.skills[job]/150)/playerJobCount(s);return p; }
export function observer(s,job) { if(playerHasJob(s,job)&&s.hour%24<s.player.hours)return {id:'player',name:'亲自任职',skill:s.player.skills[job]};const n=staff(s,job,true).sort((a,b)=>b.skills[job]-a.skills[job])[0];return n?{id:n.id,name:n.name,skill:n.skills[job]}:null; }
export function wagePerDay(s,n) { const base=n.baseWage*s.policies.wage;return base+(s.policies.overtime?base*.5*Math.max(0,n.hours-8)/8:0); }
export function operatingCost(s) { return members(s).reduce((sum,n)=>sum+wagePerDay(s,n)+(s.policies.benefits?.18:0),0); }
export function averageRates(s,seasonOverride=season(s)) {
 const rates=Object.fromEntries(Object.keys(RES).map(k=>[k,0]));const plots=s.plots.length, multiplier=(s.techs.includes('irrigation')?1.25:1)*(s.techs.includes('formation')?1.2:1);
 const farmer=members(s).filter(n=>n.job==='farmer').reduce((sum,n)=>sum+skillFactor(n,'farmer')*n.hours,0);
 for(const p of s.plots){const c=CROPS[p.crop];rates[c.resource]+=(c.base*24+c.labor*farmer/plots)*multiplier*(p.crop==='rice'?[1.5,1,1,.25][seasonOverride]:1);}
 rates.grain-=members(s).length*2;
 for(const n of members(s)){const p=n.hours*skillFactor(n,n.job)*(s.techs.includes('formation')?1.2:1);if(n.job==='woodcutter')rates.wood+=p*.8;if(n.job==='miner')rates.stone+=p*.6;if(n.job==='scholar'){rates.knowledge+=p*.9;rates.qi+=p*.5;}}
 rates.coin=-operatingCost(s);return rates;
}
export function visibleResources(s,role=s.player.role) { const keys=JOBS[role].keys;return Object.fromEntries(Object.keys(RES).map(k=>[k,keys.includes(k)?{value:s.resources[k],kind:'实察',hour:s.hour}:{value:s.reports[k].value,kind:'账报',hour:s.reports[k].hour}])); }
export function visibleGrainRates(s,role=s.player.role) { const record=role==='farmer'?ownWork(s,role):null,reports=ROLE_TREE[role]?directReports(s,role):[];const grain=record?.totals.grain||reports.reduce((sum,r)=>sum+(r.payload.totals?.grain||0),0);return {current:grain,winter:null,source:role==='farmer'?'本人累计实收':'已提交报告累计收成'}; }
export function familiarity(s,n,who='player') { return n.knownBy[String(who)]?.contact||0; }
export function insight(s,n,who=observer(s,'hr')) {
 if(!who)return {tier:0,contact:0,skills:[],traits:[],character:null};const contact=familiarity(s,n,who.id), bonus=s.techs.includes('records')?5:0, score=who.skill+bonus;
 let tier=0;if(score>=20&&contact>=2)tier=1;if(score>=45&&contact>=8)tier=2;if(score>=70&&contact>=20)tier=3;if(score>=90&&contact>=40)tier=4;
 const uncertainty=tier>=4?3:tier>=2?12:22;
 return {tier,contact,skills:tier>=1?Object.entries(n.skills).sort((a,b)=>b[1]-a[1]).slice(0,tier>=3?12:3).map(([job,v])=>({job,min:Math.max(0,Math.floor((v-uncertainty)/5)*5),max:Math.min(100,Math.ceil((v+uncertainty)/5)*5),potential:tier>=2?(n.potentials[job]>1.15?'成长较快':'成长平稳'):'待考察'})):[],traits:tier>=2?n.traits.slice(0,tier>=4?99:1):[],character:tier>=3?{honesty:n.honesty>=72?'守信倾向较强':n.honesty<45?'处境与利益影响较大':'仍需长期观察',courage:n.courage>65?'行事较大胆':n.courage<35?'较为谨慎':'审慎程度一般'}:null};
}
function getPerson(s,id) { return [...s.people,...s.candidates].find(n=>n.id===Number(id)); }
function recordContact(s,n,who,amount) { const k=String(who.id);n.knownBy[k]??={contact:0,lastHour:s.hour};n.knownBy[k].contact+=amount;n.knownBy[k].lastHour=s.hour;if(who.id==='player')s.player.skills.hr=cap(s.player.skills.hr+.08*amount,0,100);else {const hr=getPerson(s,who.id);hr.skills.hr=cap(hr.skills.hr+.08*amount*hr.potentials.hr,0,100);} }
function fileAssessment(s,n,who) { const info=insight(s,n,who);s.archives[n.id]??=[];s.archives[n.id].unshift({hour:s.hour,by:who.name,kind:'评价',text:info.tier?`考察深度 ${info.tier}/4；${info.skills.slice(0,2).map(v=>JOBS[v.job].name+'约 '+v.min+'–'+v.max).join('，')}。${info.traits.length?'观察词条：'+info.traits.map(t=>TRAITS[t].name).join('、')+'。':''}${info.character?info.character.honesty+'；'+info.character.courage+'。':''}`:'目前仅能确认外表与基本履历，能力及为人尚待共事。'});s.archives[n.id]=s.archives[n.id].slice(0,12); }
export function request(s,kind,text,from) { const existing=s.requests.find(r=>r.kind===kind&&r.status!=='完成');if(existing)return existing;const r={id:++s.serial,kind,text,from,hour:s.hour,status:'待协调'};s.requests.unshift(r);s.requests=s.requests.slice(0,30);log(s,`${from}：${text}`,'request');return r; }
function hire(s,n,job,who) { if(members(s).length>=housing(s)){request(s,'housing','住处不足，需要扩建弟子居。',who.name);return '住处已满，已登记住房需求';}if(!JOBS[job])return '岗位不存在';if(!jobUnlocked(s,job))job='farmer';if(JOBS[job].building&&!s.buildings[JOBS[job].building])job='farmer';if(s.resources.coin<3)return '入门安置需 3 灵石';spend(s,{coin:3});transaction(s,'入门安置',3,n.id);n.active=true;n.job=job;n.hours=s.policies.hours;n.shift=(staff(s,job).length*n.hours)%24;n.status='已任用';n.employedToday=0;s.candidates=s.candidates.filter(c=>c.id!==n.id);s.people.push(n);fileAssessment(s,n,who);log(s,`${who.name}接纳${n.name}，安排为${JOBS[job].name}。`);return null; }
function queueBuild(s,key,by) { if(!BUILDINGS[key])return '未知建筑';if(s.projects.length>=3)return '营造队列最多同时安排 3 项';if(key==='field'&&s.plots.length+s.projects.filter(p=>p.key==='field').length>=24)return '灵田已达当前 24 方规模';if(s.projects.some(p=>p.key===key))return '此项目已在队列中';const cost=costFor(s,key);if(Object.entries(cost).some(([k,n])=>n>capacity(s,k)))return '储量上限不足，需先扩建纳物仓';if(!canPay(s,cost))return '实存材料不足；请核实库存或等待生产';spend(s,cost);transaction(s,'营造预付',cost.coin||0,null,'coin',{building:key});s.projects.push({id:++s.serial,key,progress:0,required:BUILDINGS[key].hours,by,cost});log(s,`${by}安排营造「${BUILDINGS[key].name}」。`);return null; }
export function misconductRisk(s,n) {
 const handles=['treasurer','hr','builder','foreman'].includes(n.job);if(!handles||!n.active)return 0;
 const watch=staff(s,'auditor').length*.22+staff(s,'investigator').length*.12+(s.policies.review?.15:0)+(s.buildings.registry?.1:0)+(playerHasJob(s,'auditor')?.25/playerJobCount(s):0);
 const opportunity=cap(.85-watch,.06,.9), need=cap(n.pressure/20,0,1.5), motive=.04+n.greed/650+need*.2+Math.max(0,40-n.happiness)/300;
 return cap(motive*opportunity*(1-n.honesty/125)*(.35+n.courage/100)*(1-n.trust/300),0,.55);
}
export function commitMisconduct(s,n,forced=false) {
 if(!n.active||s.incidents.some(i=>!i.resolved&&i.actor===n.id))return null;if(!forced&&random(s)>=misconductRisk(s,n))return null;
 const kind=n.job==='hr'?'bribe':'diversion';let amount,proceeds,other=null;
 if(kind==='bribe'){other=s.candidates.find(c=>c.wealth>=1);if(!other)return null;proceeds=Math.min(other.wealth,1.5+random(s)*3);other.wealth-=proceeds;n.wealth+=proceeds;amount=proceeds;n.privateNotes.push({hour:s.hour,other:other.id,amount:proceeds});}
 else {amount=Math.min(s.resources.grain*.13,6+random(s)*9);if(amount<2)return null;change(s,'grain',-amount,false);proceeds=amount*PRICES.grain*.85;n.wealth+=proceeds;n.privateNotes.push({hour:s.hour,kind:'私下售粮',goods:amount,amount:proceeds,other:'山外买方'});s.stats.lost+=amount;}
 const incident={id:++s.serial,actor:n.id,other:other?.id||null,kind,amount,proceeds,hour:s.hour,motive:n.pressure>5?'家中急需用钱':n.happiness<40?'待遇与关系不满':'额外利益诱惑',resolved:false};s.incidents.push(incident);n.lastIncident=s.hour;n.pressure=Math.max(0,n.pressure-proceeds);return incident;
}
export function caseView(s,c) { const evidence=c.evidence||[];return {id:c.id,title:c.title,status:c.status,hour:c.hour,evidence:evidence.map(e=>({...e})),suspects:[...new Set(evidence.flatMap(e=>e.people||[]))].map(id=>({id,name:getPerson(s,id)?.name||'关系人'})),canConclude:new Set(evidence.map(e=>e.type)).size>=2,requester:c.requester}; }
function openCase(s,incident,source,text) { let c=s.cases.find(v=>v.incident===incident.id);if(!c){c={id:++s.serial,incident:incident.id,title:incident.kind==='bribe'?'任用与往来异常':'收成与入库不符',hour:s.hour,status:'待核查',requester:source,evidence:[]};s.cases.unshift(c);log(s,`${source}移交线索：${c.title}。`,'case');}return c; }
function evidence(s,c,type,by,text,people=[]) { if(c.evidence.some(e=>e.type===type))return;c.evidence.push({id:++s.serial,type,hour:s.hour,by,text,people});c.status=new Set(c.evidence.map(e=>e.type)).size>=2?'事实待处置':'核查中'; }
export function startInquiry(s,type,caseId=null) {
 const allowed={yield:['auditor'],stock:['auditor'],payments:['auditor'],trail:['investigator'],relations:['investigator']};if(!allowed[type]?.includes(s.player.role))return '请切换到负责此项核查的岗位';if(s.inquiries.some(q=>q.type===type&&q.caseId===caseId))return '此项核查已在进行';if(s.inquiries.length>=5)return '待办核查已满，请先处理现有事项';if(caseId&&!s.cases.some(c=>c.id===Number(caseId)&&c.status!=='已结案'))return '案件不存在或已经结案';s.inquiries.push({id:++s.serial,type,caseId:caseId?Number(caseId):null,role:s.player.role,progress:0,required:type==='relations'?10:6});return null;
}
function finishInquiry(s,q,by) {
 if(q.type==='interview'){const n=getPerson(s,q.target),who=observer(s,'hr');if(n&&who){recordContact(s,n,who,4);fileAssessment(s,n,who);log(s,`${by}完成与${n.name}的接触考察，评价已写入档案。`,'verified');}return;}
 let targets=q.caseId?s.cases.filter(c=>c.id===q.caseId):[];
 if(['yield','stock'].includes(q.type)){
  const gap=s.books.grain-s.resources.grain;const item=s.incidents.find(i=>!i.resolved&&i.kind==='diversion');
  if(item&&gap>.5){const c=openCase(s,item,by, '实收与入库不符');evidence(s,c,'goods',by,`核实收成、存货与领用后，有 ${gap.toFixed(1)} 灵米缺少合法去向。`);}
  else log(s,`${by}完成${q.type==='yield'?'收成核对':'实物盘点'}，未发现新的无据缺口。`,'verified');
  s.archives.stock??=[];s.archives.stock.unshift({hour:s.hour,by,kind:'核实',text:`实盘灵米 ${s.resources.grain.toFixed(1)}；账面 ${s.books.grain.toFixed(1)}。`});s.archives.stock=s.archives.stock.slice(0,12);
 }
 if(q.type==='payments'){
  const active=s.incidents.filter(i=>!i.resolved);if(!targets.length)for(const i of active)targets.push(openCase(s,i,by,'往来复核'));
  for(const c of targets){const i=s.incidents.find(v=>v.id===c.incident);if(!i||i.resolved)continue;evidence(s,c,'money',by,`交叉核对发现${getPerson(s,i.actor)?.name}有 ${i.proceeds.toFixed(1)} 灵石的异常利益往来。`,[i.actor,...(i.other?[i.other]:[])]);}
  if(!active.length)log(s,`${by}完成往来复核，未发现可核实的异常资金线索。`,'verified');
 }
 if(['trail','relations'].includes(q.type)){
  for(const c of targets){
   const i=s.incidents.find(v=>v.id===c.incident);if(!i||i.resolved)continue;
   if(q.type==='trail')evidence(s,c,'route',by,i.kind==='diversion'?`沿领用、运输与交易记录，确认 ${getPerson(s,i.actor)?.name}经手的批次流入外部交易。`:`比对面谈、任用与给付时间，确认此项推荐存在利益关联。`,[i.actor,...(i.other?[i.other]:[])]);
   else {
    const linked=s.incidents.filter(v=>v.id!==i.id&&!v.resolved&&[i.actor,i.other].filter(Boolean).some(id=>v.actor===id||v.other===id));
    const people=[...new Set([i.actor,i.other,...linked.flatMap(v=>[v.actor,v.other])].filter(Boolean))];
    evidence(s,c,'relations',by,`分别核实${people.map(id=>getPerson(s,id)?.name||'历史关系人').join('、')}的往来，取得相互印证的记录；涉事背景为「${i.motive}」。${linked.length?'另有相关事件移交继续核查。':''}`,people);
    for(const related of linked){const next=openCase(s,related,by,'关联案件');evidence(s,next,'relations',by,`从案件 #${c.id} 的往来继续追查，发现新的独立待核实事件。`,[related.actor,...(related.other?[related.other]:[])]);}
   }
  }
 }
 log(s,`${by}完成一项${{yield:'收成核对',stock:'库存盘点',payments:'利益往来复核',trail:'物流追踪',relations:'关联调查'}[q.type]}。`,'verified');
}
function autoRole(s,job,n) {
 const by=n.name;
 if(job==='hr'){
  const bribed=s.incidents.find(i=>!i.resolved&&i.actor===n.id&&i.kind==='bribe'&&s.candidates.some(c=>c.id===i.other));
  if(members(s).length>=s.orders.hr.target&&!bribed)return;
  if(members(s).length>=housing(s)){request(s,'housing','人事名额已受住房限制，请协调扩建。',by);return;}
  const need=members(s).length*2*s.orders.hr.reserveDays;if(s.books.grain<need&&!bribed){request(s,'food','账报口粮低于招聘保留线，暂停接纳。',by);return;}
  const obs={id:n.id,name:by,skill:n.skills.hr};for(const c of s.candidates)recordContact(s,c,obs,2);
  const jobTarget=s.orders.hr.priority;const candidate=s.candidates.map(c=>({person:c,score:bribed?.other===c.id?200:(insight(s,c,obs).skills.find(v=>v.job===jobTarget)?.min??random(s)*20)})).sort((a,b)=>b.score-a.score)[0]?.person;if(candidate){if(bribed)log(s,`${by}以「紧缺补岗」上报了保留线之外的接纳决定，原因尚待复核。`,'report');hire(s,candidate,jobTarget,obs);}
 }
 if(job==='deputy'&&s.orders.deputy.autoBuild){const r=s.requests.find(v=>v.kind==='housing'&&v.status==='待协调');if(r){const cost=costFor(s,'hut');if((cost.coin||0)<=s.orders.deputy.budget){r.status='已派营造';if(!s.projects.some(p=>p.key==='hut')){const error=queueBuild(s,'hut',by);if(error){r.status='待协调';r.text='扩建等待实际材料与预算到位。';}}}}}
 if(job==='treasurer'&&s.orders.trade.auto){for(const [key,reserve] of [['grain',s.orders.trade.reserve],['herb',12],['pill',4]]){const excess=Math.floor(s.resources[key]-reserve);if(excess>=5)trade(s,key,Math.min(excess,30),by);}}
 if(job==='foreman')submitReport(s,'foreman',n.id);
 if(job==='auditor')finishInquiry(s,{type:'payments',caseId:null},by);
 if(job==='investigator'){const c=s.cases.find(c=>c.status!=='已结案');if(c)finishInquiry(s,{type:c.evidence.some(e=>e.type==='route')?'relations':'trail',caseId:c.id},by);}
 if(job==='treasurer')publish(s,'treasurer',n.id);submitReport(s,job,n.id);
}
function publishLegacy(s,job=s.player.role,by='亲自核实') { const n=typeof by==='number'?getPerson(s,by):null;for(const key of JOBS[job].keys){let value=s.resources[key];if(n&&s.incidents.some(i=>!i.resolved&&i.actor===n.id))value=s.books[key];s.reports[key]={value,hour:s.hour,by:n?.name||by,source:n?'岗位报告':'现场核实'};}if(['foreman','farmer'].includes(job))s.productionReport={normal:averageRates(s,1).grain+members(s).length*2,hour:s.hour,by:n?.name||by};log(s,`${n?.name||by}更新了${JOBS[job].name}的交接报告。`,'report');return null; }
function trade(s,key,amount,by='仓储财务') { if(!PRICES[key]||!Number.isFinite(amount)||amount<=0)return '此物不可交易';amount=Math.min(amount,s.resources[key]);if(amount<1)return '可售库存不足';const revenue=amount*PRICES[key];if(s.resources.coin+revenue>capacity(s,'coin'))return '灵石仓储已满，先扩仓或安排支出';change(s,key,-amount);change(s,'coin',revenue);s.stats.sold+=revenue;s.today.revenue+=revenue;transaction(s,'山市出售',revenue,null,'coin',{item:key,quantity:amount,by});return null; }
function payroll(s) {
 const roster=members(s), dues=roster.map(n=>{const due=n.baseWage*s.policies.wage*(n.employedToday/24)+(s.policies.overtime?n.baseWage*s.policies.wage*.5*Math.max(0,n.workToday-8)/8:0);return {n,due};});const total=dues.reduce((a,b)=>a+b.due,0), ratio=total?Math.min(1,s.resources.coin/total):1;s.lastPayroll=[];
 for(const {n,due} of dues){const paid=due*ratio;change(s,'coin',-paid);n.wealth+=paid;n.arrears+=due-paid;n.happiness=cap(n.happiness+(ratio===1?.5:-6)+(n.hours<=8?1.1:n.hours>=16?-2:-.7)+(s.policies.overtime?.4:-Math.max(0,n.hours-8)*.5)+(s.policies.benefits?.8:0),0,100);s.stats.paid+=paid;s.today.wages+=paid;transaction(s,'支付俸禄',paid,n.id);s.lastPayroll.push({id:n.id,name:n.name,job:n.job,work:n.workToday,due,paid});const living=n.traits.includes('frugal')?.32:.55;n.wealth=Math.max(0,n.wealth-living);n.pressure=cap(n.pressure+(n.wealth<.2?.7:-.4),0,40);n.daysTogether++;n.trust=cap(n.trust+(ratio===1?.12:-.4),0,100);n.employedToday=0;n.workToday=0;
  if(n.emergency&&n.wealth>=n.emergency.remaining){n.wealth-=n.emergency.remaining;n.pressure=Math.max(0,n.pressure-n.emergency.remaining);n.emergency=null;}
 }
 if(s.policies.benefits){const due=roster.length*.18,paid=Math.min(due,s.resources.coin);change(s,'coin',-paid);s.benefitFund+=paid;s.stats.contributions+=paid;transaction(s,'福利保障缴存',paid);}
 if(ratio<1)log(s,'财务通报：灵石不足，今日俸禄出现欠付。可出售余粮或调整用工。','warning');
 for(const n of roster)if(n.arrears>n.baseWage*6&&n.happiness<15){n.active=false;n.job='idle';log(s,`${n.name}因长期欠俸离开山门，其任职记录仍保存在档案中。`,'warning');}
}
export function householdEvent(s,n,cost=12) { if(n.emergency)return;let cover=Math.min(s.benefitFund,cost*.75);s.benefitFund-=cover;const own=Math.min(n.wealth,cost-cover);n.wealth-=own;const remaining=cost-cover-own;n.emergency=remaining>.01?{kind:'家人患病',cost,remaining,hour:s.hour}:null;n.pressure=cap(n.pressure+remaining,0,40);if(cover)transaction(s,'福利救助',cover,n.id);if(n.trust>12||playerHasJob(s,'hr')){log(s,`${n.name}向人事报备家中急病${cover?`，互助保障支出 ${cover.toFixed(1)} 灵石`:''}。`,'personal');s.archives[n.id]??=[];s.archives[n.id].unshift({hour:s.hour,by:n.name,kind:'自述',text:`家人患病，尚需 ${remaining.toFixed(1)} 灵石；此为本人求助记录。`});}}
function advanceHour(s) {
 const h=s.hour, mult=(s.techs.includes('formation')?1.2:1), fed=s.resources.grain>0?1:.35;let farm=power(s,'farmer');const leader=power(s,'foreman');let produced=0;
 for(const p of s.plots){const c=CROPS[p.crop];const out=(c.base+c.labor*farm/s.plots.length)*(s.techs.includes('irrigation')?1.25:1)*(1+Math.min(.25,leader*.08))*mult*(p.crop==='rice'?seasonFactor(s):1)*fed*(1-((p.weeds??3)+(p.pests??2))*.025)*(s.development?.frame?1.1:1);const got=change(s,c.resource,out);recordPlot(s,p,c.resource,got);if(c.resource==='grain')produced+=got;}
 s.today.production+=produced;s.stats.produced+=produced;const consumed=Math.min(s.resources.grain,members(s).length*2/24);change(s,'grain',-consumed);s.today.consumption+=consumed;
 for(const n of members(s)){
  n.employedToday++;const active=onDuty(s,n,h);if(active&&n.job!=='idle'){
   const p=skillFactor(n,n.job)*mult*fed;n.workToday++;n.fatigue=cap(n.fatigue+(n.workToday>8?2.2:1),0,100);n.skills[n.job]=cap(n.skills[n.job]+.025*n.potentials[n.job]*(n.traits.includes('scholarly')?1.5:1),0,100);
   if(n.job==='woodcutter')recordWork(s,n.id,n.job,'wood',change(s,'wood',.8*p));if(n.job==='miner')recordWork(s,n.id,n.job,'stone',change(s,'stone',.6*p));if(n.job==='scholar'){recordWork(s,n.id,n.job,'knowledge',change(s,'knowledge',.9*p));recordWork(s,n.id,n.job,'qi',change(s,'qi',.5*p));}
   if(n.job==='alchemist'&&s.techs.includes('alchemy')&&canPay(s,{herb:1.5*p,qi:.75*p})&&s.resources.pill<capacity(s,'pill')){spend(s,{herb:1.5*p,qi:.75*p});recordWork(s,n.id,n.job,'pill',change(s,'pill',.25*p));}
   s.autoClocks[n.job]=(s.autoClocks[n.job]||0)+p;if(s.autoClocks[n.job]>=6){s.autoClocks[n.job]-=6;autoRole(s,n.job,n);}
   if(['hr','foreman','deputy'].includes(n.job)){const other=members(s).filter(v=>v.id!==n.id);if(other.length){const target=other[(Math.floor(h/3)+n.id)%other.length];recordContact(s,target,{id:n.id,name:n.name,skill:n.skills.hr},.2);}}
  } else n.fatigue=cap(n.fatigue-1.8,0,100);
 }
 if(h%24<s.player.hours){const share=1/playerJobCount(s);for(const job of (s.player.jobs||[s.player.role])){s.player.skills[job]=cap(s.player.skills[job]+.025*share,0,100);if(job==='woodcutter')recordWork(s,'player',job,'wood',change(s,'wood',.65*fed*share));if(job==='miner')recordWork(s,'player',job,'stone',change(s,'stone',.5*fed*share));if(job==='scholar'){recordWork(s,'player',job,'knowledge',change(s,'knowledge',.75*fed*share));recordWork(s,'player',job,'qi',change(s,'qi',.45*fed*share));}if(job==='alchemist'&&s.techs.includes('alchemy')&&canPay(s,{herb:1.5*fed*share,qi:.75*fed*share})&&s.resources.pill<capacity(s,'pill')){spend(s,{herb:1.5*fed*share,qi:.75*fed*share});recordWork(s,'player',job,'pill',change(s,'pill',.25*fed*share));}}}
 s.player.stamina=Math.min(10,s.player.stamina+2);if(h>0&&h%24===0)for(const p of s.plots){p.weeds=Math.min(6,(p.weeds??3)+1);p.pests=Math.min(5,(p.pests??2)+(h%48===0?1:0));}
 if(s.projects.length){const p=s.projects[0];p.progress+=power(s,'builder')*fed;if(p.progress>=p.required){s.projects.shift();s.buildings[p.key]++;if(p.key==='field')s.plots.push({crop:'rice',owner:staff(s,'farmer')[0]?.id||'player'});s.stats.completed++;for(const r of s.requests)if(r.kind==='housing'&&p.key==='hut')r.status='完成';log(s,`「${BUILDINGS[p.key].name}」落成，新的发展条件已经具备。`,'milestone');}}
 if(s.research){s.research.progress+=power(s,'scholar')*fed;if(s.research.progress>=s.research.required){const key=s.research.key;s.techs.push(key);s.research=null;s.stats.researched++;log(s,`宗门习得「${TECHS[key].name}」。`,'milestone');}}
 const finished=[];for(const q of s.inquiries){q.progress+=power(s,q.role)*fed;if(q.progress>=q.required){finishInquiry(s,q,observer(s,q.role)?.name||'岗位复核');finished.push(q.id);}}s.inquiries=s.inquiries.filter(q=>!finished.includes(q.id));
 refreshUnlocks(s);s.hour++;
 if(s.hour%24===0){payroll(s);s.lastDay={...s.today};s.productionReport={normal:s.today.production/[1.5,1,1,.25][Math.floor((s.hour-1)/(24*SEASON_DAYS))%4],hour:s.hour,by:'生产交接记录'};s.today={production:0,consumption:0,revenue:0,wages:0};
  if(day(s)%7===0){const pool=members(s);if(pool.length)householdEvent(s,pool[Math.floor(random(s)*pool.length)]);}
  if(day(s)>3)for(const n of members(s))if(s.hour-n.lastIncident>96)commitMisconduct(s,n);
  if(day(s)%2===0&&s.candidates.length<5){const n=makePerson(s,s.nextPerson++);n.active=false;s.candidates.push(n);log(s,'一位云游修士来到山门，可由人事岗位接触考察。','arrival');}
  for(const k of Object.keys(RES))s.reports[k]={value:s.books[k],hour:s.hour,by:staff(s,'treasurer')[0]?.name||'交接账簿',source:'岗位账报'};
 }
}
export function tick(s,seconds) { if(s.paused||!Number.isFinite(seconds)||seconds<=0)return s;s.carry+=Math.min(seconds,28800);while(s.carry+1e-9>=HOUR){s.carry=Math.max(0,s.carry-HOUR);advanceHour(s);}return s; }
function actLegacy(s,a) {
 const role=s.player.role,n=getPerson(s,a.id), need=(roles)=>roles.includes(role)?null:'请先切换到'+roles.map(k=>JOBS[k].name).join('或')+'岗位';
 if(a.type==='role'){if(!JOBS[a.role])return '岗位不存在';s.player.role=a.role;return null;}
 if(a.type==='assign'){if(!n||!n.active)return '弟子不存在';if(a.job!=='idle'&&!JOBS[a.job])return '未知岗位';if(JOBS[a.job]?.building&&!s.buildings[JOBS[a.job].building])return '该 NPC 岗位需要'+BUILDINGS[JOBS[a.job].building].name;n.job=a.job;n.shift=((staff(s,a.job).filter(v=>v.id!==n.id).length)*n.hours)%24;log(s,`${n.name}调任${JOBS[a.job]?.name||'待命'}。`);return null;}
 if(a.type==='hours'){if(!n?.active||![8,12,16].includes(Number(a.hours)))return '请选择有效工时';n.hours=Number(a.hours);n.shift=((staff(s,n.job).filter(v=>v.id<n.id).length)*n.hours)%24;return null;}
 if(a.type==='shift'){if(!n?.active||!Number.isInteger(Number(a.shift))||Number(a.shift)<0||Number(a.shift)>23)return '请选择 0–23 点';n.shift=Number(a.shift);return null;}
 if(a.type==='player-hours'){if(![8,12,16].includes(Number(a.hours)))return '工时无效';s.player.hours=Number(a.hours);return null;}
 if(a.type==='policy'){const e=need(['deputy']);if(e)return e;if(['overtime','benefits','review'].includes(a.key))s.policies[a.key]=!!a.value;else if(a.key==='wage'&&[.8,1,1.25,1.5].includes(Number(a.value)))s.policies.wage=Number(a.value);else if(a.key==='hours'&&[8,12,16].includes(Number(a.value)))s.policies.hours=Number(a.value);else return '制度参数无效';return null;}
 if(a.type==='order'){const e=need(a.section==='hr'?['hr','deputy']:a.section==='trade'?['treasurer','deputy']:['deputy']);if(e)return e;const bounds={target:[0,40],reserveDays:[0,15],reserve:[0,10000],budget:[0,10000]};if(['auto','autoBuild'].includes(a.key))s.orders[a.section][a.key]=!!a.value;else if(a.key==='priority'&&JOBS[a.value])s.orders.hr.priority=a.value;else if(bounds[a.key]&&Number.isFinite(Number(a.value))){const [lo,hi]=bounds[a.key];s.orders[a.section][a.key]=cap(Number(a.value),lo,hi);}else return '目标参数无效';return null;}
 if(a.type==='crop'){const e=need(['foreman','farmer']);if(e)return e;const crop=CROPS[a.crop];if(!crop||!s.plots[a.index])return '灵田或灵种无效';if(crop.tech&&!s.techs.includes(crop.tech))return '需先习得'+TECHS[crop.tech].name;if(s.plots[a.index].crop===a.crop)return null;if(!canPay(s,{coin:crop.price}))return '改种所需灵石不足';spend(s,{coin:crop.price});s.plots[a.index].crop=a.crop;return null;}
 if(a.type==='interview'){const e=need(['hr']);if(e)return e;if(!n)return '受访者不存在';if(s.inquiries.some(q=>q.type==='interview'&&q.target===n.id))return '已经安排接触考察';s.inquiries.push({id:++s.serial,type:'interview',target:n.id,caseId:null,role:'hr',progress:0,required:4});return null;}
 if(a.type==='hire'){const e=need(['hr']);if(e)return e;if(!s.candidates.includes(n))return '请选择尚在山门的候选人';return hire(s,n,a.job||s.orders.hr.priority,{id:'player',name:'亲自任职',skill:s.player.skills.hr});}
 if(a.type==='build'){const e=need(['builder','deputy']);if(e)return e;return queueBuild(s,a.key,role==='deputy'?'副宗主协调':'营造当值');}
 if(a.type==='coordinate'){const e=need(['deputy']);if(e)return e;const r=s.requests.find(r=>r.id===Number(a.id));if(!r)return '需求不存在';if(r.kind==='housing'){const error=queueBuild(s,'hut','副宗主协调');if(!error)r.status='已派营造';return error;}return '该需求需调整人事或生产安排';}
 if(a.type==='sell'){const e=need(['treasurer']);if(e)return e;return trade(s,a.key,Number(a.amount)||10);}
 if(a.type==='publish'){if(!JOBS[role].keys.length)return '此岗位没有可直接核实的库存';return publish(s);}
 if(a.type==='inquiry')return startInquiry(s,a.kind,a.caseId||null);
 if(a.type==='research'){const e=need(['scholar']);if(e)return e;if(!TECHS[a.key])return '技艺不存在';if(s.techs.includes(a.key))return '已习得';if(s.research)return '已有研习课题';if(!canPay(s,TECHS[a.key].cost))return '研习资源不足';spend(s,TECHS[a.key].cost);s.research={key:a.key,progress:0,required:12};return null;}
 if(a.type==='aid'){const e=need(['hr','treasurer','deputy']);if(e)return e;if(!n?.active)return '弟子不存在';const amount=Math.min(10,n.emergency?.remaining||5);if(s.resources.coin<amount)return '实存灵石不足';change(s,'coin',-amount);n.wealth+=amount;n.pressure=Math.max(0,n.pressure-amount);n.happiness=cap(n.happiness+8,0,100);transaction(s,'困难救助',amount,n.id);log(s,`向${n.name}救助 ${amount.toFixed(1)} 灵石；已记录，改善眼前处境不能保证未来行为。`);return null;}
 if(a.type==='close-case'){const e=need(['deputy','investigator']);if(e)return e;const c=s.cases.find(c=>c.id===Number(a.id));if(!c||c.status==='已结案')return '案件不存在或已结案';if(!caseView(s,c).canConclude)return '需至少两类独立证据交叉印证，不能仅凭怀疑处分';const i=s.incidents.find(i=>i.id===c.incident),suspect=getPerson(s,i.actor);const recovered=Math.min(suspect.wealth,i.proceeds);suspect.wealth-=recovered;change(s,'coin',recovered);s.stats.recovered+=recovered;if(i.kind==='diversion')s.books.grain=Math.max(0,s.books.grain-i.amount);suspect.job='idle';suspect.trust=0;suspect.status='已撤职，事实存档';i.resolved=true;c.status='已结案';s.archives[suspect.id]??=[];s.archives[suspect.id].unshift({hour:s.hour,by:'联合核实',kind:'核实',text:`案件 #${c.id} 两类以上证据相互印证，撤职并追缴 ${recovered.toFixed(1)} 灵石。`});log(s,`案件 #${c.id} 已结：${suspect.name}撤职，追缴 ${recovered.toFixed(1)} 灵石。`,'case');return null;}
 return '未识别的操作';
}
export function phase(s) { if(s.buildings.hall&&s.buildings.registry&&s.buildings.watchpost)return '诸司成制';if(s.buildings.library)return '问道兴业';if(s.buildings.store)return '开仓立业';return '草创山门'; }
export function serialize(s,now=Date.now()) { return JSON.stringify({...s,savedAt:now}); }
export function restore(raw,now=Date.now()) {
 const d=JSON.parse(raw);const finite=(v,min=0,max=1e12)=>Number.isFinite(v)&&v>=min&&v<=max;const integer=(v,min,max)=>Number.isInteger(v)&&v>=min&&v<=max;
 if(d&&d.paused===undefined)d.paused=false;
 if(!d||d.version!==VERSION||!integer(d.hour,0,1e9)||!finite(d.carry,0,HOUR)||!integer(d.rng,0,4294967295)||!integer(d.serial,0,1e12)||!finite(d.savedAt,0,now+60000)||!JOBS[d.player?.role]||![8,12,16].includes(d.player.hours))throw Error('这不是有效的宗门岗位版存档');
 migrateRoles(d);const blank=initialState(now);for(const key of Object.keys(RES)){if(!finite(d.resources?.[key],0,1e6)||!finite(d.books?.[key],0,1e6)||!finite(d.reports?.[key]?.value,0,1e6)||!finite(d.reports[key].hour,0,d.hour))throw Error('资源或交接报告数据无效');}
 if(typeof d.paused!=='boolean'||!Object.hasOwn(JOBS,d.player.role))throw Error('当值状态无效');
 if(!d.productionReport)d.productionReport={normal:28,hour:d.hour,by:'既有交接估算'};
 if(!finite(d.productionReport.normal)||!finite(d.productionReport.hour,0,d.hour)||typeof d.productionReport.by!=='string')throw Error('测产报告无效');
 for(const key of Object.keys(BUILDINGS))if(!integer(d.buildings?.[key],0,100))throw Error('建筑数据无效');
 if(!Array.isArray(d.plots)||d.plots.length!==3+d.buildings.field||d.plots.length>24||d.plots.some(p=>!Object.hasOwn(CROPS,p?.crop)))throw Error('灵田数据无效');
 if(!Array.isArray(d.techs)||d.techs.some(t=>!Object.hasOwn(TECHS,t))||new Set(d.techs).size!==d.techs.length)throw Error('技艺数据无效');
 for(const field of ['people','candidates','projects','requests','inquiries','incidents','cases','ledger','logs','lastPayroll','recentDisclosures'])if(!Array.isArray(d[field])||d[field].length>1000)throw Error('宗门记录数据无效');
 const ids=new Set();for(const n of [...d.people,...d.candidates]){if(!integer(n.id,1,1e6)||ids.has(n.id)||typeof n.name!=='string'||n.name.length>40||typeof n.active!=='boolean'||!['idle',...Object.keys(JOBS)].includes(n.job)||![8,12,16].includes(n.hours)||!integer(n.shift,0,23))throw Error('弟子数据无效');ids.add(n.id);for(const k of ['honesty','courage','greed','trust','happiness','fatigue'])if(!finite(n[k],0,100))throw Error('弟子属性无效');for(const k of ['wealth','pressure','arrears','workToday','employedToday','baseWage','daysTogether'])if(!finite(n[k],0,1e8))throw Error('用工数据无效');for(const k of Object.keys(JOBS))if(!finite(n.skills?.[k],0,100)||!finite(n.potentials?.[k],.1,3))throw Error('岗位能力无效');if(!Array.isArray(n.traits)||n.traits.some(t=>!Object.hasOwn(TRAITS,t))||!n.knownBy||typeof n.knownBy!=='object')throw Error('识人档案无效');for(const v of Object.values(n.knownBy))if(!finite(v.contact,0,1e8)||!finite(v.lastHour,0,d.hour))throw Error('接触记录无效');}
 if(members(d).length>housing(d)||!integer(d.nextPerson,1,1e8)||d.nextPerson<=Math.max(0,...ids))throw Error('人口数据无效');
 for(const k of Object.keys(JOBS))if(!finite(d.player.skills?.[k],0,100))throw Error('任职经验无效');
 if(![8,12,16].includes(d.policies?.hours)||![.8,1,1.25,1.5].includes(d.policies.wage)||['overtime','benefits','review'].some(k=>typeof d.policies[k]!=='boolean'))throw Error('制度数据无效');
 if(!d.orders?.hr||!finite(d.orders.hr.target,0,40)||!Object.hasOwn(JOBS,d.orders.hr.priority)||!finite(d.orders.hr.reserveDays,0,15)||typeof d.orders.trade?.auto!=='boolean'||!finite(d.orders.trade.reserve,0,10000)||typeof d.orders.deputy?.autoBuild!=='boolean'||!finite(d.orders.deputy.budget,0,10000))throw Error('委托目标无效');
 for(const p of d.projects)if(!Object.hasOwn(BUILDINGS,p.key)||!finite(p.progress,0,10000)||!finite(p.required,.1,10000))throw Error('营造数据无效');
 if(d.research&&(!Object.hasOwn(TECHS,d.research.key)||!finite(d.research.progress,0,10000)||!finite(d.research.required,.1,10000)))throw Error('研习数据无效');
 const inquiryTypes=['yield','stock','payments','trail','relations','interview'];for(const q of d.inquiries)if(!inquiryTypes.includes(q.type)||!Object.hasOwn(JOBS,q.role)||!finite(q.progress,0,10000)||!finite(q.required,.1,10000))throw Error('核查数据无效');
 for(const c of d.cases)if(!integer(c.id,1,1e12)||!integer(c.incident,1,1e12)||typeof c.title!=='string'||typeof c.requester!=='string'||!Array.isArray(c.evidence)||c.evidence.length>8||c.evidence.some(e=>!['goods','money','route','relations'].includes(e.type)||typeof e.text!=='string'||typeof e.by!=='string'||!Array.isArray(e.people)||e.people.some(id=>!integer(id,1,1e6))))throw Error('证据记录无效');
 for(const i of d.incidents)if(!integer(i.id,1,1e12)||!ids.has(i.actor)||!['bribe','diversion'].includes(i.kind)||!finite(i.amount)||!finite(i.proceeds)||typeof i.resolved!=='boolean')throw Error('行为记录无效');
 for(const c of d.cases)if(!d.incidents.some(i=>i.id===c.incident))throw Error('线索关联无效');
 for(const r of d.requests)if(!integer(r.id,1,1e12)||typeof r.kind!=='string'||typeof r.text!=='string'||typeof r.from!=='string'||typeof r.status!=='string')throw Error('需求记录无效');
 for(const l of d.logs)if(typeof l.text!=='string'||!finite(l.hour,0,d.hour))throw Error('交接记录无效');
 for(const rows of Object.values(d.archives||{}))if(!Array.isArray(rows)||rows.length>100||rows.some(r=>typeof r.by!=='string'||typeof r.text!=='string'||typeof r.kind!=='string'||!finite(r.hour,0,d.hour)))throw Error('档案格式无效');
 if(!d.archives||typeof d.archives!=='object'||!d.autoClocks||!d.stats||!d.today||!d.lastDay||!finite(d.benefitFund,0,1e9))throw Error('经营数据无效');
 for(const v of Object.values(d.autoClocks))if(!finite(v,0,1000))throw Error('岗位进度无效');for(const field of ['stats','today','lastDay'])for(const k of Object.keys(blank[field]))if(!finite(d[field][k],0,1e12))throw Error('统计数据无效');
 for(const key of Object.keys(RES))if(d.resources[key]>capacity(d,key)+1e-6)throw Error('库存超过容量');
 validateGovernance(d);refreshUnlocks(d);if(!jobUnlocked(d,d.player.role))d.player.role='farmer';for(const n of members(d))if(n.job!=='idle'&&!jobUnlocked(d,n.job))n.job='idle';const offline=Math.min(28800,Math.max(0,(now-d.savedAt)/1000));tick(d,offline);d.savedAt=now;return {state:d,offline};
}

// 岗位开放、职责和信息传递是同一套规则，界面与操作共用。
Object.assign(JOBS,{
 hr:{...JOBS.hr,name:'人事弟子',kind:'执行',desc:'接触来客、进行面谈，按招聘目标接纳并提交具名考察。'},
 treasurer:{...JOBS.treasurer,name:'库务弟子',kind:'执行',desc:'经办库存、交易和俸禄支付，向财务主管报送账簿。'},
 foreman:{...JOBS.foreman,keys:[],desc:'接收灵植弟子的收成汇报，安排责任田与轮值，并上报部门情况。'},
 hrChief:{name:'人事主管',icon:'任',kind:'管理',desc:'汇总人事弟子的具名考察与招聘进展，制定目标并向副宗主汇报。',keys:[],skill:'hrChief',building:'personnelOffice'},
 financeChief:{name:'财务主管',icon:'筹',kind:'管理',desc:'汇总库务弟子的库存与收支报告，安排贸易目标并向副宗主汇报。',keys:[],skill:'financeChief',building:'financeOffice'}
});
Object.assign(BUILDINGS,{
 personnelOffice:{name:'人事堂',icon:'任',desc:'建立人事主管岗位，汇总人事弟子的考察与招聘工作。',base:{wood:80,stone:45,coin:35,knowledge:12},scale:1.5,hours:10},
 financeOffice:{name:'财务堂',icon:'筹',desc:'建立财务主管岗位，汇总库务经办报告。',base:{wood:85,stone:50,coin:35,knowledge:12},scale:1.5,hours:10}
});
export const ROLE_TREE={foreman:['farmer'],hrChief:['hr'],financeChief:['treasurer'],deputy:['foreman','hrChief','financeChief','builder','scholar','alchemist','auditor','investigator']};
export const ROLE_GATES={
 farmer:'开山即可任职',woodcutter:'筹备引水木架，产生灵木需求',miner:'规划工程，产生尚缺的青石需求',builder:'修好引水木架，开始宗门营造',
 hr:'建成弟子居',treasurer:'建成纳物仓',foreman:'至少 6 位弟子，且增开过灵田',scholar:'建成听雨书斋',
 hrChief:'建成人事堂',financeChief:'建成财务堂',deputy:'建成议事堂、人事堂与财务堂',
 auditor:'建成档案监察院并习得交接与复核',investigator:'建成巡察司',alchemist:'建成丹房并习得草木丹诀'
};
export function jobUnlocked(s,role){return !!s.unlockedJobs?.includes(role);}
export function availableJobs(s){return (s.unlockedJobs||[]).filter(k=>Object.hasOwn(JOBS,k)).map(k=>[k,JOBS[k]]);}
export function refreshUnlocks(s){
 if(!s.unlockedJobs)return;
 const b=s.buildings;
 const ready={farmer:true,woodcutter:!!s.development?.needs.wood,miner:!!s.development?.needs.stone,builder:!!s.development?.frame,
 hr:b.hut>0,treasurer:b.store>0,foreman:members(s).length>=6&&b.field>0,scholar:b.library>0,
 hrChief:b.personnelOffice>0,financeChief:b.financeOffice>0,deputy:b.hall>0&&b.personnelOffice>0&&b.financeOffice>0,
 auditor:b.registry>0&&s.techs.includes('records'),investigator:b.watchpost>0,alchemist:b.furnace>0&&s.techs.includes('alchemy')};
 for(const [role,ok]of Object.entries(ready))if(ok&&!jobUnlocked(s,role)){s.unlockedJobs.push(role);log(s,`新职司开放：${JOBS[role].name}。${ROLE_GATES[role]}。`,'unlock');}
}
function recordWork(s,id,role,key,amount){if(!s.workRecords)return;const k=role+':'+id;const r=s.workRecords[k]??={role,actor:id,totals:{},last:{},hour:s.hour};if(r.hour!==s.hour){r.last={};r.hour=s.hour;}r.totals[key]=(r.totals[key]||0)+amount;r.last[key]=(r.last[key]||0)+amount;}
function recordPlot(s,p,key,amount){p.owner??=s.plots.indexOf(p)===s.player.field?'player':staff(s,'farmer')[0]?.id||'player';p.harvest??={};p.harvest[key]=(p.harvest[key]||0)+amount;p.lastOutput={key,amount,hour:s.hour};recordWork(s,p.owner,'farmer',key,amount);}
export function ownPlots(s,id='player'){return s.plots.map((p,index)=>({...p,index})).filter(p=>p.owner===id);}
export function ownWork(s,role=s.player.role,id='player'){return structuredClone(s.workRecords?.[role+':'+id]||{role,actor:id,totals:{},last:{},hour:s.hour});}
export function directReports(s,role=s.player.role){const children=ROLE_TREE[role]||[];return Object.values(s.workReports||{}).filter(r=>children.includes(r.role)).map(r=>structuredClone(r));}
export function submitReport(s,job=s.player.role,by='player'){
 if(!s.workReports)return null;
 const n=typeof by==='number'?getPerson(s,by):null,who=n?.name||'亲自任职',id=n?.id||'player';let payload={},sources=[];
 if(ROLE_TREE[job]){sources=directReports(s,job);payload={summary:sources.length?`收到 ${sources.length} 份下属具名报告。`:'尚未收到下属报告。',totals:{},assessments:[]};for(const r of sources){for(const[k,v]of Object.entries(r.payload.totals||{}))payload.totals[k]=(payload.totals[k]||0)+v;payload.assessments.push(...(r.payload.assessments||[]));}}
 else if(job==='hr')payload={summary:`山门候选 ${s.candidates.length} 人；接纳目标 ${s.orders.hr.target} 人。`,candidateCount:s.candidates.length,assessments:Object.entries(s.archives).flatMap(([person,rows])=>rows.filter(r=>r.kind==='评价'&&r.by===who).map(r=>({person:Number(person),name:getPerson(s,person)?.name||'历史来客',...r}))),totals:{}};
 else if(job==='treasurer'){let values={...s.resources};if(n&&s.incidents.some(i=>i.actor===n.id&&!i.resolved))values={...s.books};payload={summary:`库务上报上日收入 ${s.lastDay.revenue.toFixed(1)}，俸禄实付 ${s.lastDay.wages.toFixed(1)} 灵石。`,stocks:values,payroll:structuredClone(s.lastPayroll),revenue:s.lastDay.revenue,wages:s.lastDay.wages,totals:{}};}
 else if(['auditor','investigator'].includes(job))payload={summary:`已移交 ${s.cases.length} 项线索。`,cases:s.cases.map(c=>caseView(s,c)),totals:{}};
 else if(job==='builder')payload={summary:`经办 ${s.projects.length} 项营造。`,projects:structuredClone(s.projects),totals:ownWork(s,job,id).totals};
 else payload={summary:'本岗负责范围的累计实收记录。',totals:ownWork(s,job,id).totals,plots:job==='farmer'?ownPlots(s,id).map(p=>({index:p.index,crop:p.crop,harvest:p.harvest||{}})):[]};
 if(job==='financeChief'&&sources.length){const latest=[...sources].sort((a,b)=>b.hour-a.hour)[0];payload.stocks=structuredClone(latest.payload.stocks||{});payload.revenue=latest.payload.revenue||0;payload.wages=latest.payload.wages||0;payload.summary='依据库务上报：上日收入 '+payload.revenue.toFixed(1)+'，俸禄实付 '+payload.wages.toFixed(1)+' 灵石。';}
 if(job==='hrChief'&&sources.length){payload.candidateCount=Math.max(...sources.map(r=>r.payload.candidateCount||0));payload.summary='人事弟子上报候选 '+payload.candidateCount+' 人；汇总 '+payload.assessments.length+' 份具名考察。';}
 const report={role:job,by:who,actor:id,hour:s.hour,payload,sources};s.workReports[job+':'+id]=report;return null;
}
export function publish(s,job=s.player.role,by='player'){
 submitReport(s,job,by);
 if(!ROLE_TREE[job]&&job!=='farmer')publishLegacy(s,job,by==='player'?'亲自任职':by);
 return null;
}
export function roleInformation(s,role=s.player.role){
 const own=ownWork(s,role),manager=!!ROLE_TREE[role];return {role,kind:manager?'汇报汇总':'本岗实况',own,plots:role==='farmer'?ownPlots(s):[],reports:manager?directReports(s,role):[],tasks:s.inquiries.filter(q=>q.role===role).map(q=>({...q})),resourceKeys:manager?[]:role==='farmer'?Object.keys(own.totals).length?Object.keys(own.totals):['grain']:JOBS[role].keys};
}
export function nextRoleMilestone(s){const next=['woodcutter','miner','builder','hr','treasurer','foreman','scholar','hrChief','financeChief','deputy','auditor','investigator','alchemist'].find(k=>!jobUnlocked(s,k));return next?{role:next,name:JOBS[next].name,condition:ROLE_GATES[next]}:null;}
function actRoles(s,a){
 refreshUnlocks(s);const role=s.player.role;
 if(a.type==='role'){if(!JOBS[a.role])return '岗位不存在';if(!jobUnlocked(s,a.role))return '岗位尚未开放：'+ROLE_GATES[a.role];s.player.role=a.role;return null;}
 if(a.type==='tutorial'){if(!jobUnlocked(s,a.role||role))return '岗位尚未开放';if(!s.tutorialSeen.includes(a.role||role))s.tutorialSeen.push(a.role||role);return null;}
 if(['assign','hire'].includes(a.type)){const job=a.job||s.orders.hr.priority;if(job!=='idle'&&!jobUnlocked(s,job))return '该岗位尚未开放';}
 if(a.type==='crop'&&role==='farmer'&&s.plots[a.index]?.owner!=='player')return '只能照料自己负责的灵田';
 if(a.type==='field-owner'){if(role!=='foreman')return '责任田由灵植队长安排';const p=s.plots[a.index];if(!p)return '灵田不存在';if(a.owner!=='player'&&!staff(s,'farmer').some(n=>n.id===Number(a.owner)))return '请选择灵植弟子';p.owner=a.owner==='player'?'player':Number(a.owner);return null;}
 if(a.type==='policy'&&role!=='deputy')return '用工制度由副宗主制定';
 if(a.type==='order'){
  const allowed=a.section==='hr'?['hrChief','deputy']:a.section==='trade'?['financeChief','deputy']:['deputy'];
  if(!allowed.includes(role))return '工作目标由相应主管制定';
  if(a.key==='priority'&&!jobUnlocked(s,a.value))return '目标岗位尚未开放';
  const prev=s.player.role;s.player.role='deputy';try{return actLegacy(s,a);}finally{s.player.role=prev;}
 }
 if(a.type==='publish')return publish(s);
 if(a.type==='build'&&role!=='builder')return '营造项目由营造岗位执行';
 if(a.type==='inquiry')return startInquiry(s,a.kind,a.caseId||null);
 if(['hrChief','financeChief'].includes(role)&&!['assign','hours','shift','player-hours'].includes(a.type))return '主管通过下属报告和工作目标履职；请切换执行岗位处理具体业务';
 return actLegacy(s,a);
}
function migrateRoles(s){upgradeAssignments(s);
 for(const key of ['hrChief','financeChief']){s.player.skills[key]??=10;for(const n of [...s.people,...s.candidates]){n.skills[key]??=10;n.potentials[key]??=1;}}
 for(const key of ['personnelOffice','financeOffice'])s.buildings[key]??=0;
 if(s.governance===undefined){s.governance=2;s.unlockedJobs=['farmer'];s.tutorialSeen=[];s.workRecords={};s.workReports={};s.gathered={wood:0,stone:0};s.player.field=0;s.plots.forEach((p,i)=>p.owner=i===0?'player':s.people[i%s.people.length]?.id||'player');s.logs=s.logs.filter(l=>l.kind==='milestone'||l.kind==='unlock');}
}
function validateGovernance(s){
 if(!Array.isArray(s.player.jobs)||!s.player.jobs.length||new Set(s.player.jobs).size!==s.player.jobs.length||s.player.jobs.some(k=>!JOBS[k]||!jobUnlocked(s,k))||!Number.isFinite(s.player.stamina)||s.player.stamina<0||s.player.stamina>10||!s.manual||!Number.isInteger(s.manual.clicks)||!s.manual.reviewed||!s.development||typeof s.development.frame!=='boolean'||typeof s.development.needs?.wood!=='boolean'||typeof s.development.needs?.stone!=='boolean')throw Error('兼任或发展需求记录无效');
 if(s.governance!==2||!Array.isArray(s.unlockedJobs)||s.unlockedJobs.some(k=>!Object.hasOwn(JOBS,k))||!s.unlockedJobs.includes('farmer')||!Array.isArray(s.tutorialSeen)||s.tutorialSeen.some(k=>!Object.hasOwn(JOBS,k)))throw Error('岗位开放记录无效');
 if(!s.workRecords||!s.workReports||!s.gathered||Object.values(s.gathered).some(v=>!Number.isFinite(v)||v<0))throw Error('岗位工作记录无效');
 for(const p of s.plots)if(p.owner!=='player'&&!s.people.some(n=>n.id===p.owner))throw Error('责任田记录无效');
 for(const r of Object.values(s.workRecords))if(!JOBS[r.role]||Object.values(r.totals||{}).some(v=>!Number.isFinite(v)||v<0))throw Error('实收记录无效');
 const check=(r,depth=0)=>{if(depth>3||!JOBS[r.role]||typeof r.by!=='string'||!Number.isFinite(r.hour)||r.hour<0||r.hour>s.hour||!r.payload||typeof r.payload.summary!=='string'||!Array.isArray(r.sources)||r.sources.length>100)throw Error('岗位报告无效');for(const c of r.sources)check(c,depth+1);};for(const r of Object.values(s.workReports))check(r);
}

export function playerHasJob(s,job){return (s.player.jobs||[s.player.role]).includes(job);}
export function playerJobCount(s){return Math.max(1,(s.player.jobs||[s.player.role]).length);}
export function appointedJobs(s){return (s.player.jobs||[s.player.role]).filter(k=>jobUnlocked(s,k)).map(k=>[k,JOBS[k]]);}
export function developmentChoices(s){if(!s.development.frame)return [];const b=s.buildings;return ['field','hut','store','workshop',...(b.store?['library']:[]),...(b.library?['personnelOffice','financeOffice','registry','watchpost']:[]),...(b.personnelOffice&&b.financeOffice?['hall']:[]),...(s.techs.includes('alchemy')?['furnace']:[])];}
export function planProject(s,key){
 if(key==='frame'){if(s.development.frame)return '引水木架已经修好';s.development.goal='frame';s.development.needs.wood=true;refreshUnlocks(s);return null;}
 if(!developmentChoices(s).includes(key))return '当前尚未产生这项工程需求';s.development.goal=key;for(const [k,n]of Object.entries(costFor(s,key)))if(['wood','stone'].includes(k)&&s.resources[k]<n)s.development.needs[k]=true;refreshUnlocks(s);return null;
}
export const MANUAL_ACTIONS={
 farmer:[['weed','拔除杂草','清除责任田杂草，改善持续产出'],['pest','捉除灵虫','减少虫害，改善持续产出'],['harvest','采收灵穗','本人责任田即时实收 1 灵米']],
 woodcutter:[['chop','挥斧伐木','实收 1 灵木']],miner:[['mine','挥镐采石','实收 1 青石']],
 builder:[['construct','搬料施工','当前项目增加 1 营造工时']],scholar:[['study','研读一页','积累 0.7 学识，或推进课题']],alchemist:[['fire','照看炉火','消耗 1.5 药草与 0.75 灵气，炼出 0.25 丹']],
 hr:[['contact','整理面谈笔记','与首位候选人接触考察 0.5 工时']],treasurer:[['ledger','登记收支凭证','整理经办账簿并提交库务报告']],
 foreman:[['review','批阅收成汇报','阅读一份尚未批阅的下属报告']],hrChief:[['review','批阅考察汇报','阅读一份尚未批阅的下属报告']],financeChief:[['review','批阅库务汇报','阅读一份尚未批阅的下属报告']],deputy:[['review','批阅部门呈报','阅读一份尚未批阅的主管报告']],
 auditor:[['audit','逐条复核凭据','推进已启动的监察任务 1 工时']],investigator:[['trace','走访核实线索','推进已启动的巡察任务 1 工时']]
};
export function manualWork(s,kind){const job=s.player.role;if(!playerHasJob(s,job)||!jobUnlocked(s,job))return '请先兼任这个岗位';if(!MANUAL_ACTIONS[job]?.some(([k])=>k===kind))return '本岗没有这项职责';if(s.player.stamina<1)return '精力不足，稍候恢复';
 let perform;
 if(['weed','pest','harvest'].includes(kind)){const p=s.plots.find(p=>p.owner==='player');if(!p)return '需要先安排本人责任田';const field=kind==='weed'?'weeds':'pests';if(kind!=='harvest'&&(p[field]??(kind==='weed'?3:2))<=0)return kind==='weed'?'责任田暂无杂草':'责任田暂无虫害';if(kind==='harvest'&&p.crop!=='rice')return '当前责任田没有种灵稻';if(kind==='harvest'&&s.resources.grain>=capacity(s,'grain'))return '灵米已满仓';perform=()=>{if(kind==='harvest'){const got=change(s,'grain',1);recordPlot(s,p,'grain',got);s.stats.produced+=got;s.today.production+=got;}else p[field]=Math.max(0,(p[field]??(kind==='weed'?3:2))-1);};}
 else if(kind==='chop'||kind==='mine'){const key=kind==='chop'?'wood':'stone';if(s.resources[key]>=capacity(s,key))return '当前资源已满仓';perform=()=>recordWork(s,'player',job,key,change(s,key,1));}
 else if(kind==='construct'){if(!s.projects.length)return '请先规划并安排一项营造';perform=()=>s.projects[0].progress=Math.min(s.projects[0].required,s.projects[0].progress+1);}
 else if(kind==='study'){if(!s.research&&s.resources.knowledge>=capacity(s,'knowledge'))return '学识已达当前储量';perform=()=>{if(s.research)s.research.progress=Math.min(s.research.required,s.research.progress+1);else recordWork(s,'player',job,'knowledge',change(s,'knowledge',.7));};}
 else if(kind==='fire'){if(!canPay(s,{herb:1.5,qi:.75})||s.resources.pill>=capacity(s,'pill'))return '需要药草、灵气和灵丹储位';perform=()=>{spend(s,{herb:1.5,qi:.75});recordWork(s,'player',job,'pill',change(s,'pill',.25));};}
 else if(kind==='contact'){const n=s.candidates[0]||s.people[0];if(!n)return '暂无可接触的同道';perform=()=>{const who={id:'player',name:'亲自任职',skill:s.player.skills.hr};recordContact(s,n,who,.5);fileAssessment(s,n,who);};}
 else if(kind==='review'){const next=directReports(s,job).find(r=>!Object.hasOwn(s.manual.reviewed,job+':'+r.role+':'+r.actor+':'+r.hour));if(!next)return '暂时没有新的下属报告，批阅不会凭空获得实情';perform=()=>{s.manual.reviewed[job+':'+next.role+':'+next.actor+':'+next.hour]=s.hour;submitReport(s,job);};}
 else if(kind==='ledger')perform=()=>submitReport(s,job);
 else if(kind==='audit'||kind==='trace'){const q=s.inquiries.find(q=>q.role===job);if(!q)return '请先启动本岗核查或调查任务';perform=()=>q.progress=Math.min(q.required,q.progress+1);}
 if(!perform)return '当前没有可办理的工作';perform();s.player.stamina-=1;s.manual.clicks++;s.player.skills[job]=Math.min(100,s.player.skills[job]+.08);refreshUnlocks(s);return null;
}
export function act(s,a){refreshUnlocks(s);
 if(a.type==='appointments'){if(!Array.isArray(a.jobs)||!a.jobs.length||new Set(a.jobs).size!==a.jobs.length||a.jobs.some(k=>!JOBS[k]||!jobUnlocked(s,k)))return '至少兼任一个已开放岗位';s.player.jobs=[...a.jobs];if(!s.player.jobs.includes(s.player.role))s.player.role=s.player.jobs[0];return null;}
 if(a.type==='role'&&!playerHasJob(s,a.role))return jobUnlocked(s,a.role)?'请先在岗位安排中勾选兼任，再打开对应页签':'岗位尚未开放：'+(ROLE_GATES[a.role]||'未知岗位');
 if(a.type==='manual')return manualWork(s,a.kind);
 if(a.type==='plan')return planProject(s,a.key);
 if(a.type==='finish-frame'){if(s.development.goal!=='frame'||s.development.frame)return '请先筹备引水木架';if(!canPay(s,{wood:20}))return '引水木架还需要 20 灵木';spend(s,{wood:20});s.development.frame=true;s.development.goal=null;refreshUnlocks(s);return null;}
 if(a.type==='build'){const e=planProject(s,a.key);if(e)return e;}
 return actRoles(s,a);
}
function upgradeAssignments(s){if(s.governance===2)return;const built=Object.values(s.buildings||{}).some(v=>v>0);s.development={goal:null,needs:{wood:built,stone:built},frame:built};s.player.jobs=['farmer'];s.player.role='farmer';s.player.stamina=10;s.manual={clicks:0,reviewed:{}};s.workRecords??={};s.workReports??={};s.gathered??={wood:0,stone:0};s.tutorialSeen=[];s.unlockedJobs=['farmer'];s.player.field??=0;s.plots.forEach((p,i)=>p.owner??=i===0?'player':s.people[i%s.people.length]?.id||'player');s.governance=2;refreshUnlocks(s);}
