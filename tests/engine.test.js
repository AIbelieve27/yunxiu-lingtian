import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as E from '../engine.js';
test('播种扣费、成熟收获与重复收获保护',()=>{let s=E.initialState();assert.equal(E.plant(s,0,'rice'),null);assert.equal(s.resources.coin,38);assert.ok(E.harvest(s,0));E.tick(s,36);assert.equal(E.harvest(s,0),null);assert.equal(s.resources.grain,37);assert.ok(E.harvest(s,0));assert.equal(s.stats.harvested,1);});
test('资源不足与境界锁定不会扣除材料',()=>{let s=E.initialState();assert.ok(E.plant(s,0,'herb'));assert.ok(E.build(s,'library'));assert.equal(s.resources.coin,40);assert.equal(s.resources.wood,30);});
test('弟子分配、建筑限制与自动补种',()=>{let s=E.initialState();E.recruit(s);assert.ok(E.assign(s,'scholar',1));assert.equal(E.assign(s,'farmer',1),null);assert.ok(E.assign(s,'meditator',1));E.plant(s,0,'rice');E.tick(s,40);assert.ok(s.stats.harvested>=1);assert.equal(s.plots[0].crop,'rice');assert.equal(s.stats.planted,2);assert.equal(E.freeWorkers(s),0);});
test('离线修行等同在线模拟，且最多结算八小时',()=>{let s=E.initialState(1000);E.recruit(s);E.assign(s,'farmer',1);E.plant(s,0,'rice');let raw=E.serialize(s,1000),a=E.restore(raw,361000).state,b=structuredClone(s);E.tick(b,360);assert.deepEqual(a.resources,b.resources);assert.deepEqual(a.plots,b.plots);assert.equal(E.restore(raw,1000+48*3600*1000).offline,28800);});
test('四季改变速度和收成，缺粮弟子减产而不死亡',()=>{let s=E.initialState();assert.equal(E.cropSpeed(s),1.15);s.elapsed=540;assert.equal(E.cropSpeed(s),.75);s.elapsed=360;assert.equal(E.cropYield(s),1.2);E.recruit(s);E.assign(s,'meditator',1);let full=E.rates(s).qi;s.resources.grain=0;assert.ok(E.rates(s).qi<full);E.tick(s,20);assert.equal(s.population,1);assert.equal(s.resources.grain,0);});
test('科技、炼丹、突破的条件和资源支付',()=>{let s=E.initialState();assert.ok(E.brew(s));s.buildings.library=1;s.buildings.furnace=1;s.resources.knowledge=100;s.resources.herb=100;s.resources.qi=200;s.resources.grain=100;assert.equal(E.research(s,'alchemy'),null);assert.equal(E.brew(s),null);assert.equal(s.resources.pill,1);assert.equal(s.resources.herb,72);assert.equal(E.breakthrough(s),null);assert.equal(s.realm,1);assert.equal(E.capacity(s),400);assert.ok(E.breakthrough(s));});
test('机缘只能领取一次',()=>{let s=E.initialState();E.plant(s,0,'rice');assert.equal(E.claim(s,'sow'),null);let coin=s.resources.coin;assert.ok(E.claim(s,'sow'));assert.equal(s.resources.coin,coin);});
test('存档校验拒绝非法人数、作物、负值、未知版本',()=>{let s=E.initialState(1000);for(const change of [d=>d.version=999,d=>d.jobs.farmer=2,d=>d.resources.qi=-1,d=>d.plots[0].crop='bad',d=>d.techs=['bad'],d=>d.plots.pop(),d=>d.resources.wood=Infinity,d=>d.jobs.scholar=1]){let d=structuredClone(s);change(d);assert.throws(()=>E.restore(JSON.stringify(d),1000));}assert.equal(E.restore(E.serialize(s,1000),1000).state.realm,0);});
test('满仓出售不会吞掉作物，心力可自动恢复',()=>{let s=E.initialState();s.resources.coin=E.capacity(s);assert.ok(E.sell(s,'grain'));assert.equal(s.resources.grain,25);s.energy=0;assert.ok(E.gather(s,'forage'));E.tick(s,2);assert.equal(s.energy,1);assert.equal(E.gather(s,'forage'),null);});
test('正常操作能从初始山居走到金丹，无测试资源注入',()=>{let s=E.initialState();let reached=-1;for(let t=0;t<14400;t++){
 for(const q of E.QUESTS)if(!s.claimed.includes(q.id)&&E.questProgress(s,q)>=q.goal)E.claim(s,q.id);
 for(let i=0;i<s.plots.length;i++){let p=s.plots[i];if(p.crop&&p.progress>=1)E.harvest(s,i);if(!s.plots[i].crop)E.plant(s,i,s.realm>=2&&i%6===5?'lotus':s.realm>=1&&i%3===2?'herb':'rice');}
 if(s.resources.grain>100)E.sell(s,'grain');if(s.resources.herb>100)E.sell(s,'herb');
 if(s.energy>=1)E.gather(s,t%3===0?'meditate':'forage');
 for(const key of ['grove','quarry','library','furnace'])if(!s.buildings[key])E.build(s,key);
 if(s.buildings.hut<4)E.build(s,'hut');if(s.buildings.field<3)E.build(s,'field');if(s.buildings.store<2)E.build(s,'store');
 if(s.population<10)E.recruit(s);
 for(const [job,n] of Object.entries({woodcutter:2,miner:1,scholar:2,meditator:3,alchemist:1,farmer:1}))while(s.jobs[job]<n&&E.freeWorkers(s)>0){if(E.assign(s,job,1))break;}
 for(const key of Object.keys(E.TECHS))E.research(s,key);if(s.resources.pill<40)E.brew(s);E.breakthrough(s);E.tick(s,1);
 if(s.realm===4){reached=t;break;}
 }assert.equal(s.realm,4,JSON.stringify({resources:s.resources,buildings:s.buildings,jobs:s.jobs,techs:s.techs,realm:s.realm}));assert.ok(reached>0);assert.equal(E.restore(E.serialize(s,1000),1000).state.realm,4);
});
