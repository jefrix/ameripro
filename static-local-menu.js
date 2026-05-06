(function () {
  const localState = {
    counties: false,
    cities: false,
    ameripro: false,
    restaurants: false,
    opportunity: false,
  };
  let lastLocalMode = false;
  let savedHeader = null;

  function ensureStyles() {
    if (document.querySelector('[data-local-menu-style]')) return;
    const style = document.createElement('style');
    style.dataset.localMenuStyle = '1';
    style.textContent = `
      .local-menu-panel {
        display: block;
      }
      .local-menu-section {
        padding: 10px 14px;
        border-bottom: 1px solid rgba(26,49,83,0.4);
        font-family: var(--mono);
        font-size: 8.5px;
        letter-spacing: 0.15em;
        color: var(--text-dim);
      }
      .local-menu-note {
        line-height: 1.45;
      }
      .local-placeholder-layer {
        position: absolute;
        inset: 0;
        z-index: 5;
        display: none;
        pointer-events: none;
      }
      .local-placeholder-badge {
        position: absolute;
        right: 22px;
        top: 58px;
        border: 1px solid var(--edge);
        background: rgba(0,0,0,0.34);
        color: var(--text-dim);
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.16em;
        padding: 6px 8px;
      }
    `;
    document.head.appendChild(style);
  }

  function setToggle(row, active, color) {
    row.classList.toggle('active', active);
    const button = row.querySelector('[data-local-menu-toggle]');
    const knob = row.querySelector('[data-local-menu-knob]');
    if (button) {
      button.style.background = active ? color : 'transparent';
      button.style.borderColor = active ? color : 'var(--edge)';
      button.setAttribute('aria-pressed', String(active));
    }
    if (knob) {
      knob.style.left = active ? '17px' : '1px';
      knob.style.background = active ? '#000' : 'var(--text-dim)';
    }
  }

  function layerRow({ keyName, hotkey, label, sub, color, active, onToggle }) {
    const row = document.createElement('div');
    row.className = `layer-row ${active ? 'active' : ''}`;
    row.dataset.localMenuLayer = keyName;
    row.innerHTML = [
      '<div class="layer-head">',
      `<div class="layer-idx">${hotkey}</div>`,
      '<div style="flex:1;min-width:0">',
      `<div class="layer-label">${label}</div>`,
      `<div class="layer-sub">${sub}</div>`,
      '</div>',
      '<button data-local-menu-toggle aria-pressed="false" style="width:32px;height:16px;border-radius:2px;position:relative;cursor:pointer;background:transparent;border:1px solid var(--edge);padding:0;flex-shrink:0">',
      '<span data-local-menu-knob style="position:absolute;top:1px;left:1px;width:12px;height:12px;background:var(--text-dim);transition:left .15s"></span>',
      '</button>',
      '</div>',
    ].join('');
    row.querySelector('[data-local-menu-toggle]').addEventListener('click', onToggle);
    setToggle(row, active, color);
    return row;
  }

  function ensurePanel(layers) {
    let panel = layers.querySelector('[data-local-menu-panel]');
    if (panel) return panel;
    panel = document.createElement('div');
    panel.className = 'local-menu-panel';
    panel.dataset.localMenuPanel = '1';
    layers.appendChild(panel);
    return panel;
  }

  function setHighwaysVisible(active) {
    localState.highways = active;
    document.querySelectorAll('[data-local-highways]').forEach(group => {
      group.style.display = active ? '' : 'none';
    });
  }

  function setCountiesVisible(active) {
    localState.counties = active;
    document.querySelectorAll('[data-local-counties]').forEach(group => {
      group.style.display = active ? '' : 'none';
    });
    document.querySelectorAll('.local-county, .local-county-label, .local-fallback-point').forEach(node => {
      if (!node.closest('[data-local-counties]')) node.style.display = active ? '' : 'none';
    });
  }

  function setPlaceholderLayer(name, active) {
    localState[name] = active;
    const wrap = document.querySelector('.globe-wrap');
    if (!wrap) return;
    let layer = wrap.querySelector(`[data-local-placeholder="${name}"]`);
    if (!layer) {
      layer = document.createElement('div');
      layer.className = 'local-placeholder-layer';
      layer.dataset.localPlaceholder = name;
      layer.innerHTML = `<div class="local-placeholder-badge">${layerLabel(name)} / READY FOR DATA</div>`;
      wrap.appendChild(layer);
    }
    layer.style.display = active ? 'block' : 'none';
  }

  function disableTanks() {
    if (!localState.ameripro) return;
    setPlaceholderLayer('ameripro', false);
    window.GlobalDataAmeripro?.setActive?.(false);
  }

  function disableMapLayers() {
    setCountiesVisible(false);
    setPlaceholderLayer('cities', false);
    setPlaceholderLayer('restaurants', false);
    setPlaceholderLayer('opportunity', false);
    window.GlobalDataRestaurants?.setActive?.(false);
    window.GlobalDataOpportunity?.setActive?.(false);
    window.GlobalDataCountyDrilldown?.clearSelection?.();
  }

  function setTanksLayer(next) {
    if (next) disableMapLayers();
    setPlaceholderLayer('ameripro', next);
    window.GlobalDataAmeripro?.setActive?.(next);
    refreshRows();
  }

  function activateMapLayer(callback) {
    disableTanks();
    callback();
    refreshRows();
  }

  function layerLabel(name) {
    return String(name)
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, char => char.toUpperCase())
      .toUpperCase();
  }

  function renderPanel(panel) {
    panel.replaceChildren();
    panel.appendChild(layerRow({
      keyName: 'ameripro',
      hotkey: 'A',
      label: 'TANKS',
      sub: 'TRUCKS / FRAK TANK / LEVELS',
      color: '#73ff9a',
      active: localState.ameripro,
      onToggle: () => {
        setTanksLayer(!localState.ameripro);
      },
    }));
    panel.appendChild(layerRow({
      keyName: 'restaurants',
      hotkey: 'R',
      label: 'RESTAURANTS',
      sub: 'CLIENTS / GREASE / HOODS',
      color: '#5bd7ff',
      active: localState.restaurants,
      onToggle: () => {
        const next = !localState.restaurants;
        activateMapLayer(() => {
          setPlaceholderLayer('restaurants', next);
          window.GlobalDataRestaurants?.setActive?.(next);
        });
      },
    }));
    panel.appendChild(layerRow({
      keyName: 'opportunity',
      hotkey: 'P',
      label: 'SALES',
      sub: 'TARGET MARKETS / OPEN FIELD',
      color: '#ff8a42',
      active: localState.opportunity,
      onToggle: () => {
        const next = !localState.opportunity;
        activateMapLayer(() => {
          setPlaceholderLayer('opportunity', next);
          window.GlobalDataOpportunity?.setActive?.(next);
        });
      },
    }));
    panel.appendChild(layerRow({
      keyName: 'counties',
      hotkey: 'C',
      label: 'COUNTIES',
      sub: 'BOUNDARIES / COUNTY VIEW',
      color: '#73ff9a',
      active: localState.counties,
      onToggle: () => {
        activateMapLayer(() => setCountiesVisible(!localState.counties));
      },
    }));
    panel.appendChild(layerRow({
      keyName: 'cities',
      hotkey: 'I',
      label: 'CITIES',
      sub: 'READY FOR MUNICIPAL DATA',
      color: '#cfe2ff',
      active: localState.cities,
      onToggle: () => {
        activateMapLayer(() => setPlaceholderLayer('cities', !localState.cities));
      },
    }));
    const note = document.createElement('div');
    note.className = 'local-menu-section';
    note.innerHTML = '<div class="local-menu-note">SERVICE AREA: SAVANNAH / STATESBORO / DUBLIN / MACON / WARNER ROBINS</div>';
    panel.appendChild(note);
  }

  function enforcePrimaryLayerOrder(panel) {
    if (!panel) return;
    const ameripro = panel.querySelector('[data-local-menu-layer="ameripro"]');
    const restaurants = panel.querySelector('[data-local-menu-layer="restaurants"]');
    const firstLayer = panel.querySelector('[data-local-menu-layer]');
    if (ameripro && firstLayer !== ameripro) {
      panel.insertBefore(ameripro, firstLayer || panel.firstChild);
    }
    if (restaurants && ameripro?.nextElementSibling !== restaurants) {
      ameripro?.after(restaurants);
    }
  }

  function refreshRows() {
    document.querySelectorAll('[data-local-menu-layer="counties"]').forEach(row => setToggle(row, localState.counties, '#73ff9a'));
    document.querySelectorAll('[data-local-menu-layer="cities"]').forEach(row => setToggle(row, localState.cities, '#cfe2ff'));
    document.querySelectorAll('[data-local-menu-layer="ameripro"]').forEach(row => setToggle(row, localState.ameripro, '#73ff9a'));
    document.querySelectorAll('[data-local-menu-layer="restaurants"]').forEach(row => setToggle(row, localState.restaurants, '#5bd7ff'));
    document.querySelectorAll('[data-local-menu-layer="opportunity"]').forEach(row => setToggle(row, localState.opportunity, '#ff8a42'));
    setCountiesVisible(localState.counties);
  }

  function groupCountyLayer() {
    const svg = document.querySelector('[data-local-map-svg]');
    if (!svg || svg.querySelector('[data-local-counties]')) return;
    const nodes = [...svg.querySelectorAll('.local-county, .local-county-label, .local-fallback-point')];
    if (!nodes.length) return;
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.dataset.localCounties = '1';
    svg.insertBefore(group, svg.firstChild);
    nodes.forEach(node => group.appendChild(node));
  }

  function moveGlobalLocalToTop() {
    const layers = document.querySelector('.layers');
    const row = layers?.querySelector('[data-local-row]');
    if (!layers || !row || document.querySelector('.globe-wrap.local-map-mode')) return;
    const target = layers.children[1] || layers.firstChild;
    if (target && row !== target) layers.insertBefore(row, target);
  }

  function setGlobalMenuHidden(layers, hidden) {
    [...layers.children].forEach(child => {
      if (child.matches('[data-local-menu-panel]')) {
        child.style.display = hidden ? '' : 'none';
      } else {
        child.style.display = hidden ? 'none' : '';
      }
    });
    const footer = document.querySelector('.rail-ft');
    if (footer) footer.style.display = hidden ? 'none' : '';
  }

  function updateHeader(localMode) {
    const title = document.querySelector('.rail-hd span:first-child');
    const count = document.querySelector('.rail-hd-count');
    if (!title || !count) return;
    if (localMode && !lastLocalMode) {
      savedHeader = {
        title: title.textContent || 'DATA LAYERS',
        count: count.textContent || '',
      };
    }
    if (localMode) {
      title.textContent = 'LOCAL LAYERS';
      const activeCount = Object.values(localState).filter(Boolean).length;
      count.textContent = `${activeCount} ON`;
    } else if (lastLocalMode && savedHeader) {
      title.textContent = savedHeader.title;
      count.textContent = savedHeader.count;
    }
    lastLocalMode = localMode;
  }

  function syncLocalMenu() {
    ensureStyles();
    const layers = document.querySelector('.layers');
    if (!layers) return;
    const localMode = Boolean(document.querySelector('.globe-wrap.local-map-mode'));
    const panel = ensurePanel(layers);
    if (!panel.dataset.rendered) {
      renderPanel(panel);
      panel.dataset.rendered = '1';
    }
    enforcePrimaryLayerOrder(panel);
    setGlobalMenuHidden(layers, localMode);
    updateHeader(localMode);
    if (localMode) {
      groupCountyLayer();
      refreshRows();
    } else {
      moveGlobalLocalToTop();
    }
  }

  window.GlobalDataLocalMenu = {
    setLayer(name, active) {
      const next = Boolean(active);
      if (name === 'ameripro') {
        setTanksLayer(next);
        return;
      }
      if (next) disableTanks();
      if (name === 'counties') setCountiesVisible(next);
      if (['cities', 'ameripro', 'restaurants', 'opportunity'].includes(name)) {
        setPlaceholderLayer(name, next);
      }
      if (name === 'restaurants') window.GlobalDataRestaurants?.setActive?.(next);
      if (name === 'opportunity') window.GlobalDataOpportunity?.setActive?.(next);
      refreshRows();
    },
    getLayer(name) {
      return Boolean(localState[name]);
    },
  };

  window.addEventListener('keydown', event => {
    if (!document.querySelector('.globe-wrap.local-map-mode')) return;
    if (event.target?.tagName === 'INPUT' || event.target?.tagName === 'TEXTAREA') return;
    if (event.key === 'c' || event.key === 'C') {
      activateMapLayer(() => setCountiesVisible(!localState.counties));
    }
    if (event.key === 'p' || event.key === 'P') {
      const next = !localState.opportunity;
      activateMapLayer(() => {
        setPlaceholderLayer('opportunity', next);
        window.GlobalDataOpportunity?.setActive?.(next);
      });
    }
    if (event.key === 'a' || event.key === 'A') {
      setTanksLayer(!localState.ameripro);
    }
    if (event.key === 'r' || event.key === 'R') {
      const next = !localState.restaurants;
      activateMapLayer(() => {
        setPlaceholderLayer('restaurants', next);
        window.GlobalDataRestaurants?.setActive?.(next);
      });
    }
  });

  setInterval(syncLocalMenu, 400);
})();
