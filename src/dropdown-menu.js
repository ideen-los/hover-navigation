export const triggerDropdown = function triggerDropdown() {
  const navs = document.querySelectorAll('.nav');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu-item');
  const menuBackdrop = document.querySelector('.dropdown-menu-backdrop');
  let menuIsActive = false;

  dropdownMenus.forEach((menu) => {
    menu.addEventListener('mouseenter', (event) => {
      const isExpanded = menu.getAttribute('aria-expanded') === 'true';
      const menuContent = menu.querySelector('.dropdown-content');
      const menuItems = menuContent.querySelectorAll('li');

      // Sets all menus aria-expanded attribute to false
      dropdownMenus.forEach((menu) => {
        menu.setAttribute('aria-expanded', false);
      });

      // Sets the active menu's aria-expanded attribute to true
      menu.setAttribute('aria-expanded', !isExpanded);

      if (!menuIsActive) {
        dropdownMenus.forEach((menu) => {
          menu.classList.remove('visible');
          menu.classList.remove('hidden');
          menu.classList.remove('is-active');
        });

        menu.classList.add('visible');
        menuBackdrop.classList.add('menu-is-active');
        menuIsActive = true;

        menuItems.forEach((item, index) => {
          item.style.animation = '';

          setTimeout(() => {
            setTimeout(() => {
              item.classList.add('fade-in');
              // Ensure animation only plays forwards to keep element visible after animation
              item.style.animationFillMode = 'forwards';
            }, index * 40);
          }, 320);
        });
      } else {
        dropdownMenus.forEach((menu) => {
          menu.classList.remove('visible');
          menu.classList.remove('hidden');
          menu.classList.remove('is-active');
        });

        menu.classList.toggle('is-active');
      }
    });
  });

  navs.forEach((nav) => {
    nav.addEventListener('mouseleave', (event) => {
      dropdownMenus.forEach((menu) => {
        if (nav.contains(menu)) {
          const menuContent = menu.querySelector('.dropdown-content');
          const menuItems = menuContent.querySelectorAll('li');
          const itemCount = menuItems.length; // Get the total number of items

          menu.classList.add('disable-interaction'); // Disable interactions
          menu.classList.remove('visible');
          menu.classList.add('hidden');
          menu.classList.remove('is-active');
          menu.setAttribute('aria-expanded', false);

          menuItems.forEach((item, index) => {
            item.style.animation = '';

            setTimeout(() => {
              // Set timeout to remove the classes after all animations are complete
              setTimeout(() => {
                item.classList.remove('fade-out');
                item.classList.remove('fade-in');
                item.style.animationFillMode = '';

                // Start of modifications
                if (index === itemCount - 1) {
                  // Check if it's the last item
                  setTimeout(() => {
                    menu.classList.remove('disable-interaction'); // Re-enable interactions
                  }, 100);
                }
              }, 100);
            }, 30);
          });
        }
      });

      menuBackdrop.classList.remove('menu-is-active');
      menuBackdrop.classList.add('menu-is-inactive');
      setTimeout(() => {
        menuBackdrop.classList.remove('menu-is-inactive');
      }, 350);

      menuIsActive = false;
    });
  });
};
