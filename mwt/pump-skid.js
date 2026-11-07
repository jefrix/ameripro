'use strict';
const pumpSkidDefaults={flowGpm:200,staticHeadFt:80,frictionHeadFt:40,sg:1,pumpEffPct:72,motorHp:15,driveEffPct:90,auxKw:0.4,supplyHeadFt:33.9,suctionLossFt:4,vaporHeadFt:1.2,npshRequiredFt:10};
function calculatePumpSkid(v,mode='duty-standby'){
  if(!Object.keys(pumpSkidDefaults).every(key=>Number.isFinite(v[key])))return {error:'Enter a finite number in every field.'};
  if(v.flowGpm<=0||v.staticHeadFt<0||v.frictionHeadFt<0||v.staticHeadFt+v.frictionHeadFt<=0||v.sg<=0||v.sg>2.5||v.pumpEffPct<=0||v.pumpEffPct>100||v.motorHp<=0||v.driveEffPct<=0||v.driveEffPct>100||v.auxKw<0||v.supplyHeadFt<=0||v.suctionLossFt<0||v.vaporHeadFt<0||v.npshRequiredFt<=0||!['duty-standby','lead-lag'].includes(mode))return {error:'Check the input limits: flow, total head, efficiencies, specific gravity, motor rating and NPSHr must be positive values within their stated ranges.'};
  const runningPumps=mode==='lead-lag'?2:1;
  const tdhFt=v.staticHeadFt+v.frictionHeadFt;
  const dischargePsi=tdhFt*v.sg*0.433527;
  const totalFlowGpm=v.flowGpm*runningPumps;
  const eightHourGal=totalFlowGpm*60*8;
  const waterHp=v.flowGpm*tdhFt*v.sg/3960;
  const brakeHp=waterHp/(v.pumpEffPct/100);
  const pumpInputKw=brakeHp*0.745699872/(v.driveEffPct/100);
  const totalKw=runningPumps*pumpInputKw+v.auxKw;
  const npshaFt=v.supplyHeadFt-v.suctionLossFt-v.vaporHeadFt;
  const npshMarginFt=npshaFt-v.npshRequiredFt;
  const motorLoadPct=brakeHp/v.motorHp*100;
  const motorFits=brakeHp<=v.motorHp;
  const npshFits=npshaFt>=v.npshRequiredFt+3;
  return {mode,runningPumps,tdhFt,dischargePsi,totalFlowGpm,eightHourGal,waterHp,brakeHp,pumpInputKw,totalKw,npshaFt,npshMarginFt,motorLoadPct,motorFits,npshFits};
}
if(typeof module!=='undefined'&&module.exports)module.exports={pumpSkidDefaults,calculatePumpSkid};
if(typeof document!=='undefined'){
  const el=id=>document.getElementById(id),form=el('skid-form'),keys=Object.keys(pumpSkidDefaults);
  const outputs=['flow-out','tdh-out','bhp-out','kw-out','npsh-out'];
  const n=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(value);
  const read=()=>Object.fromEntries(keys.map(key=>[key,el(key).valueAsNumber]));
  function chart(v,r){
    const svg=el('skid-chart');
    if(r.error){svg.innerHTML='<title id="chart-title">Hydraulic envelope unavailable</title><desc id="chart-desc">Resolve the input warnings above to inspect shaft power and NPSH margins.</desc><text x="45" y="70" class="drawing-heading">NO HYDRAULIC ENVELOPE SHOWN</text><text x="45" y="110" class="tag">Enter valid positive hydraulic and electrical assumptions above.</text>';return;}
    const hpMax=Math.max(v.motorHp,r.brakeHp,1)*1.15;
    const bhpW=Math.min(720,Math.max(8,720*r.brakeHp/hpMax));
    const motorX=180+Math.min(720,720*v.motorHp/hpMax);
    const npshMax=Math.max(r.npshaFt,v.npshRequiredFt+3,5)*1.15;
    const npshaW=Math.min(720,Math.max(8,720*Math.max(0,r.npshaFt)/npshMax));
    const npshrX=180+Math.min(720,720*v.npshRequiredFt/npshMax);
    svg.innerHTML=`<title id="chart-title">Shaft power and NPSH margin check</title><desc id="chart-desc">Compares ${n(r.brakeHp)} brake horsepower per pump against the ${n(v.motorHp)} HP motor rating, and ${n(r.npshaFt)} feet of NPSHa against ${n(v.npshRequiredFt)} feet of NPSHr.</desc>
    <text x="45" y="36" class="drawing-heading">SHAFT POWER &amp; SUCTION MARGIN STUDY / PER RUNNING PUMP</text>
    <text x="45" y="92" class="site-label">SHAFT LOAD</text><text x="45" y="114" class="tag">${n(r.brakeHp)} BHP vs ${n(v.motorHp)} HP motor</text>
    <rect x="180" y="72" width="720" height="34" rx="5" class="service-strip"/>
    <rect x="180" y="72" width="${bhpW}" height="34" rx="5" class="${r.motorFits?'site-water':'site-air'}"/>
    <path d="M${motorX} 64V116" class="air-route"/><text x="${Math.min(760,motorX-60)}" y="58" class="tag">Motor limit: ${n(v.motorHp)} HP</text>
    <text x="45" y="182" class="site-label">SUCTION NPSH</text><text x="45" y="204" class="tag">${n(r.npshaFt)} ft NPSHa vs ${n(v.npshRequiredFt)} ft NPSHr</text>
    <rect x="180" y="162" width="720" height="34" rx="5" class="service-strip"/>
    <rect x="180" y="162" width="${npshaW}" height="34" rx="5" class="${r.npshFits?'site-water':'site-air'}"/>
    <path d="M${npshrX} 154V206" class="air-route"/><text x="${Math.min(760,npshrX-55)}" y="148" class="tag">NPSHr: ${n(v.npshRequiredFt)} ft</text>
    <text x="45" y="246" class="tag">Active mode: ${r.runningPumps===2?'Lead + lag parallel (2 pumps running; enter per-pump flow at the parallel system point)':'Lead / standby (1 pump running, 1 pump on standby)'} · 8 h volume: ${n(r.eightHourGal)} gal</text>`;
  }
  function update(){
    const v=read(),mode=el('skid-mode').value;let r=calculatePumpSkid(v,mode);
    if(!form.checkValidity())r={error:'Enter valid values within the indicated limits in every field.'};
    if(r.error){outputs.forEach(id=>el(id).textContent='—');el('skid-status').textContent=r.error;chart(v,r);return;}
    el('flow-out').textContent=n(r.totalFlowGpm)+' GPM ('+n(r.eightHourGal)+' gal / 8 h)';
    el('tdh-out').textContent=n(r.tdhFt)+' ft ('+n(r.dischargePsi)+' psi equiv.)';
    el('bhp-out').textContent=n(r.brakeHp)+' BHP / '+n(v.motorHp)+' HP ('+n(r.motorLoadPct)+'%)';
    el('kw-out').textContent=n(r.totalKw)+' kW AC total';
    el('npsh-out').textContent=n(r.npshaFt)+' ft avail. ('+(r.npshMarginFt>=0?'+':'')+n(r.npshMarginFt)+' ft margin)';
    const notes=[];
    if(!r.motorFits)notes.push('Per-pump brake horsepower exceeds the entered motor rating; select a larger motor frame, trim impeller/speed or reduce duty point.');
    if(r.npshaFt<=v.npshRequiredFt)notes.push('Available NPSH is at or below required NPSHr — cavitation risk; increase suction head, lower losses or select a lower-NPSHr pump.');
    else if(!r.npshFits)notes.push('NPSH margin is positive but less than 3.0 ft; verify supplier cavitation margin across minimum-to-runout flow.');
    if(mode==='lead-lag')notes.push('Parallel mode multiplies per-pump flow by two at the entered friction head; in a shared header, two pumps will see higher friction losses unless re-evaluated on the combined system curve.');
    notes.push('Steady-state clean/screened-liquid hydraulic estimate only. Viscosity corrections, pump curves, runout BHP and starting kVA require supplier selection.');
    el('skid-status').textContent=notes.join(' ');
    chart(v,r);
  }
  form.addEventListener('input',update);form.addEventListener('change',update);form.addEventListener('submit',event=>event.preventDefault());
  document.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{
    const presets={
      booster:{flowGpm:200,staticHeadFt:80,frictionHeadFt:40,sg:1,pumpEffPct:72,motorHp:15,suctionLossFt:4,vaporHeadFt:1.2,npshRequiredFt:10},
      reclaim:{flowGpm:150,staticHeadFt:25,frictionHeadFt:35,sg:1.02,pumpEffPct:68,motorHp:10,suctionLossFt:5,vaporHeadFt:1.5,npshRequiredFt:8.5},
      process:{flowGpm:180,staticHeadFt:50,frictionHeadFt:45,sg:1.08,pumpEffPct:66,motorHp:15,suctionLossFt:5.5,vaporHeadFt:6,npshRequiredFt:11}
    }[button.dataset.preset];
    Object.entries(presets).forEach(([k,val])=>{el(k).value=val;});
    el('skid-export-status').textContent='Illustrative duty preset applied; verify actual pump curve and fluid properties.';
    update();
  }));
  el('skid-reset').addEventListener('click',()=>{form.reset();el('skid-export-status').textContent='Default assumptions restored.';update();});
  el('skid-export').addEventListener('click',()=>{
    if(!form.reportValidity())return;const inputs=read(),mode=el('skid-mode').value,results=calculatePumpSkid(inputs,mode);if(results.error){update();return;}
    const scenario={project:'AmeriPro PPS-200 Prefabricated Industrial Pump Skid',revision:'Concept A',createdAt:new Date().toISOString(),status:'Illustrative hydraulic & electrical assumptions; not a certified pump curve or fabrication release',mode,inputs,results,units:{flowGpm:'US gal/min per running pump',staticHeadFt:'ft of liquid',frictionHeadFt:'ft of liquid at operating point',sg:'specific gravity relative to water at 60 F',pumpEffPct:'percent hydraulic efficiency',motorHp:'HP nameplate per pump',driveEffPct:'percent combined motor/VFD efficiency',auxKw:'kW AC control panel and auxiliaries',supplyHeadFt:'ft absolute suction supply head',suctionLossFt:'ft suction manifold and line loss',vaporHeadFt:'ft fluid vapor pressure head',npshRequiredFt:'ft vendor NPSHr at duty point',tdhFt:'ft total dynamic head',dischargePsi:'psi equivalent differential',totalFlowGpm:'US gal/min total skid output',eightHourGal:'US gal per 8-hour shift',waterHp:'HP hydraulic per running pump',brakeHp:'BHP shaft power per running pump',pumpInputKw:'kW AC per running pump',totalKw:'kW AC total skid connected running load',npshaFt:'ft available NPSH',npshMarginFt:'ft NPSHa minus NPSHr'},limits:'Newtonian water-like fluid equation without viscosity derating or system-curve solver. Parallel mode requires entering the per-pump flow and friction head at the combined operating point.'};
    const url=URL.createObjectURL(new Blob([JSON.stringify(scenario,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='AmeriPro_PPS_200_Scenario.json';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);el('skid-export-status').textContent='Scenario downloaded with assumptions and units.';
  });
  update();
}
