'use strict';

// Shared pure arithmetic for the page and the Node verification below.
function calculateMission({area, depth, flow, availability, inflow, moisture, dryrate, modules}) {
  const gallons = area * depth / 12 * 7.48052;
  const netGpm = flow * availability / 100 - inflow;
  const dryingGpd = dryrate * modules;
  return {
    gallons, netGpm,
    pumpHours: gallons === 0 ? 0 : netGpm > 0 ? gallons / netGpm / 60 : null,
    dryDays: moisture === 0 ? 0 : dryingGpd > 0 ? moisture / dryingGpd : null
  };
}

function calculateFinance({capital, rate, variable, days, fixed}) {
  const margin = rate - variable;
  const revenue = rate * days;
  const surplus = margin * days - fixed;
  return {
    revenue, surplus,
    breakEvenDays: margin > 0 ? Math.ceil(fixed / margin) : null,
    paybackYears: surplus > 0 ? capital / surplus : null
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {calculateMission, calculateFinance};
}

if (typeof document !== 'undefined') {
  const missionForm = document.getElementById('mission-form');
  const financeForm = document.getElementById('finance-form');
  const missionKeys = ['area', 'depth', 'flow', 'availability', 'inflow', 'moisture', 'dryrate', 'modules'];
  const financeKeys = ['capital', 'rate', 'variable', 'days', 'fixed'];
  const missionOutputs = ['volume-out', 'net-out', 'pump-out', 'dry-out'];
  const financeOutputs = ['revenue-out', 'surplus-out', 'break-out', 'payback-out'];
  const read = keys => Object.fromEntries(keys.map(key => [key, document.getElementById(key).valueAsNumber]));
  const write = (id, value) => { document.getElementById(id).textContent = value; };
  const number = (value, digits = 1) => new Intl.NumberFormat('en-US', {maximumFractionDigits: digits}).format(value);
  const money = value => new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0}).format(value);
  // Avoid displaying a positive but very short duration as zero.
  const duration = (value, unit) => value > 0 && value < 0.1 ? `< 0.1 ${unit}` : `${number(value)} ${unit}`;
  function updateMission() {
    if (!missionForm.checkValidity()) {
      missionOutputs.forEach(id => write(id, '—'));
      write('mission-message', 'Enter valid values in every mission field.');
      return;
    }
    const result = calculateMission(read(missionKeys));
    write('volume-out', `${number(result.gallons, 0)} gal`);
    write('net-out', `${number(result.netGpm)} GPM`);
    write('pump-out', result.pumpHours === null ? 'Cannot draw down' : duration(result.pumpHours, 'hours'));
    write('dry-out', result.dryDays === null ? 'No drying capacity' : duration(result.dryDays, 'days'));
    const notes = [];
    if (result.netGpm <= 0) notes.push('Inflow meets or exceeds average pumping capacity; water cannot draw down while that condition persists.');
    if (result.dryDays === null) notes.push('A positive moisture burden requires a positive effective drying rate.');
    notes.push('Constant-rate estimate only. Equipment selection and measured site conditions determine actual performance.');
    write('mission-message', notes.join(' '));
  }
  function updateFinance() {
    if (!financeForm.checkValidity()) {
      financeOutputs.forEach(id => write(id, '—'));
      write('finance-message', 'Enter valid values in every financial field.');
      return;
    }
    const result = calculateFinance(read(financeKeys));
    write('revenue-out', money(result.revenue));
    write('surplus-out', money(result.surplus));
    write('break-out', result.breakEvenDays === null ? 'No positive daily margin' : `${number(result.breakEvenDays, 0)} days / year`);
    write('payback-out', result.paybackYears === null ? 'No positive surplus' : duration(result.paybackYears, 'years'));
    write('finance-message', result.breakEvenDays > 365 ? 'Operating break-even exceeds 365 billable days per year for one pair.' : 'Illustrative pre-financing, pre-tax operating model. Break-even covers annual fixed operating costs; it does not recover capital.');
  }
  [missionForm, financeForm].forEach(form => form.addEventListener('submit', event => event.preventDefault()));
  missionForm.addEventListener('input', updateMission);
  financeForm.addEventListener('input', updateFinance);
  document.getElementById('reset').addEventListener('click', () => {
    missionForm.reset(); financeForm.reset(); updateMission(); updateFinance(); write('export-status', 'Default assumptions restored.');
  });
  document.getElementById('print').addEventListener('click', () => window.print());
  document.getElementById('export').addEventListener('click', () => {
    if (!missionForm.reportValidity() || !financeForm.reportValidity()) return;
    const mission = read(missionKeys), finance = read(financeKeys);
    const scenario = {
      project:'AmeriPro Flood Response Team', revision:'Concept A', createdAt:new Date().toISOString(),
      status:'Illustrative assumptions; not certified performance or vendor pricing',
      units:{area:'ft2', depth:'in', flow:'US gal/min', availability:'percent', inflow:'US gal/min', moisture:'US gal water equivalent', dryrate:'US gal/day/module', modules:'count', capital:'USD', rate:'USD/day', variable:'USD/day', days:'billable pair days/year', fixed:'USD/year', gallons:'US gal', netGpm:'US gal/min', pumpHours:'hours', dryDays:'days', revenue:'USD/year', surplus:'USD/year', breakEvenDays:'days/year rounded up', paybackYears:'years'},
      mission, missionResults:calculateMission(mission), finance, financeResults:calculateFinance(finance),
      limits:'Constant-rate model; null duration means no finite completion at supplied capacity. No pump curve, psychrometrics, financing, taxes or replacement capital included.'
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(scenario, null, 2)], {type:'application/json'}));
    const link = document.createElement('a'); link.href = url; link.download = 'AmeriPro_Flood_Response_Scenario.json';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    write('export-status', 'Scenario downloaded with assumptions and units.');
  });
  updateMission(); updateFinance();
}
