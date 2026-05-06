(function () {
  const ENDPOINT = '/api/operator-state';
  const KEYS = {
    tankLevels: 'gd_ameripro_tank_levels',
    restaurantEdits: 'gd_restaurant_edits_v1',
    restaurantAdditions: 'gd_restaurant_additions_v1',
  };
  let online = false;
  let lastState = readLocalState();
  let saveTimer = null;

  function parse(value, fallback) {
    try {
      return JSON.parse(value || '') || fallback;
    } catch {
      return fallback;
    }
  }

  function readLocal(key, fallback) {
    try {
      return parse(localStorage.getItem(key), fallback);
    } catch {
      return fallback;
    }
  }

  function writeLocal(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Some locked-down tablet browsers can reject local writes.
    }
  }

  function readLocalState() {
    return {
      tankLevels: readLocal(KEYS.tankLevels, {}),
      restaurantEdits: readLocal(KEYS.restaurantEdits, {}),
      restaurantAdditions: readLocal(KEYS.restaurantAdditions, []),
      updatedAt: null,
    };
  }

  function persist(state) {
    if (state.tankLevels && typeof state.tankLevels === 'object') writeLocal(KEYS.tankLevels, state.tankLevels);
    if (state.restaurantEdits && typeof state.restaurantEdits === 'object') writeLocal(KEYS.restaurantEdits, state.restaurantEdits);
    if (Array.isArray(state.restaurantAdditions)) writeLocal(KEYS.restaurantAdditions, state.restaurantAdditions);
  }

  function updateStatus(text) {
    const node = document.querySelector('[data-app-status]');
    if (node) node.textContent = text;
  }

  function applyState(state, source) {
    const changedKeys = ['tankLevels', 'restaurantEdits', 'restaurantAdditions']
      .filter(key => Object.prototype.hasOwnProperty.call(state, key));
    lastState = {
      ...lastState,
      ...state,
      tankLevels: state.tankLevels || lastState.tankLevels || {},
      restaurantEdits: state.restaurantEdits || lastState.restaurantEdits || {},
      restaurantAdditions: Array.isArray(state.restaurantAdditions) ? state.restaurantAdditions : (lastState.restaurantAdditions || []),
    };
    persist(lastState);
    window.dispatchEvent(new CustomEvent('ameripro:shared-state', { detail: { ...lastState, source, changedKeys } }));
  }

  async function fetchState(url) {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`state ${response.status}`);
    return response.json();
  }

  async function load(options = {}) {
    try {
      const state = await fetchState(ENDPOINT);
      online = true;
      applyState(state, 'server');
      updateStatus('SYNCED');
      return true;
    } catch {
      online = false;
      if (!options.apiOnly) {
        try {
          applyState(await fetchState('data/operator-state.json'), 'published');
          updateStatus('PUBLISHED');
          return false;
        } catch {
          // Keep browser-local fallback data.
        }
      }
      updateStatus('LOCAL');
      return false;
    }
  }

  async function saveNow(partial) {
    applyState({ ...readLocalState(), ...partial }, 'local');
    if (!online) await load({ apiOnly: true });
    if (!online) return false;
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partial),
      });
      if (!response.ok) throw new Error(`state save ${response.status}`);
      applyState(await response.json(), 'server');
      updateStatus('SYNCED');
      return true;
    } catch {
      online = false;
      updateStatus('LOCAL');
      return false;
    }
  }

  function queueSave(partial) {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveNow(partial), 150);
  }

  window.AmeriproSharedState = {
    load,
    save: saveNow,
    readTankLevels: () => ({ ...(lastState.tankLevels || readLocal(KEYS.tankLevels, {})) }),
    readRestaurantEdits: () => ({ ...(lastState.restaurantEdits || readLocal(KEYS.restaurantEdits, {})) }),
    readRestaurantAdditions: () => [...(lastState.restaurantAdditions || readLocal(KEYS.restaurantAdditions, []))],
    syncTankLevels: levels => queueSave({ tankLevels: { ...(levels || {}) } }),
    syncRestaurantEdits: edits => queueSave({ restaurantEdits: { ...(edits || {}) } }),
    syncRestaurantAdditions: additions => queueSave({ restaurantAdditions: Array.isArray(additions) ? additions : [] }),
    isOnline: () => online,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
  setInterval(load, window.AmeriproPerformance?.interval?.(15000) || 15000);
})();
