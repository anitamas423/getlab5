const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
/*const header = document.getElementById('mainHeader');*/

menuToggle.addEventListener('click', () => {
  //const isOpen = !mobileMenu.classList.contains('hidden');
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
const currentPath = window.location.pathname;
const currentPage = currentPath.split("/").pop();

// handle direct nav links (About, Home, Contact Us)
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.nav-link').forEach(link => {
    let linkPath = link.getAttribute('href').replace(/\/+$/, '');
    let pagePath = window.location.pathname.replace(/\/+$/, '');
    if (linkPath === pagePath) {
      link.classList.add('active');
    }
  });
});
// handle parents with children (Services, Projects)
document.querySelectorAll(".group").forEach(group => {
  const parent = group.querySelector(".nav-link"); // Services, Projects button
  const children = group.querySelectorAll("a");

  children.forEach(child => {
    const childPage = new URL(child.href).pathname.split("/").pop();
    if (childPage === currentPage) {
      parent.classList.add("active");
    }
  });
});


