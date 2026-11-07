'use strict';
const hybridDefaults={load:19.7,peak:30,auxiliary:0.8,battery:60,highSoc:90,lowSoc:20,inverter:40,dischargeEff:94,generator:45,dispatch:80,charger:20,chargeEff:92};
function calculateHybrid(v){
  if(!Object.keys(hybridDefaults).every(key=>Number.isFinite(v[key]))) return {error:'Enter a number in every field.'};
  if(v.load<0||v.peak<v.load||v.auxiliary<0||v.battery<=0||v.lowSoc<0||v.highSoc>100||v.highSoc<=v.lowSoc||v.inverter<=0||v.generator<=0||v.charger<0||v.dischargeEff<=0||v.dischargeEff>100||v.chargeEff<=0||v.chargeEff>100||v.dispatch<=0||v.dispatch>100) return {error:'Use an upper SOC greater than reserve SOC and a peak load at least as large as average load; capacities and efficiencies must be within their stated ranges.'};
  const dcWindow=v.battery*(v.highSoc-v.lowSoc)/100;
  const acEnergy=dcWindow*v.dischargeEff/100;
  const demand=v.load+v.auxiliary,peakDemand=v.peak+v.auxiliary;
  const inverterFits=peakDemand<=v.inverter,generatorFits=peakDemand<=v.generator;
  const chargeAc=Math.min(v.charger,Math.max(0,v.generator*v.dispatch/100-demand));
  const quietHours=inverterFits&&demand>0?acEnergy/demand:null;
  const rechargeHours=generatorFits&&chargeAc>0?dcWindow/(chargeAc*v.chargeEff/100):null;
  const canCycle=inverterFits&&generatorFits&&quietHours!==null&&rechargeHours!==null;
  const equivalentOnHours=canCycle?24*rechargeHours/(quietHours+rechargeHours):null;
  return {dcWindow,acEnergy,demand,peakDemand,inverterFits,generatorFits,chargeAc,quietHours,rechargeHours,canCycle,equivalentOnHours};
}
if(typeof module!=='undefined'&&module.exports)module.exports={calculateHybrid,hybridDefaults};
if(typeof document!=='undefined'){
  const el=id=>document.getElementById(id),form=el('hybrid-form'),keys=Object.keys(hybridDefaults);
  const outputs=['energy-out','quiet-out','charge-out','recharge-out','duty-out'];
  const read=()=>Object.fromEntries(keys.map(key=>[key,el(key).valueAsNumber]));
  const n=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(value);
  const hours=value=>value>0&&value<0.01?'< 0.01 h':n(value)+' h';
  function chart(v,r){
    const svg=el('cycle-chart');
    if(r.error||!r.canCycle){svg.innerHTML='<title id="cycle-title">Cycle unavailable</title><desc id="cycle-desc">Resolve the input or capacity warnings to see an idealized SOC cycle.</desc><text x="45" y="70" class="drawing-heading">NO REPEATED HYBRID CYCLE SHOWN</text><text x="45" y="110" class="tag">Resolve capacity, charging headroom or input conditions above.</text>';return;}
    const split=90+820*r.quietHours/(r.quietHours+r.rechargeHours);
    svg.innerHTML=`<title id="cycle-title">Idealized battery state-of-charge cycle</title><desc id="cycle-desc">State of charge falls from ${v.highSoc} to ${v.lowSoc} percent during ${n(r.quietHours)} engine-off hours, then returns to the upper SOC during ${n(r.rechargeHours)} generator-on hours. Linear constant-load estimate.</desc><text x="45" y="35" class="drawing-heading">ONE IDEALIZED SOC CYCLE / TIME-AXIS SEGMENTS TO SCALE</text><path d="M90 70V200H910" class="dimension"/><text x="25" y="90" class="tag">${v.highSoc}%</text><text x="25" y="190" class="tag">${v.lowSoc}%</text><path d="M90 80L${split} 185L910 80" class="water-route"/><path d="M${split} 70V200" class="dimension"/><text x="90" y="230" class="tag">Engine off: ${hours(r.quietHours)}</text><text x="${Math.max(390,Math.min(680,split))}" y="250" class="tag">Generator on / recharge: ${hours(r.rechargeHours)}</text>`;
  }
  function update(){
    const v=read();let r=calculateHybrid(v);
    if(!form.checkValidity())r={error:'Enter valid values within the indicated limits in every field.'};
    if(r.error){outputs.forEach(id=>el(id).textContent='—');el('hybrid-status').textContent=r.error;chart(v,r);return;}
    el('energy-out').textContent=n(r.acEnergy)+' kWh';
    el('quiet-out').textContent=!r.inverterFits?'Inverter limit exceeded':r.demand===0?'No modeled energy draw':hours(r.quietHours);
    el('charge-out').textContent=n(r.chargeAc)+' kW';
    el('recharge-out').textContent=!r.generatorFits?'Generator limit exceeded':r.rechargeHours===null?'No charging headroom':hours(r.rechargeHours);
    el('duty-out').textContent=r.equivalentOnHours===null?'No repeat cycle modeled':hours(r.equivalentOnHours)+' / 24 h equivalent';
    const notes=[];
    if(!r.inverterFits)notes.push('Peak running demand plus auxiliaries exceeds the inverter real-power limit.');
    if(!r.generatorFits)notes.push('Peak running demand plus auxiliaries exceeds the generator real-power limit. Sources are not added together.');
    if(r.chargeAc===0)notes.push('There is no charging capacity at the selected dispatch target and average demand.');
    if(r.demand===0)notes.push('Zero entered demand omits actual self-discharge and unentered standby loads.');
    notes.push('Constant-load energy estimate only. Actual transient performance and source transfer remain unverified.');
    el('hybrid-status').textContent=notes.join(' ');chart(v,r);
  }
  form.addEventListener('input',update);form.addEventListener('submit',event=>event.preventDefault());
  document.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{const values={dryforce:[19.7,30],field:[5,10],site:[10,20],mwtp50c:[7.45,9.55]}[button.dataset.preset];el('load').value=values[0];el('peak').value=values[1];el('hybrid-export-status').textContent='Illustrative site-load preset applied; station assumptions retained.';update();}));
  el('hybrid-reset').addEventListener('click',()=>{form.reset();el('hybrid-export-status').textContent='Default assumptions restored.';update();});
  el('hybrid-export').addEventListener('click',()=>{
    if(!form.reportValidity())return;const inputs=read(),results=calculateHybrid(inputs);if(results.error){update();return;}
    const scenario={project:'AmeriPro HybridForce-60',revision:'Concept A',createdAt:new Date().toISOString(),status:'Illustrative assumptions; no certified output, fuel savings or runtime',inputs,results,units:{load:'kW AC',peak:'kW AC running peak',auxiliary:'kW AC',battery:'kWh DC nominal',highSoc:'percent',lowSoc:'percent',inverter:'kW AC continuous',dischargeEff:'percent',generator:'kW real power',dispatch:'percent',charger:'kW AC input',chargeEff:'percent',dcWindow:'kWh DC',acEnergy:'kWh AC',demand:'kW AC average',peakDemand:'kW AC',chargeAc:'kW AC',quietHours:'h',rechargeHours:'h',equivalentOnHours:'generator h per long-run 24 h equivalent'},limits:'Constant average load. Sources are nonparallel; no transient, kVA, fuel, PV, aging or transfer-time calculation. Null durations indicate unavailable / inapplicable results.'};
    const url=URL.createObjectURL(new Blob([JSON.stringify(scenario,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='AmeriPro_HybridForce_60_Scenario.json';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);el('hybrid-export-status').textContent='Scenario downloaded with assumptions and units.';
  });update();
}
