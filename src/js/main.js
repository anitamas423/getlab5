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


