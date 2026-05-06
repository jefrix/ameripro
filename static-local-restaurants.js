(function () {
  const DATA = window.AMERIPRO_RESTAURANTS || { metadata: {}, customers: [] };
  const CUSTOMERS = (DATA.customers || [])
    .filter(item => Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lon)))
    .sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));
  const BOUNDS = { minLon: -85.70, maxLon: -80.75, minLat: 30.30, maxLat: 35.08 };
  const SERVICE_COLORS = {
    default: '#5bd7ff',
    green: '#73ff9a',
    yellow: '#f5d142',
    red: '#ff4f5f',
  };
  const MONTHS = {
    january: 0, jan: 0,
    february: 1, feb: 1,
    march: 2, mar: 2,
    april: 3, apr: 3,
    may: 4,
    june: 5, jun: 5,
    july: 6, jul: 6,
    august: 7, aug: 7,
    september: 8, sep: 8, sept: 8,
    october: 9, oct: 9,
    november: 10, nov: 10,
    december: 11, dec: 11,
  };

  let active = false;
  let selectedId = CUSTOMERS[0]?.id || null;
  let lastViewBox = '';

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char]));
  }

  function ensureStyle() {
    if (document.querySelector('[data-local-restaurants-style]')) return;
    const style = document.createElement('style');
    style.dataset.localRestaurantsStyle = '1';
    style.textContent = `
      .local-restaurant-marker {
        pointer-events: all;
        cursor: pointer;
      }
      .local-restaurant-hit {
        fill: transparent;
        pointer-events: all;
      }
      .local-restaurant-dot {
        fill: var(--service-color, rgba(91,215,255,0.94));
        stroke: rgba(207,226,255,0.95);
        stroke-width: 0.75;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 4px var(--service-glow, rgba(91,215,255,0.75)));
      }
      .local-restaurant-marker.city-estimated .local-restaurant-dot {
        fill: var(--service-color, rgba(91,215,255,0.46));
        stroke: rgba(91,215,255,0.72);
        opacity: 0.62;
      }
      .local-restaurant-plus {
        stroke: rgba(0,8,18,0.92);
        stroke-width: 0.8;
        stroke-linecap: square;
        vector-effect: non-scaling-stroke;
      }
      .local-restaurant-label {
        display: none;
        fill: #cfe2ff;
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.12em;
        paint-order: stroke;
        stroke: rgba(0,0,0,0.8);
        stroke-width: 3px;
        pointer-events: none;
      }
      .local-restaurant-select {
        display: none;
        fill: none;
        stroke: #73ff9a;
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 7px rgba(115,255,154,0.85));
      }
      .local-restaurant-marker:hover .local-restaurant-select,
      .local-restaurant-marker.selected .local-restaurant-select,
      .local-restaurant-marker.selected .local-restaurant-label {
        display: block;
      }
      .local-restaurant-marker.selected .local-restaurant-dot {
        stroke: #f7ffe8;
        stroke-width: 1.25;
      }
      .restaurant-status-legend {
        display: grid;
        grid-template-columns: repeat(4, minmax(0,1fr));
        gap: 5px;
        font-family: var(--mono);
        font-size: 7px;
        letter-spacing: 0.08em;
        color: var(--text-dim);
      }
      .restaurant-status-legend span {
        display: flex;
        align-items: center;
        gap: 4px;
        min-width: 0;
      }
      .restaurant-status-legend i {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: var(--status-color, #5bd7ff);
        box-shadow: 0 0 6px var(--status-color, #5bd7ff);
        flex: 0 0 auto;
      }
      .feed.restaurant-feed-mode > .feed-head,
      .feed.restaurant-feed-mode > .feed-list {
        display: none;
      }
      .feed.restaurant-feed-mode > [data-ameripro-tank-board] {
        display: none;
      }
      .restaurant-feed-board {
        display: grid;
        grid-template-rows: auto auto auto minmax(0, 1fr);
        gap: 8px;
        height: 100%;
        min-height: 0;
        padding: 10px 12px;
        font-family: var(--mono);
        color: var(--text);
      }
      .restaurant-feed-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        color: #5bd7ff;
        font-size: 10px;
        letter-spacing: 0.18em;
      }
      .restaurant-feed-count {
        color: var(--text-dim);
        font-size: 8px;
      }
      .restaurant-selected-card {
        border: 1px solid rgba(115,255,154,0.45);
        background: rgba(0, 10, 22, 0.62);
        padding: 8px;
        box-shadow: inset 0 0 18px rgba(115,255,154,0.06);
      }
      .restaurant-selected-card.attention {
        border-color: rgba(115,255,154,0.95);
        box-shadow: 0 0 18px rgba(115,255,154,0.22), inset 0 0 20px rgba(115,255,154,0.10);
        animation: restaurant-selected-pulse 1.05s ease-out 2;
      }
      @keyframes restaurant-selected-pulse {
        0% { transform: translateX(0); }
        35% { transform: translateX(-2px); }
        70% { transform: translateX(0); }
      }
      .restaurant-selected-title {
        color: #73ff9a;
        font-size: 11px;
        letter-spacing: 0.08em;
        line-height: 1.25;
        margin-bottom: 7px;
      }
      .restaurant-info-row {
        display: grid;
        grid-template-columns: 74px minmax(0, 1fr);
        gap: 8px;
        align-items: start;
        font-size: 9px;
        line-height: 1.35;
        color: #cfe2ff;
      }
      .restaurant-info-row span:first-child {
        color: var(--text-dim);
        letter-spacing: 0.12em;
      }
      .restaurant-feed-list {
        min-height: 0;
        overflow-y: auto;
        border-top: 1px solid rgba(26,49,83,0.75);
      }
      .restaurant-feed-row {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(0,1fr) auto;
        gap: 8px;
        padding: 7px 0;
        border: 0;
        border-bottom: 1px solid rgba(26,49,83,0.55);
        background: transparent;
        color: var(--text);
        text-align: left;
        font-family: var(--mono);
        cursor: pointer;
      }
      .restaurant-feed-row:hover,
      .restaurant-feed-row.active {
        color: #73ff9a;
      }
      .restaurant-feed-row strong {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 9px;
        letter-spacing: 0.08em;
        font-weight: 600;
      }
      .restaurant-feed-row small {
        display: block;
        color: var(--text-dim);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 8px;
        letter-spacing: 0.08em;
        margin-top: 2px;
      }
      .restaurant-quality {
        color: rgba(207,226,255,0.72);
        font-size: 7px;
        letter-spacing: 0.12em;
        align-self: center;
      }
    `;
    document.head.appendChild(style);
  }

  function placeholderActive() {
    const marker = document.querySelector('[data-local-placeholder="restaurants"]');
    const localMode = Boolean(document.querySelector('.globe-wrap.local-map-mode'));
    return localMode && Boolean(marker) && marker.style.display !== 'none';
  }

  function projectFactory(svg) {
    const box = (svg.getAttribute('viewBox') || '0 0 900 620').split(/\s+/).map(Number);
    const width = box[2] || 900;
    const height = box[3] || 620;
    const pad = Math.max(16, Math.min(width, height) * 0.04);
    const spanLon = BOUNDS.maxLon - BOUNDS.minLon;
    const spanLat = BOUNDS.maxLat - BOUNDS.minLat;
    const scale = Math.min((width - pad * 2) / spanLon, (height - pad * 2) / spanLat);
    const mapW = spanLon * scale;
    const mapH = spanLat * scale;
    const ox = (width - mapW) / 2;
    const oy = (height - mapH) / 2;
    return ([lon, lat]) => [
      ox + (lon - BOUNDS.minLon) * scale,
      oy + (BOUNDS.maxLat - lat) * scale,
    ];
  }

  function locationText(item) {
    return [item.street, item.city, item.state, item.zip].filter(Boolean).join(', ');
  }

  function qualityLabel(item) {
    return item.locationQuality === 'city-estimated' ? 'CITY EST.' : 'STREET';
  }

  function selectedCustomer() {
    return CUSTOMERS.find(item => item.id === selectedId) || CUSTOMERS[0] || null;
  }

  function addMonths(date, delta) {
    return new Date(date.getFullYear(), date.getMonth() + delta, 1);
  }

  function parseSchedulePeriod(value) {
    const text = String(value || '').trim().toLowerCase();
    const match = text.match(/([a-z]+)\s+(\d{4})/i);
    if (!match) return null;
    const month = MONTHS[match[1]];
    const year = Number(match[2]);
    if (!Number.isFinite(year) || month === undefined) return null;
    return new Date(year, month, 1);
  }

  function intervalMonths(service) {
    const text = String(service?.frequency || '').toLowerCase();
    if (text.includes('monthly') && !text.includes('bi')) return 1;
    if (text.includes('bi-month') || text.includes('bimonth') || text.includes('every 2')) return 2;
    if (text.includes('semi') || text.includes('6')) return 6;
    if (text.includes('annual') || text.includes('year')) return 12;
    return 3;
  }

  function inferLastService(service) {
    const next = parseSchedulePeriod(service?.next || service?.period);
    if (!next) return null;
    return addMonths(next, -intervalMonths(service));
  }

  function serviceStatus(item) {
    const services = item?.ameriproSchedule?.services || [];
    if (!services.length) {
      return {
        key: 'default',
        label: 'DEFAULT',
        color: SERVICE_COLORS.default,
        note: 'No Ameripro service schedule match',
      };
    }
    const now = new Date();
    const dated = services
      .map(service => ({ service, last: inferLastService(service) }))
      .filter(entry => entry.last instanceof Date && !Number.isNaN(entry.last.valueOf()));
    if (!dated.length) {
      return {
        key: 'default',
        label: 'DEFAULT',
        color: SERVICE_COLORS.default,
        note: 'Schedule period unavailable',
      };
    }
    dated.sort((a, b) => a.last - b.last);
    const oldest = dated[0];
    const days = Math.max(0, Math.floor((now - oldest.last) / 86400000));
    if (days > 60) {
      return { key: 'red', label: 'SERVICE DUE', color: SERVICE_COLORS.red, days, last: oldest.last, service: oldest.service };
    }
    if (days > 30) {
      return { key: 'yellow', label: 'WATCH', color: SERVICE_COLORS.yellow, days, last: oldest.last, service: oldest.service };
    }
    return { key: 'green', label: 'CURRENT', color: SERVICE_COLORS.green, days, last: oldest.last, service: oldest.service };
  }

  function formatMonth(date) {
    if (!(date instanceof Date) || Number.isNaN(date.valueOf())) return '';
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  function nearestMarkerFromPointer(svg, event) {
    let nearest = null;
    let nearestDistance = Infinity;
    svg.querySelectorAll('[data-local-restaurants] .local-restaurant-marker').forEach(marker => {
      const matrix = marker.getScreenCTM?.();
      if (!matrix || typeof DOMPoint === 'undefined') return;
      const point = new DOMPoint(0, 0).matrixTransform(matrix);
      const distance = Math.hypot(point.x - event.clientX, point.y - event.clientY);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = marker;
      }
    });
    return nearestDistance <= 18 ? nearest : null;
  }

  function installMapClickFallback(svg) {
    if (svg.dataset.localRestaurantClickFallback) return;
    svg.dataset.localRestaurantClickFallback = '1';
    svg.addEventListener('click', event => {
      if (!placeholderActive()) return;
      const directMarker = event.target?.closest?.('.local-restaurant-marker');
      const marker = directMarker || nearestMarkerFromPointer(svg, event);
      if (!marker?.dataset?.customerId) return;
      event.preventDefault();
      event.stopPropagation();
      selectCustomer(marker.dataset.customerId, { focusPanel: true });
    }, true);
  }

  function drawRestaurants() {
    const svg = document.querySelector('.globe-wrap.local-map-mode [data-local-map-svg]');
    if (!svg) return;
    ensureStyle();
    installMapClickFallback(svg);
    const isActive = placeholderActive();
    const viewBox = svg.getAttribute('viewBox') || '';
    const existing = svg.querySelector('[data-local-restaurants]');
    if (existing && lastViewBox === viewBox) {
      existing.style.display = isActive ? '' : 'none';
      existing.querySelectorAll('.local-restaurant-marker').forEach(node => {
        node.classList.toggle('selected', node.dataset.customerId === selectedId);
      });
      svg.appendChild(existing);
      return;
    }
    svg.querySelectorAll('[data-local-restaurants]').forEach(node => node.remove());
    lastViewBox = viewBox;
    const project = projectFactory(svg);
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.dataset.localRestaurants = '1';
    group.style.display = isActive ? '' : 'none';
    CUSTOMERS.forEach(item => {
      const [x, y] = project([Number(item.lon), Number(item.lat)]);
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const status = serviceStatus(item);
      marker.setAttribute('class', `local-restaurant-marker ${item.locationQuality === 'city-estimated' ? 'city-estimated' : ''} ${item.id === selectedId ? 'selected' : ''}`);
      marker.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
      marker.style.setProperty('--service-color', status.color);
      marker.style.setProperty('--service-glow', status.color);
      marker.dataset.customerId = item.id;
      marker.dataset.serviceStatus = status.key;
      marker.setAttribute('tabindex', '0');
      marker.setAttribute('role', 'button');
      marker.setAttribute('aria-label', item.name || 'Restaurant customer');
      marker.innerHTML = [
        '<circle class="local-restaurant-hit" r="9"></circle>',
        '<rect class="local-restaurant-select" x="-7" y="-7" width="14" height="14"></rect>',
        '<circle class="local-restaurant-dot" r="3.4"></circle>',
        '<path class="local-restaurant-plus" d="M-1.8 0H1.8M0 -1.8V1.8"></path>',
      ].join('');
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('class', 'local-restaurant-label');
      label.setAttribute('x', '8');
      label.setAttribute('y', '-7');
      label.textContent = String(item.name || '').toUpperCase();
      marker.appendChild(label);
      marker.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        selectCustomer(item.id, { focusPanel: true });
      });
      marker.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          event.stopPropagation();
          selectCustomer(item.id, { focusPanel: true });
        }
      });
      group.appendChild(marker);
    });
    svg.appendChild(group);
  }

  function detailRows(item) {
    if (!item) return '<div class="restaurant-info-row"><span>STATUS</span><b>No customer selected</b></div>';
    const quality = item.locationQuality === 'city-estimated'
      ? 'City-estimated location'
      : 'Street-matched location';
    const schedule = item.ameriproSchedule || {};
    const summary = schedule.summary || {};
    const status = serviceStatus(item);
    const rows = [
      ['ADDRESS', locationText(item)],
      ['SERVICE', item.serviceFocus || 'Grease trap / exhaust hood service'],
      ['TYPE', item.type || 'Restaurant / food service customer'],
      ['STATUS', status.label],
    ];
    if (status.last) {
      rows.push(['LAST EST', `${formatMonth(status.last)} / ${status.days} days`]);
    } else {
      rows.push(['LAST EST', status.note]);
    }
    rows.push(['TRAP', item.greaseTrapSizeGal || item.greaseTrapLocation
      ? `${item.greaseTrapSizeGal ? `${item.greaseTrapSizeGal} gal` : 'Size unknown'} / ${item.greaseTrapLocation || 'Location unknown'}`
      : 'Not found in older list']);
    if (item.greaseTrapSizeGal || item.greaseTrapLocation) {
      rows.push(['TRAP SRC', item.greaseTrapMatchedName ? `${item.greaseTrapMatchedName} / older list` : 'Older restaurant list']);
    }
    const scheduleRows = [
      ['EXT SCHED', summary['Exterior Grease']],
      ['INT SCHED', summary['Interior Grease']],
      ['HOOD', summary.Hood],
    ];
    scheduleRows.forEach(([label, service]) => {
      if (!service) return;
      const parts = [
        service.next,
        service.frequency,
        service.size ? `${service.size}${/gal|hood|filter|fan/i.test(String(service.size)) ? '' : ' gal'}` : '',
      ].filter(Boolean);
      rows.push([label, parts.join(' / ')]);
    });
    if (schedule.serviceTypes?.length) {
      rows.push(['AMERIPRO', schedule.serviceTypes.join(' + ')]);
    }
    rows.push(['SOURCE', quality]);
    return rows.map(([label, value]) => `<div class="restaurant-info-row"><span>${label}</span><b>${escapeHtml(value)}</b></div>`).join('');
  }

  function renderBoard() {
    const feed = document.querySelector('.rail-right .feed');
    if (!feed || !placeholderActive()) return;
    if (window.GlobalDataLocalEventOwner && window.GlobalDataLocalEventOwner !== 'restaurants') return;
    ensureStyle();
    feed.classList.remove('ameripro-feed-mode', 'restaurant-feed-mode', 'county-drilldown-mode', 'opportunity-feed-mode');
    feed.querySelector('[data-county-drilldown-board]')?.remove();
    feed.querySelector('[data-opportunity-board]')?.remove();
    feed.querySelector('[data-ameripro-tank-board]')?.remove();
    feed.classList.add('restaurant-feed-mode');
    let board = feed.querySelector('[data-restaurant-feed-board]');
    if (!board) {
      board = document.createElement('div');
      board.className = 'restaurant-feed-board';
      board.dataset.restaurantFeedBoard = '1';
      feed.appendChild(board);
    }
    const selected = selectedCustomer();
    const meta = DATA.metadata || {};
    const renderKey = `${selected?.id || 'none'}:${CUSTOMERS.length}:${meta.streetMatches || 0}:${meta.ameriproScheduleMatchedRows || 0}`;
    if (board.dataset.renderKey === renderKey) return;
    board.dataset.renderKey = renderKey;
    board.innerHTML = [
      '<div class="restaurant-feed-head">',
      '<span>RESTAURANT CLIENTS</span>',
      `<span class="restaurant-feed-count">${CUSTOMERS.length} PLOTTED / ${meta.ameriproScheduleMatchedCustomers || 0} SCHEDULED</span>`,
      '</div>',
      '<div class="restaurant-selected-card">',
      `<div class="restaurant-selected-title">${escapeHtml(selected?.name || 'SELECT A RESTAURANT')}</div>`,
      detailRows(selected),
      '</div>',
      '<div class="restaurant-status-legend">',
      `<span><i style="--status-color:${SERVICE_COLORS.default}"></i>DEFAULT</span>`,
      `<span><i style="--status-color:${SERVICE_COLORS.green}"></i>0-30D</span>`,
      `<span><i style="--status-color:${SERVICE_COLORS.yellow}"></i>31-60D</span>`,
      `<span><i style="--status-color:${SERVICE_COLORS.red}"></i>60D+</span>`,
      '</div>',
      '<div class="restaurant-feed-list" data-restaurant-feed-list>',
      CUSTOMERS.map(item => [
        `<button class="restaurant-feed-row ${item.id === selectedId ? 'active' : ''}" data-restaurant-row="${escapeHtml(item.id)}" style="--status-color:${serviceStatus(item).color}">`,
        '<span>',
        `<strong>${escapeHtml(item.name)}</strong>`,
        `<small>${escapeHtml([item.city, item.state].filter(Boolean).join(', '))}${item.ameriproSchedule?.serviceTypes?.length ? ` / ${escapeHtml(item.ameriproSchedule.serviceTypes.join(' + '))}` : item.greaseTrapSizeGal ? ` / ${item.greaseTrapSizeGal} gal ${item.greaseTrapLocation || ''}` : ''}</small>`,
        '</span>',
        `<span class="restaurant-quality" style="color:var(--status-color)">${serviceStatus(item).label}</span>`,
        '</button>',
      ].join('')).join(''),
      '</div>',
    ].join('');
    board.querySelectorAll('[data-restaurant-row]').forEach(row => {
      row.addEventListener('click', () => selectCustomer(row.dataset.restaurantRow));
    });
    board.querySelector('.restaurant-feed-row.active')?.scrollIntoView({ block: 'nearest' });
  }

  function focusEventPanel() {
    const board = document.querySelector('[data-restaurant-feed-board]');
    const card = board?.querySelector('.restaurant-selected-card');
    const row = board?.querySelector('.restaurant-feed-row.active');
    if (!board || !card) return;
    card.classList.remove('attention');
    void card.offsetWidth;
    card.classList.add('attention');
    card.scrollIntoView({ block: 'start', inline: 'nearest' });
    row?.scrollIntoView({ block: 'center', inline: 'nearest' });
  }

  function resetBoard() {
    const feed = document.querySelector('.rail-right .feed.restaurant-feed-mode');
    if (!feed) return;
    feed.classList.remove('restaurant-feed-mode');
    feed.querySelector('[data-restaurant-feed-board]')?.remove();
  }

  function selectCustomer(id, options = {}) {
    if (id) selectedId = id;
    window.GlobalDataLocalEventOwner = 'restaurants';
    window.GlobalDataCountyDrilldown?.clearSelection?.();
    drawRestaurants();
    renderBoard();
    window.dispatchEvent(new CustomEvent('ameripro:restaurant-select', { detail: selectedCustomer() }));
    if (options.focusPanel) focusEventPanel();
  }

  function setActive(next) {
    active = Boolean(next);
    if (active) window.GlobalDataLocalEventOwner = 'restaurants';
    if (!active && window.GlobalDataLocalEventOwner === 'restaurants') window.GlobalDataLocalEventOwner = '';
    if (active && !selectedId) selectedId = CUSTOMERS[0]?.id || null;
    drawRestaurants();
    if (active) renderBoard();
    if (!active) resetBoard();
  }

  function sync() {
    const next = placeholderActive();
    const rowSub = document.querySelector('[data-local-menu-layer="restaurants"] .layer-sub');
    if (rowSub) rowSub.textContent = `${CUSTOMERS.length} CLIENT POINTS / ${DATA.metadata?.ameriproScheduleMatchedCustomers || 0} SCHEDULED`;
    if (next !== active) active = next;
    drawRestaurants();
    if (next && (!window.GlobalDataLocalEventOwner || window.GlobalDataLocalEventOwner === 'restaurants')) renderBoard();
    if (!next) resetBoard();
  }

  window.GlobalDataRestaurants = {
    setActive,
    getActive: () => placeholderActive(),
    selectCustomer,
    getCustomers: () => CUSTOMERS.slice(),
  };

  setInterval(sync, 450);
})();
