(() => {
  const promo = document.querySelector('[data-solvi-promo]');
  const close = promo.querySelector('[data-solvi-close]');
  const key = 'solvi-promo-dismissed';

  try {
    if (sessionStorage.getItem(key)) return;
  } catch {
    // The banner can still be closed if storage is disabled.
  }

  promo.hidden = false;
  close.addEventListener('click', () => {
    promo.hidden = true;
    const main = document.querySelector('main');
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
    try {
      sessionStorage.setItem(key, '1');
    } catch {
      // Closing still takes effect on the current page.
    }
  });
})();
