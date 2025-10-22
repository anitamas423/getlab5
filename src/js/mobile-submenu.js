// mobile-submenu.js
// Initialize after DOM is ready to avoid errors when elements aren't yet present.

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuToggle || !mobileMenu) {
    // Elements not present — nothing to do.
    return;
  }

  // Toggle the overlay
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close overlay when clicking on the overlay background
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });

  const triggers = mobileMenu.querySelectorAll('.relative.group > a, .relative.group > button');
  const isMobile = () => window.innerWidth < 768;

  // Ensure submenus are in the correct state for the current viewport
  function resetSubmenus() {
    mobileMenu.querySelectorAll('.relative.group > .absolute, .relative.group > div').forEach(sub => {
      if (isMobile()) {
        // mobile: remove absolute positioning, hide by default, add indentation helper
        sub.classList.remove('absolute');
        sub.classList.add('hidden', 'pl-4');
        sub.classList.remove('block');
      } else {
        // desktop: keep submenus absolute and hidden (desktop hover behavior)
        sub.classList.add('absolute');
        sub.classList.remove('pl-4', 'block');
        sub.classList.add('hidden');
      }
    });
  }

  // initial state and on resize
  resetSubmenus();
  window.addEventListener('resize', resetSubmenus);

  // toggle submenu on mobile
  triggers.forEach(trigger => {
    const submenu = trigger.nextElementSibling;
    if (!submenu) return;

    trigger.addEventListener('click', (e) => {
      if (!isMobile()) return; // keep desktop hover behavior
      e.preventDefault();      // prevent jump

      const isOpen = !submenu.classList.contains('hidden');

      // close other open submenus
      mobileMenu.querySelectorAll('.relative.group > div, .relative.group > .absolute').forEach(s => {
        if (s !== submenu) {
          s.classList.add('hidden');
          s.classList.remove('block');
        }
      });

      if (isOpen) {
        submenu.classList.add('hidden');
        submenu.classList.remove('block');
      } else {
        submenu.classList.remove('hidden');
        submenu.classList.add('block'); // make it flow and push content
      }
    });
  });

  // close submenus when clicking outside mobileMenu on mobile
  document.addEventListener('click', (e) => {
    if (!isMobile()) return;
    if (!mobileMenu.contains(e.target)) {
      mobileMenu.querySelectorAll('.relative.group > div, .relative.group > .absolute').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('block');
      });
    }
  });
});
