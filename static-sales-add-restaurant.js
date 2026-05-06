(function () {
  let open = false;

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char]));
  }

  function clean(value) {
    return String(value || '').trim();
  }

  function ensureStyle() {
    if (document.querySelector('[data-sales-add-style]')) return;
    const style = document.createElement('style');
    style.dataset.salesAddStyle = '1';
    style.textContent = `
      .sales-add-btn,
      .sales-add-action {
        border: 1px solid rgba(255,138,66,0.55);
        background: rgba(0,0,0,0.28);
        color: #ffd1a8;
        font: 700 8px/1 var(--mono, monospace);
        letter-spacing: 0.14em;
        padding: 5px 7px;
        cursor: pointer;
        white-space: nowrap;
      }
      .sales-add-btn:hover,
      .sales-add-action:hover {
        background: rgba(255,138,66,0.16);
      }
      .sales-add-card {
        border: 1px solid rgba(255,138,66,0.48);
        background: rgba(0,10,22,0.72);
        padding: 8px;
        margin-bottom: 9px;
      }
      .sales-add-title {
        color: #ffd1a8;
        font-size: 10px;
        letter-spacing: 0.16em;
        margin-bottom: 8px;
      }
      .sales-add-grid {
        display: grid;
        gap: 7px;
      }
      .sales-add-row {
        display: grid;
        grid-template-columns: 88px minmax(0, 1fr);
        gap: 8px;
        align-items: center;
      }
      .sales-add-row span {
        color: var(--text-dim);
        font-size: 8px;
        letter-spacing: 0.12em;
      }
      .sales-add-row input {
        min-width: 0;
        border: 1px solid rgba(26,49,83,0.95);
        background: rgba(0,7,18,0.82);
        color: #cfe2ff;
        font: 700 10px/1.2 var(--mono, monospace);
        padding: 6px 7px;
      }
      .sales-add-row input:focus {
        outline: 1px solid rgba(255,138,66,0.78);
      }
      .sales-add-checks {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 6px;
        margin-top: 1px;
      }
      .sales-add-checks label {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #cfe2ff;
        font: 700 8px/1.2 var(--mono, monospace);
        letter-spacing: 0.1em;
      }
      .sales-add-checks input {
        accent-color: #ff8a42;
      }
      .sales-add-actions {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
        margin-top: 7px;
      }
      .sales-add-message {
        color: #73ff9a;
        font-size: 8px;
        letter-spacing: 0.12em;
        margin-top: 6px;
      }
    `;
    document.head.appendChild(style);
  }

  function input(label, name, required = false) {
    return [
      '<label class="sales-add-row">',
      `<span>${escapeHtml(label)}</span>`,
      `<input name="${escapeHtml(name)}" ${required ? 'required' : ''} autocomplete="off">`,
      '</label>',
    ].join('');
  }

  function renderForm(board) {
    let card = board.querySelector('[data-sales-add-card]');
    if (!open) {
      card?.remove();
      return;
    }
    if (card) return;
    if (!card) {
      card = document.createElement('form');
      card.className = 'sales-add-card';
      card.dataset.salesAddCard = '1';
      const anchor = board.querySelector('.opportunity-selected-card');
      anchor ? board.insertBefore(card, anchor) : board.appendChild(card);
    }
    card.innerHTML = [
      '<div class="sales-add-title">ADD RESTAURANT</div>',
      '<div class="sales-add-grid">',
      input('NAME', 'name', true),
      input('COUNTY', 'county'),
      input('CITY', 'city', true),
      input('ADDRESS', 'street'),
      input('CONTACT', 'contactInfo'),
      '</div>',
      '<div class="sales-add-checks">',
      '<label><input type="checkbox" name="greaseTrap"> GREASE TRAP</label>',
      '<label><input type="checkbox" name="exhaustHood"> EXHAUST HOOD</label>',
      '</div>',
      '<div class="sales-add-actions">',
      '<button class="sales-add-action" type="submit">SAVE</button>',
      '<button class="sales-add-action" type="button" data-sales-add-cancel>CANCEL</button>',
      '</div>',
    ].join('');
    card.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(card);
      const item = window.GlobalDataRestaurants?.addCustomer?.({
        name: clean(data.get('name')),
        county: clean(data.get('county')),
        city: clean(data.get('city')),
        street: clean(data.get('street')),
        contactInfo: clean(data.get('contactInfo')),
        greaseTrap: Boolean(data.get('greaseTrap')),
        exhaustHood: Boolean(data.get('exhaustHood')),
      });
      if (!item) return;
      open = false;
      card.innerHTML = '<div class="sales-add-message">SAVED TO LOCAL RESTAURANT LAYER</div>';
      setTimeout(() => card.remove(), 900);
    }, { once: true });
    card.querySelector('[data-sales-add-cancel]')?.addEventListener('click', () => {
      open = false;
      card.remove();
    });
  }

  function decorate() {
    ensureStyle();
    const board = document.querySelector('[data-opportunity-board]');
    if (!board || !document.querySelector('.feed.opportunity-feed-mode')) return;
    const head = board.querySelector('.opportunity-board-head');
    if (head && !head.querySelector('[data-sales-add-open]')) {
      const button = document.createElement('button');
      button.className = 'sales-add-btn';
      button.type = 'button';
      button.dataset.salesAddOpen = '1';
      button.textContent = 'ADD RESTAURANT';
      button.addEventListener('click', () => {
        open = !open;
        renderForm(board);
      });
      head.appendChild(button);
    }
    renderForm(board);
  }

  setInterval(decorate, 450);
})();
