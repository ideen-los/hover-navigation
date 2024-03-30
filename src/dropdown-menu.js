export const triggerDropdown = function triggerDropdown() {
  const navs = document.querySelectorAll('.nav');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
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
        menuIsActive = true;

        menuItems.forEach((item, index) => {
          item.style.animation = '';

          setTimeout(() => {
            setTimeout(() => {
              item.classList.add('fade-in');
              // Ensure animation only plays forwards to keep element visible after animation
              item.style.animationFillMode = 'forwards';
            }, index * 50);
          }, 250);
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

          menu.classList.remove('visible');
          menu.classList.add('hidden');
          menu.classList.remove('is-active');
          menu.setAttribute('aria-expanded', false);

          menuItems.forEach((item, index) => {
            const reverseIndex = itemCount - 1 - index;

            item.style.animation = '';

            setTimeout(() => {
              setTimeout(() => {
                item.classList.add('fade-out');
                // Ensure animation only plays forwards to keep element visible after animation
                item.style.animationFillMode = 'forwards';
              }, reverseIndex * 20);

              // Calculate total animation time
              const totalAnimationTime = 10 + (itemCount - 1) * 50 + 500;

              // Set timeout to remove the classes after all animations are complete
              setTimeout(() => {
                item.classList.remove('fade-out');
                item.classList.remove('fade-in');
                item.style.animationFillMode = '';
              }, totalAnimationTime);
            }, 30);
          });
        }
      });

      menuIsActive = false;
    });
  });
};

/* function removeAllIsActiveClasses(activeMenu) {
  dropdownMenus.forEach((menu) => {
    if (menu !== activeMenu) menu.classList.remove('is-active');
  });
}
 */
