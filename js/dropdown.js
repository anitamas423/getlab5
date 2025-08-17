const projects = document.querySelector('.projects-menu');
let hideTimeout;

projects.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  projects.classList.add('open');
});

projects.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    projects.classList.remove('open');
  }, 200); // delay 200ms before hiding
});