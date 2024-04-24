import '@fortawesome/fontawesome-free/css/all.min.css';

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

const isDropdown = function isDropdown(htmlElement) {
  return htmlElement.classList.contains('dropdown');
};

export const triggerMobileDropdown = function triggerMobileDropdown() {
  const submenus = document.querySelectorAll('.hamburger-menu > li > .submenu');
  const hamburgerTrigger = document.querySelectorAll('.hamburger-trigger');

  hamburgerTrigger.forEach((trigger) => {
    if (isDropdown(trigger.parentNode)) {
      trigger.addEventListener('click', (event) => {
        submenus.forEach((menu) => {
          if (menu.parentNode === event.target.parentNode) {
            if (!menu.classList.contains('is-active')) {
              submenus.forEach((menu) => {
                menu.classList.remove('is-active');
              });
              menu.classList.add('is-active');
            } else {
              menu.classList.remove('is-active');
            }
          }
        });

        hamburgerTrigger.forEach((trigger) => {
          if (!trigger.classList.contains('is-not-active')) {
            trigger.classList.add('is-not-active');
          } else {
            trigger.classList.remove('is-not-active');
          }
        });
        event.preventDefault();
      });
    }
  });
};
