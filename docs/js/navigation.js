const initNavigation = () => {
  const toggle = document.querySelector('.site-nav-toggle');
  const navList = document.querySelector('.site-nav-list');

  if (!toggle || !navList) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navList.classList.remove('is-open');
  };

  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    navList.classList.add('is-open');
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 699) {
      closeMenu();
    }
  });
};

export { initNavigation };
