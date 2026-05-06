(function () {
  const PASSWORD = 'Environmental';

  function unlock() {
    document.documentElement.classList.remove('auth-locked');
    document.body.classList.remove('auth-locked');
    document.querySelector('[data-password-gate]')?.remove();
  }

  function ready() {
    const form = document.querySelector('[data-password-form]');
    const input = document.querySelector('[data-password-input]');
    const error = document.querySelector('[data-password-error]');

    if (!form || !input) {
      document.documentElement.classList.remove('auth-locked');
      document.body.classList.remove('auth-locked');
      return;
    }

    input.focus();

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (input.value.trim() === PASSWORD) {
        unlock();
        return;
      }
      if (error) error.textContent = 'ACCESS DENIED';
      input.value = '';
      input.focus();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
