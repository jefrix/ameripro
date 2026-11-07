'use strict';

// Build static document pages so portal links also work from file:// and offline.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..', 'mwt');
const docs = [
  ['HybridForce_60_Concept_Design', 'HybridForce-60 — Concept Design', 'hybrid-power.html'],
  ['HybridForce_60_BOM_and_Cost_Basis', 'HybridForce-60 — Preliminary BOM & Costs', 'hybrid-power.html'],
  ['Reclaim_25_Concept_Design', 'Reclaim-25 — Concept Design', 'wastewater-recycling.html'],
  ['Reclaim_25_BOM_and_Cost_Basis', 'Reclaim-25 — Preliminary BOM & Costs', 'wastewater-recycling.html'],
  ['Flood_Response_Concept_Design', 'Flood Response — Concept Design', 'flood-response.html'],
  ['Flood_Response_BOM_and_Cost_Basis', 'Flood Response — Preliminary BOM & Costs', 'flood-response.html'],
  ['Flood_Response_Design_Development', 'Flood Response — Design Development', 'flood-design-studio.html'],
  ['Flood_Response_Deployment_and_Controls', 'Flood Response — Deployment & Controls', 'flood-deployment.html'],
  ['Grease_to_Energy_Concept_Design', 'SmartTrap + GREX-1000 — Concept Design', 'grease-to-energy.html'],
  ['Grease_to_Energy_BOM_and_Cost_Basis', 'SmartTrap + GREX-1000 — Preliminary BOM & Costs', 'grease-to-energy.html']
];
const generated = new Set(docs.map(([name]) => `${name}.md`));
const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
function inline(text) {
  return escape(text)
    .replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_, label, href) => {
      // Concept source documents link to their formatted equivalents.
      const [file, hash] = href.split('#');
      const target = generated.has(file) ? file.replace(/\.md$/, '.html') + (hash ? `#${hash}` : '') : href;
      if (/^(?:javascript|data|vbscript):/i.test(target)) return label;
      return `<a href="${target}">${label}</a>`;
    })
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function renderMarkdown(source) {
  const lines = source.replace(/\r/g, '').split('\n');
  const result = [];
  const cells = line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
  const isBlock = line => /^(?:#{1,6} |\| |\d+\. |[-*] |>)/.test(line);
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    const heading = /^(#{1,6}) (.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const id = heading[2].toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
      result.push(`<h${level} id="${id}">${inline(heading[2])}</h${level}>`); i++; continue;
    }
    if (line.startsWith('|') && i + 1 < lines.length && cells(lines[i + 1]).every(cell => /^:?-{3,}:?$/.test(cell))) {
      const headings = cells(line); i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(cells(lines[i++]));
      result.push(`<div class="table-scroll"><table><thead><tr>${headings.map(cell => `<th scope="col">${inline(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`); continue;
    }
    if (/^(?:\d+\. |[-*] )/.test(line)) {
      const ordered = /^\d+\./.test(line), rows = [];
      const pattern = ordered ? /^\d+\. / : /^[-*] /;
      while (i < lines.length && pattern.test(lines[i].trim())) rows.push(`<li>${inline(lines[i++].trim().replace(pattern, ''))}</li>`);
      const tag = ordered ? 'ol' : 'ul'; result.push(`<${tag}>${rows.join('')}</${tag}>`); continue;
    }
    if (line.startsWith('>')) { result.push(`<blockquote>${inline(line.replace(/^>\s*/, ''))}</blockquote>`); i++; continue; }
    const paragraph = [line]; i++;
    while (i < lines.length && lines[i].trim() && !isBlock(lines[i].trim())) paragraph.push(lines[i++].trim());
    result.push(`<p>${inline(paragraph.join(' '))}</p>`);
  }
  return result.join('\n');
}
for (const [name, title, overview] of docs) {
  const source = fs.readFileSync(path.join(root, `${name}.md`), 'utf8');
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)} | AmeriPro</title><link rel="icon" href="../favicon.ico"><link rel="stylesheet" href="flood-response.css"><link rel="stylesheet" href="concept-document.css"></head>
<body><header class="topbar"><a class="brand" href="../future-concepts.html"><img src="ameripro_logo.jpg" alt="AmeriPro Environmental Services"><span>MODULAR INFRASTRUCTURE / CONCEPT DOCUMENTS</span></a><nav aria-label="Document navigation"><a href="../future-concepts.html">Future Concepts</a><a href="index.html">Water treatment</a><a href="${overview}">System overview &amp; planner</a><a href="${name}.md">Markdown source</a></nav></header><main class="document-main"><article class="document-body">${renderMarkdown(source)}</article></main><footer><b>AMERIPRO / CONCEPT DEVELOPMENT</b><a href="../future-concepts.html">Future Concepts</a><a href="index.html">Water treatment</a><a href="${overview}">System overview</a></footer></body></html>
`;
  fs.writeFileSync(path.join(root, `${name}.html`), html, 'utf8');
  console.log(`Built ${name}.html`);
}
