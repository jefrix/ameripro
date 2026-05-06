(function () {
  const KEY = 'ameripro_performance_mode_v1';
  const query = new URLSearchParams(location.search);
  const forced = query.get('perf');
  const android = /Android/i.test(navigator.userAgent || '');
  const lowMemory = Number(navigator.deviceMemory || 0) > 0 && Number(navigator.deviceMemory) <= 3;
  const narrow = Math.min(screen.width || innerWidth, screen.height || innerHeight) <= 900;

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }

  function initialMode() {
    if (forced === '1' || forced === 'true') return true;
    if (forced === '0' || forced === 'false') return false;
    const saved = stored();
    if (saved === '1') return true;
    if (saved === '0') return false;
    return android && (lowMemory || narrow);
  }

  function save(active) {
    try {
      localStorage.setItem(KEY, active ? '1' : '0');
    } catch {
      // Local storage may be unavailable in locked-down kiosk browsers.
    }
  }

  function apply(active) {
    window.AmeriproPerformanceMode = Boolean(active);
    document.documentElement.classList.toggle('performance-mode', window.AmeriproPerformanceMode);
    document.body?.classList.toggle('performance-mode', window.AmeriproPerformanceMode);
    document.querySelectorAll('[data-performance-toggle]').forEach(button => {
      button.classList.toggle('on', window.AmeriproPerformanceMode);
      button.setAttribute('aria-pressed', String(window.AmeriproPerformanceMode));
      button.textContent = window.AmeriproPerformanceMode ? 'PERF ON' : 'PERF';
    });
    window.dispatchEvent(new CustomEvent('ameripro:performance-mode', { detail: { active: window.AmeriproPerformanceMode } }));
  }

  window.AmeriproPerformance = {
    isActive: () => Boolean(window.AmeriproPerformanceMode),
    interval: ms => Math.max(ms, window.AmeriproPerformanceMode ? Math.round(ms * 2.8) : ms),
    set(active) {
      save(Boolean(active));
      apply(Boolean(active));
    },
    toggle() {
      this.set(!window.AmeriproPerformanceMode);
    },
  };

  apply(initialMode());

  document.addEventListener('DOMContentLoaded', () => {
    apply(window.AmeriproPerformanceMode);
    document.querySelector('[data-performance-toggle]')?.addEventListener('click', () => {
      window.AmeriproPerformance.toggle();
      setTimeout(() => location.reload(), 120);
    });
  });
})();
