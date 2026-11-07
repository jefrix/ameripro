'use strict';
const designConcepts = {
  pump: {
    name:'MFP-500', length:20, limit:9500,
    note:'Diesel-driven pumping candidate: 4 ft drive / fuel zone, 9 ft pumping zone and 7 ft hose zone. Pump selection can require a combined drive/pump skid spanning the first two zones. 6 in suction / discharge is a study basis only; verify vendor connections and losses.',
    zones:[
      {name:'Drive / fuel',start:0,length:4,tag:'DRV-1101',detail:'Separate fuel-fill and engine service access from hose handling. Allocate engine cooling airflow and exhaust routing using supplier requirements. A combined pump skid can span this zone and the pump zone.'},
      {name:'Pump / controls',start:4,length:9,tag:'P-1101 / CP-1101',detail:'Locate heavy equipment toward the engineered axle group. Reserve pump access, priming service, local emergency stop and instrument visibility. The longitudinal location is provisional pending weight and hitch analysis.'},
      {name:'Hose deployment',start:13,length:7,tag:'H-1101 / H-1102',detail:'Rear and curbside deployment for hose baskets, intake screen and restrained couplings. Wet hose / retained water and accessories must remain within the loaded budget. No water-storage tank is allocated.'}
    ],
    masses:[['Trailer / structure',3000],['Pump + engine package',2600],['Full fuel / tank package',500],['Hoses / screen / couplings',950],['Controls / instruments',300],['Tools / field kit',250],['Mounts / guards / integration',650]],
    flow:'<p><b>Water path:</b> screened intake → suction hose → pump → discharge indication / engineered valve arrangement → restrained hose → authorized receiving point.</p><p><b>Control path:</b> site level + pump / engine feedback → local controller → start permissives and protective shutdowns. Optional telemetry reports status; communications loss must not defeat local protection.</p>'
  },
  dry: {
    name:'DryForce', length:24, limit:12000,
    note:'Desiccant candidate for further study: 6 ft power bay, 11 ft drying bay and 7 ft field-kit bay. Reserve separate 20 in nominal process supply / return connections as layout placeholders. Unit airflow and duct static pressure remain supplier selections.',
    zones:[
      {name:'Power / service',start:0,length:6,tag:'PWR-1201',detail:'Dedicated power and service bay. Generator cooling, exhaust, fuel access, fire separation and shore-power architecture require supplier and electrical design. No engine exhaust enters the process-air stream.'},
      {name:'Drying module',start:6,length:11,tag:'DH-1201 / AF-1201',detail:'Desiccant candidate with process return, dry-air supply, regeneration inlet and wet-air discharge. Preserve filter / rotor / heater access. Electric regeneration heat is only the initial load-study option.'},
      {name:'Ducts / field kit',start:17,length:7,tag:'D-1201 / MM-1201',detail:'Store dry ducts, air movers and monitoring kit at the deployment end. Keep clean kit segregated from contaminated flood-pumping tools; allocate all carried cargo and moisture in the final weight schedule.'}
    ],
    masses:[['Trailer / enclosure',3600],['Drying module package',2400],['Generator / power package',1800],['Ducts / air movers',900],['Full fuel / tank package',600],['Electrical / controls',400],['Monitoring / field kit',300],['Mounts / integration',600]],
    flow:'<p><b>Process-air path:</b> building return → filtration / process fan / desiccant module → dry-air supply → building drying zone. Component order follows the selected supplier package.</p><p><b>Regeneration path:</b> outdoor air → regeneration fan / heater / rotor sector → wet-air exhaust outdoors. Keep this path separate from process air and engine exhaust. Final pressure relationships and termination locations require design.</p>'
  }
};

function totalMass(values, limit) { const total=values.reduce((sum,value)=>sum+value,0); return {total,reserve:limit-total}; }
function powerBudget({heater,fans,movers,aux,margin}) { const connected=heater+fans+movers+aux; return {connected,envelope:connected*(1+margin/100)}; }
if(typeof module!=='undefined' && module.exports) module.exports={designConcepts,totalMass,powerBudget};

