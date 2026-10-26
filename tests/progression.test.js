import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as E from '../sect-engine.js';
test('不注入资源，通过持续生产、贸易、用工与等待能建立完整的第一阶段组织',()=>{
 const s=E.initialState(1000),buildOrder=['store','workshop','library','hut','registry','hall','watchpost','furnace'];
 const switchTo=role=>E.act(s,{type:'role',role});
 for(let h=0;h<24*220;h++){
  if(!s.projects.length){const key=buildOrder.find(k=>!s.buildings[k]);if(key&&E.canPay(s,E.costFor(s,key))){switchTo('builder');assert.equal(E.act(s,{type:'build',key}),null);}}
  if(s.buildings.library&&s.buildings.workshop&&E.members(s).length<6&&s.candidates.length){switchTo('hr');E.act(s,{type:'hire',id:s.candidates[0].id,job:E.members(s).some(n=>n.job==='scholar')?'builder':'scholar'});}
  if(s.buildings.library&&!s.research){const key=['irrigation','botany','records','alchemy','formation'].find(k=>!s.techs.includes(k));if(key&&E.canPay(s,E.TECHS[key].cost)){switchTo('scholar');E.act(s,{type:'research',key});}}
  if(s.projects.length&&!E.staff(s,'builder').length)switchTo('builder');else if(s.research)switchTo('scholar');else switchTo('foreman');
  E.tick(s,E.HOUR);if(buildOrder.every(k=>s.buildings[k])&&s.techs.includes('records'))break;
 }
 assert.ok(buildOrder.every(k=>s.buildings[k]));assert.ok(s.techs.includes('records'));assert.ok(E.members(s).every(n=>n.arrears===0));assert.ok(E.day(s)>10);assert.ok(E.day(s)<220);assert.equal(E.restore(E.serialize(s,1000),1000).state.hour,s.hour);
});
test('暂停状态随存档保留，暂停期间不会产生离线工资、事件或产出',()=>{const s=E.initialState(1000);s.paused=true;const restored=E.restore(E.serialize(s,1000),1000+3600000).state;assert.equal(restored.hour,0);assert.deepEqual(restored.resources,s.resources);restored.paused=false;E.tick(restored,4);assert.equal(restored.hour,2);});
test('非生产岗位依据已上报测产估算，不随隐藏能力变化而获得真值',()=>{let s=E.initialState();E.act(s,{type:'role',role:'deputy'});const before=E.visibleGrainRates(s).current;s.people[0].skills.farmer=0;assert.equal(E.visibleGrainRates(s).current,before);E.act(s,{type:'role',role:'foreman'});assert.notEqual(E.visibleGrainRates(s).current,before);E.publish(s);E.act(s,{type:'role',role:'deputy'});assert.notEqual(E.visibleGrainRates(s).current,before);});
test('利益关系能引出关联事件，但新案件仍需独立证据才能处置',()=>{let s=E.initialState();const hr=s.people[1];hr.job='hr';const first=E.commitMisconduct(s,hr,true);assert.equal(first.kind,'bribe');E.act(s,{type:'role',role:'hr'});E.act(s,{type:'hire',id:first.other,job:'treasurer'});const newcomer=s.people.find(n=>n.id===first.other);const second=E.commitMisconduct(s,newcomer,true);assert.equal(second.kind,'diversion');E.act(s,{type:'role',role:'auditor'});E.startInquiry(s,'payments');E.tick(s,36*E.HOUR);const firstCase=s.cases.find(c=>c.incident===first.id);assert.ok(firstCase);E.act(s,{type:'role',role:'investigator'});E.startInquiry(s,'relations',firstCase.id);E.tick(s,48*E.HOUR);const view=E.caseView(s,firstCase);assert.ok(view.suspects.some(n=>n.id===newcomer.id));assert.ok(s.cases.some(c=>c.incident===second.id));});
