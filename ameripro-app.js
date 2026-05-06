(function () {
  function formatEasternTime() {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date()) + ' ET';
  }

  function setStatus(text) {
    const node = document.querySelector('[data-app-status]');
    if (node) node.textContent = String(text || 'READY').toUpperCase();
  }

  function startClock() {
    const node = document.querySelector('[data-local-time]');
    const tick = () => {
      if (node) node.textContent = formatEasternTime();
    };
    tick();
    setInterval(tick, window.AmeriproPerformance?.interval?.(1000) || 1000);
  }

  function bootLocalMap() {
    const target = document.querySelector('.globe');
    const engine = window.GlobeEngine?.create?.(target, {});
    window.__globalDataEngine = engine;
    setTimeout(() => {
      window.GlobalDataLocalLayer?.setActive?.(true);
      window.GlobalDataLocalLayer?.setZoom?.(1);
      setStatus('LOCAL MAP');
    }, 50);
  }

  function wireAppEvents() {
    document.querySelector('[data-reset-local]')?.addEventListener('click', () => {
      window.GlobalDataLocalLayer?.setZoom?.(1);
      window.GlobalDataCountyDrilldown?.clearSelection?.();
      setStatus('RESET');
    });

    window.addEventListener('ameripro:restaurant-select', event => {
      const name = event.detail?.name || 'Restaurant';
      setStatus(name);
      console.info('[Ameripro] restaurant selected:', event.detail);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    startClock();
    wireAppEvents();
    bootLocalMap();
  });
})();
