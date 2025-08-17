/*const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
menu.classList.toggle('hidden');
});
*/

/*const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
*/
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

// Active page
const links = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname;

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

/*
const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split("/").pop(); // e.g. "about.html"

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add('text-blue-500', 'font-bold', 'border-b-2', 'border-blue-500');
    }
  });
*/