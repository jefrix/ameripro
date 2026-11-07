'use strict';
const greaseDefaults={feedMass:1000,lipidPct:15,solidsPct:5,capturePct:85,productWater:2,productSolids:0.5,cakeDry:25,salePrice:0.45,feedCost:100,avoidedDisposal:0,processCost:120,residualCost:0.08};
function calculateGrease(v,saleMode='hold'){
  if(!Object.keys(greaseDefaults).every(key=>Number.isFinite(v[key])))return {error:'Enter a finite number in every field.'};
  if(Object.values(v).some(value=>value<0)||v.lipidPct+v.solidsPct>100||v.capturePct>100||v.productWater+v.productSolids>=100||v.cakeDry<1||v.cakeDry>100||!['hold','assumed'].includes(saleMode))return {error:'Check mass fractions: feed lipids plus solids cannot exceed 100%; product water plus solids must be below 100%; cake dry solids must be 1–100%.'};
  const lipids=v.feedMass*v.lipidPct/100,solids=v.feedMass*v.solidsPct/100,water=v.feedMass-lipids-solids;
  const recoveredLipids=lipids*v.capturePct/100;
  const oilProduct=recoveredLipids/(1-(v.productWater+v.productSolids)/100);
  const oilWater=oilProduct*v.productWater/100,oilSolids=oilProduct*v.productSolids/100;
  const tolerance=1e-8*Math.max(1,v.feedMass);
  if(oilWater>water+tolerance||oilSolids>solids+tolerance)return {error:'Assumed product carryover requires more water or solids than the feed contains. Revise the fractions.'};
  const cakeSolids=Math.max(0,solids-oilSolids),wetCake=cakeSolids/(v.cakeDry/100),cakeWater=wetCake-cakeSolids;
  if(cakeWater>water-oilWater+tolerance)return {error:'The assumed wet cake requires more water than remains after product carryover. Increase cake dry-solids fraction or revise the feed / product assumptions.'};
  const aqueousWater=Math.max(0,water-oilWater-cakeWater),unrecoveredLipids=lipids-recoveredLipids,aqueous=aqueousWater+unrecoveredLipids;
  const totalOutput=oilProduct+wetCake+aqueous,closureError=totalOutput-v.feedMass;
  const potentialRevenue=oilProduct*v.salePrice,revenue=saleMode==='assumed'?potentialRevenue:0;
  const residualExpense=(aqueous+wetCake)*v.residualCost,totalExpense=v.feedCost+v.processCost+residualExpense,contribution=revenue+v.avoidedDisposal-totalExpense,breakEvenCredit=Math.max(0,totalExpense-revenue);
  return {lipids,solids,water,recoveredLipids,oilProduct,oilWater,oilSolids,cakeSolids,cakeWater,wetCake,aqueousWater,unrecoveredLipids,aqueous,totalOutput,closureError,potentialRevenue,revenue,residualExpense,totalExpense,contribution,breakEvenCredit,saleMode};
}
if(typeof module!=='undefined'&&module.exports)module.exports={greaseDefaults,calculateGrease};
if(typeof document!=='undefined'){
  const el=id=>document.getElementById(id),form=el('grease-form'),keys=Object.keys(greaseDefaults),outputs=['oil-out','waste-out','closure-out','revenue-out','contribution-out'];
  const n=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(value),money=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(value);
  const read=()=>Object.fromEntries(keys.map(key=>[key,el(key).valueAsNumber]));
  function update(){const v=read();let r=calculateGrease(v,el('saleMode').value);if(!form.checkValidity())r={error:'Enter valid values within the indicated limits.'};if(r.error){outputs.forEach(id=>el(id).textContent='—');el('grease-status').textContent=r.error;return;}
    el('oil-out').textContent=n(r.oilProduct)+' / '+n(r.recoveredLipids)+' kg';el('waste-out').textContent=n(r.aqueous)+' / '+n(r.wetCake)+' kg';el('closure-out').textContent=n(r.totalOutput)+' kg output / '+n(v.feedMass)+' kg feed';el('revenue-out').textContent=money(r.revenue);el('contribution-out').textContent=money(r.contribution);
    el('grease-status').textContent=(r.saleMode==='hold'?'Product remains on hold; no sales revenue is booked. ':'Buyer acceptance is assumed only for this scenario. ')+ 'Hypothetical product value before qualification: '+money(r.potentialRevenue)+'. Modeled batch costs: '+money(r.totalExpense)+'. Avoided disposal credit needed to break even: '+money(r.breakEvenCredit)+' per batch.';
  }
  form.addEventListener('input',update);form.addEventListener('change',update);form.addEventListener('submit',event=>event.preventDefault());el('grease-reset').addEventListener('click',()=>{form.reset();update();el('grease-export-status').textContent='Default assumptions restored.';});
  el('grease-export').addEventListener('click',()=>{if(!form.reportValidity())return;const inputs=read(),saleMode=el('saleMode').value,results=calculateGrease(inputs,saleMode);if(results.error){update();return;}const scenario={project:'AmeriPro SmartTrap + GREX-1000',revision:'Concept C — stationary facility; custom PJDL-302 and screen separator basis; reuse pending trials',createdAt:new Date().toISOString(),status:'Assumed partition model; not fuel certification or a performance / price prediction',inputs,saleMode,results,units:{feedMass:'kg wet batch',lipidPct:'feed mass percent',solidsPct:'feed mass percent',capturePct:'percent of feed lipids recovered',productWater:'product mass percent',productSolids:'product mass percent',cakeDry:'wet cake mass percent dry nonlipid solids',salePrice:'USD/kg oil-rich product',feedCost:'USD/batch',avoidedDisposal:'USD/batch credit',processCost:'USD/batch',residualCost:'USD/kg aqueous plus wet cake',massResults:'all mass result fields in kg',economicResults:'potentialRevenue, revenue, residualExpense, totalExpense, contribution and breakEvenCredit in USD/batch'},limits:'No evaporation, chemical addition, quality prediction or chemical conversion. All unrecovered lipids assigned to aqueous residual and cake liquid assumed water. Product qualification and residual receiving are separate decisions.'};const url=URL.createObjectURL(new Blob([JSON.stringify(scenario,null,2)],{type:'application/json'})),link=document.createElement('a');link.href=url;link.download='AmeriPro_GREX_1000_Scenario.json';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);el('grease-export-status').textContent='Scenario downloaded with assumptions and units.';});update();
}
