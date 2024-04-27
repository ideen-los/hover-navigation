import '@fortawesome/fontawesome-free/css/all.min.css';

const hamburgerMenuContainer = document.querySelector('.ui-interactions-mobile-menu');

// Triggers the off-canvas menu
export const triggerFlyoutMenu = function triggerFlyoutMenu() {
  const hamburger = hamburgerMenuContainer.querySelector('#togglenav');
  const flyout = hamburgerMenuContainer.querySelector('#flyout-menu');
  const backdrop = hamburgerMenuContainer.querySelector('#menu-backdrop');

  hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
      if (!flyout.classList.contains('toggled')) {
        flyout.classList.add('toggled');
        backdrop.classList.add('show');
      }
    } else {
      flyout.classList.remove('toggled');
      backdrop.classList.remove('show');

      // Close any open submenus
      setTimeout(() => {
        removeActiveClasses();
      }, 300);

      // Un-hide any hidden subemnu trigger
      setTimeout(() => {
        removeActiveClasses();
      }, 300);
    }
  });
};

// Removes of active classes from all links (which effectively closes any open submenus)
const removeActiveClasses = function removeActiveClasses() {
  const submenus = hamburgerMenuContainer.querySelectorAll('.hamburger-menu > li > .submenu');
  const submenuTrigger = hamburgerMenuContainer.querySelectorAll('.submenu-trigger');

  // Close any open submenus
  submenus.forEach((menu) => {
    menu.classList.remove('is-active');
  });

  // Un-hide any hidden subemnu trigger
  submenuTrigger.forEach((trigger) => {
    trigger.classList.remove('is-not-active');
  });
};

// Checks if the given element has a submenu
const isDropdown = function isDropdown(htmlElement) {
  return htmlElement.classList.contains('dropdown');
};

// Triggers the submenu of the parent that has been clicked
export const triggerMobileDropdown = function triggerMobileDropdown() {
  const submenuTrigger = hamburgerMenuContainer.querySelectorAll('.submenu-trigger');
  const submenus = hamburgerMenuContainer.querySelectorAll('.hamburger-menu > li > .submenu');

  submenuTrigger.forEach((trigger) => {
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

        submenuTrigger.forEach((trigger) => {
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

// Add functionality to the back button
export const handleBackButton = function handleBackButton() {
  const backButtons = hamburgerMenuContainer.querySelectorAll('.back');

  backButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      removeActiveClasses();
      event.preventDefault();
    });
  });
};

// Prevent the default click behavior of all links
export const preventDefaultOnLinks = function preventDefaultOnLinks() {
  const links = hamburgerMenuContainer.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
};
