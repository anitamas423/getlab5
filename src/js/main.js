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
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop();

  document.querySelectorAll(".nav-link[href]").forEach(link => {
    const linkPage = new URL(link.href).pathname.split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".group").forEach(group => {
    const parent = group.querySelector(".nav-link");
    const children = group.querySelectorAll("a");

    children.forEach(child => {
      const childPage = new URL(child.href).pathname.split("/").pop();
      if (childPage === currentPage) {
        parent.classList.add("active");
      }
    });
  });
});

