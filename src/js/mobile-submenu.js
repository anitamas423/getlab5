document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  if (!mobileMenu) return;

  const triggers = mobileMenu.querySelectorAll('.relative.group > a, .relative.group > button');

  const isMobile = () => window.innerWidth < 768;

  // ensure submenus are in the correct state for current viewport
  function resetSubmenus() {
    mobileMenu.querySelectorAll('.relative.group > .absolute').forEach(sub => {
      if (isMobile()) {
        sub.classList.remove('absolute');      // remove absolute positioning on mobile
        sub.classList.add('hidden', 'pl-4');   // start hidden and indented
      } else {
        sub.classList.add('absolute');         // desktop behaviour
        sub.classList.remove('pl-4', 'block'); // remove mobile helpers
        sub.classList.add('hidden');
      }
    });
  }

  resetSubmenus();
  window.addEventListener('resize', resetSubmenus);

  // toggle submenu on mobile
  triggers.forEach(trigger => {
    const submenu = trigger.nextElementSibling;
    if (!submenu) return;

    trigger.addEventListener('click', (e) => {
      if (!isMobile()) return; // keep desktop hover behavior
      e.preventDefault();      // prevent # jump

      const isOpen = !submenu.classList.contains('hidden');

      // close other open submenus
      mobileMenu.querySelectorAll('.relative.group > div').forEach(s => {
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

  // close submenus when clicking outside mobileMenu
  document.addEventListener('click', (e) => {
    if (!isMobile()) return;
    if (!mobileMenu.contains(e.target)) {
      mobileMenu.querySelectorAll('.relative.group > div').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('block');
      });
    }
  });
});
