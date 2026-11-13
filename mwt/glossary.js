(() => {
  const card = document.getElementById('glossary');
  if (!card) return;
  const input = card.querySelector('input');
  const rows = [...card.querySelectorAll('dl > div')];
  const groups = [...card.querySelectorAll('details')];
  const count = card.querySelector('[role="status"]');
  function filter() {
    const query = input.value.trim().toLowerCase();
    let matches = 0;
    rows.forEach(row => { row.hidden = !row.textContent.toLowerCase().includes(query); if (!row.hidden) matches++; });
    groups.forEach(group => {
      group.hidden = ![...group.querySelectorAll('dl > div')].some(row => !row.hidden);
      if (query) group.open = true;
    });
    count.textContent = `${matches} of ${rows.length} terms${matches ? '' : ' — try another acronym or description'}`;
  }
  input.addEventListener('input', filter);
  card.querySelector('[data-clear]').addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
  filter();
})();
