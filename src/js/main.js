const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
/*const header = document.getElementById('mainHeader');*/

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
/*  header.classList.toggle('hidden');*/
});

// Close overlay when clicking on the menu background
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add('hidden');
    /*header.classList.remove('hidden');*/
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Normalize path (remove trailing slash, lowercase)
  function normalize(path) {
    return path.replace(/\/+$/, '').toLowerCase();
  }
  const currentPath = normalize(window.location.pathname === "/" ? "/index.html" : window.location.pathname);

  document.querySelectorAll(".nav-link[href]").forEach(link => {
    const linkPath = normalize(new URL(link.href, window.location.origin).pathname || "/index.html");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  // For dropdown parents (Services, Projects)
  document.querySelectorAll(".group").forEach(group => {
    const parent = group.querySelector(".nav-link");
    const children = group.querySelectorAll("a[href]");
    children.forEach(child => {
      const childPath = normalize(new URL(child.href, window.location.origin).pathname);
      if (childPath === currentPath) {
        parent.classList.add("active");
      }
    });
  });
});

