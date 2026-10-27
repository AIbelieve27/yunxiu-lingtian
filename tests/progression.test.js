import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as E from '../sect-engine.js';

test('不注入资源，初始唯一灵植岗位可逐步解锁材料、营造、人事与管理机构',()=>{
 const s=E.initialState(1000),order=['workshop','store','hut','library','personnelOffice','financeOffice','hall','registry','watchpost','furnace','field'];
 const take=role=>assert.equal(E.act(s,{type:'role',role}),null);
 for(let h=0;h<24*220;h++){
  E.refreshUnlocks(s);
  if(E.jobUnlocked(s,'woodcutter')&&s.people[1].job==='farmer')E.act(s,{type:'assign',id:s.people[1].id,job:'woodcutter'});
  if(E.jobUnlocked(s,'miner')&&s.people[2].job==='farmer')E.act(s,{type:'assign',id:s.people[2].id,job:'miner'});
  if(E.jobUnlocked(s,'treasurer')&&s.people[3].job!=='treasurer')E.act(s,{type:'assign',id:s.people[3].id,job:'treasurer'});
  if(E.jobUnlocked(s,'hr')&&E.members(s).length<6&&s.candidates.length){take('hr');const job=E.staff(s,'scholar').length?'builder':s.buildings.library?'scholar':'farmer';E.act(s,{type:'hire',id:s.candidates[0].id,job});}
  if(s.buildings.library){const n=s.people.find(n=>n.id>4&&n.job==='farmer');if(n)E.act(s,{type:'assign',id:n.id,job:'scholar'});}
  if(E.jobUnlocked(s,'builder')&&!s.projects.length){const key=order.find(k=>!s.buildings[k]);if(key&&E.canPay(s,E.costFor(s,key))){take('builder');assert.equal(E.act(s,{type:'build',key}),null);}}
  if(s.techs.includes('botany')&&s.plots[0].crop==='rice'&&s.resources.grain>80){take('farmer');E.act(s,{type:'crop',index:0,crop:'herb'});}
  if(s.buildings.library&&!s.research){const key=['irrigation','botany','records','alchemy'].find(k=>!s.techs.includes(k));if(key&&E.canPay(s,E.TECHS[key].cost)){take('scholar');E.act(s,{type:'research',key});}}
  if(!E.jobUnlocked(s,'woodcutter'))take('farmer');else if(!E.jobUnlocked(s,'miner'))take('woodcutter');else if(!E.jobUnlocked(s,'builder'))take('miner');else if(s.projects.length&&!E.staff(s,'builder').length)take('builder');else if(s.research&&!E.staff(s,'scholar').length)take('scholar');else if(E.jobUnlocked(s,'treasurer')&&!E.staff(s,'treasurer').length)take('treasurer');else take('woodcutter');
  E.tick(s,E.HOUR);
  if(order.every(k=>s.buildings[k])&&E.jobUnlocked(s,'auditor')&&E.jobUnlocked(s,'deputy')&&E.jobUnlocked(s,'alchemist'))break;
 }
 assert.ok(order.every(k=>s.buildings[k]),JSON.stringify({day:E.day(s),b:s.buildings,r:s.resources,jobs:s.unlockedJobs}));
 for(const k of ['deputy','hrChief','financeChief','auditor','alchemist','foreman'])assert.ok(E.jobUnlocked(s,k),k);
 assert.ok(E.members(s).every(n=>n.arrears===0));assert.equal(E.restore(E.serialize(s,1000),1000).state.hour,s.hour);
});

test('暂停随存档保留，暂停不会结算离线生产和工资',()=>{const s=E.initialState(1000);s.paused=true;const restored=E.restore(E.serialize(s,1000),3601000).state;assert.equal(restored.hour,0);assert.deepEqual(restored.resources,s.resources);restored.paused=false;E.tick(restored,4);assert.equal(restored.hour,2);});