if(typeof document!=='undefined') {
  let selected='pump';
  const states=Object.fromEntries(Object.entries(designConcepts).map(([key,c])=>[key,{values:c.masses.map(row=>row[1]),limit:c.limit}]));
  const el=id=>document.getElementById(id);
  const number=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(value);
  function selectZone(index) {
    el('component').value=String(index);
    el('zone-detail').textContent=designConcepts[selected].zones[index].detail;
    document.querySelectorAll('[data-zone]').forEach(node=>node.classList.toggle('zone-active',Number(node.dataset.zone)===index));
  }
  function draw() {
    const c=designConcepts[selected], scale=780/c.length;
    const blocks=c.zones.map((z,i)=>`<g data-zone="${i}" class="drawing-zone"><title>${z.name}</title><rect x="${160+z.start*scale}" y="130" width="${z.length*scale-4}" height="155" rx="6"/><text x="${160+(z.start+z.length/2)*scale-2}" y="184" text-anchor="middle">${z.name}</text><text class="tag" x="${160+(z.start+z.length/2)*scale-2}" y="210" text-anchor="middle">${z.tag}</text><text class="tag" x="${160+(z.start+z.length/2)*scale-2}" y="238" text-anchor="middle">${z.length} ft zone</text></g>`).join('');
    el('trailer-drawing').innerHTML=`<title id="drawing-title">${c.name} candidate top view</title><desc id="drawing-description">${c.length} ft nominal equipment body, 8 ft 6 in external width. ${c.zones.map(z=>z.name+': '+z.length+' ft').join('; ')}. 30 inch nominal service strip. Axle and hitch positions are schematic.</desc><text x="160" y="35" class="drawing-heading">${c.name.toUpperCase()} / CANDIDATE ARRANGEMENT</text><path d="M155 160 L45 230 L155 300" class="chassis"/><text x="25" y="345" class="tag">TOW END</text><rect x="150" y="110" width="800" height="245" rx="12" class="chassis"/>${blocks}<rect x="160" y="290" width="780" height="55" rx="4" class="service-strip"/><text x="550" y="324" text-anchor="middle" class="tag">30 in NOMINAL SERVICE STRIP / CLEARANCE TO VERIFY</text><path d="M160 75 H940 M160 65 V85 M940 65 V85" class="dimension"/><text x="550" y="65" text-anchor="middle" class="tag">${c.length} ft NOMINAL BODY / OVERALL LENGTH TBD</text><path d="M975 110 V355 M965 110 H985 M965 355 H985" class="dimension"/><text x="160" y="395" class="tag">BODY WIDTH: 8 ft 6 in EXTERNAL / INTERNAL WIDTH &amp; WALL BUILDUP TBD</text><text x="160" y="425" class="tag">FUNCTIONAL ZONING ONLY / NOT A FABRICATION OR AXLE-LOCATION DRAWING</text>`;
    el('component').innerHTML=c.zones.map((z,i)=>`<option value="${i}">${z.tag} — ${z.name}</option>`).join('');
    el('arrangement-note').textContent=c.note;
    el('process-diagram').innerHTML=c.flow;
    el('budget-legend').textContent=c.name+' loaded mass budget';
    el('mass-inputs').innerHTML=c.masses.map((row,i)=>`<label for="mass-${i}">${row[0]} <span>lb; proposed allocation</span></label><input id="mass-${i}" type="number" min="0" max="100000" step="any" value="${states[selected].values[i]}" required>`).join('');
    el('mass-limit').value=states[selected].limit;
    el('choose-pump').setAttribute('aria-pressed',String(selected==='pump'));
    el('choose-dry').setAttribute('aria-pressed',String(selected==='dry'));
    selectZone(0); updateMass();
  }
  function updateMass() {
    const fields=[...el('mass-inputs').querySelectorAll('input'),el('mass-limit')];
    if(fields.some(input=>!input.checkValidity())) {el('mass-total').textContent='—';el('mass-reserve').textContent='—';el('mass-status').textContent='Enter valid values for every mass allocation.';return;}
    const values=fields.slice(0,-1).map(input=>input.valueAsNumber),limit=el('mass-limit').valueAsNumber;
    states[selected]={values,limit};
    const r=totalMass(values,limit);
    el('mass-total').textContent=number(r.total)+' lb';el('mass-reserve').textContent=number(r.reserve)+' lb';
    el('mass-status').textContent=r.reserve<0?'Over the proposed loaded mass ceiling. Reduce allocations or revise the platform study.':'Within the proposed mass ceiling. Component fit, load distribution and certified ratings remain to be verified.';
  }
  function updatePower() {
    const keys=['heater','fans','movers','aux','power-margin'];
    if(keys.some(key=>!el(key).checkValidity())) {el('power-total').textContent='—';el('power-envelope').textContent='—';return;}
    const r=powerBudget({heater:el('heater').valueAsNumber,fans:el('fans').valueAsNumber,movers:el('movers').valueAsNumber,aux:el('aux').valueAsNumber,margin:el('power-margin').valueAsNumber});
    el('power-total').textContent=number(r.connected)+' kW';el('power-envelope').textContent=number(r.envelope)+' kW';
  }
  ['pump','dry'].forEach(key=>el('choose-'+key).addEventListener('click',()=>{selected=key;draw();}));
  el('component').addEventListener('change',()=>selectZone(Number(el('component').value)));
  el('trailer-drawing').addEventListener('click',event=>{const target=event.target.closest('[data-zone]');if(target)selectZone(Number(target.dataset.zone));});
  el('mass-inputs').addEventListener('input',updateMass);el('mass-limit').addEventListener('input',updateMass);
  el('reset-design').addEventListener('click',()=>{const c=designConcepts[selected];states[selected]={values:c.masses.map(row=>row[1]),limit:c.limit};draw();});
  ['heater','fans','movers','aux','power-margin'].forEach(key=>el(key).addEventListener('input',updatePower));
  draw();updatePower();
}
