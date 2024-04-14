export const triggerFlyoutMenu = function triggerFlyoutMenu() {
  const hamburger = document.querySelector('#togglenav');
  const flyout = document.querySelector('#flyout-menu');
  const backdrop = document.querySelector('#menu-backdrop');

  hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
      if (!flyout.classList.contains('toggled')) {
        flyout.classList.add('toggled');
        backdrop.classList.add('show');
      }
    } else {
      flyout.classList.remove('toggled');
      backdrop.classList.remove('show');
    }
  });
};

export const triggerMobileDropdown = function triggerMobileDropdown() {
  const dropdowns = document.querySelectorAll('.hamburger-menu-item.dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      if (!dropdown.classList.contains('is-active')) {
        dropdowns.forEach((dropdown) => {
          if (dropdown.classList.contains('is-active')) {
            dropdown.classList.remove('is-active');
          }
        });
        dropdown.classList.add('is-active');
      } else {
        dropdown.classList.remove('is-active');
      }
    });
  });
};
