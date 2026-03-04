// fetching the header
fetch("/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    
    initModal();
    initMobileMenu();
    initMobileSubmenu();

    const currentPath = location.pathname.split("/").pop() || "index.html"; // home page fallback
  
    document.querySelectorAll(".nav-link").forEach(link => {
      const linkPath = (link.getAttribute("href") || "").split("/").pop() || "index.html";
      link.classList.remove(
        "text-[#14953D]", "text-[#14953D]!", // active
        "text-white", "hover:text-gray-300" // inactive
      );
      if (linkPath === currentPath) {
        link.classList.add("text-[#14953D]!");
      } else {
        link.classList.add("text-white", "hover:text-gray-300");
      }
    });
  })
  .catch(err => console.error("Error loading header:", err));

function initModal() {
  const modal = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("closeModal");
  const openBtns = document.querySelectorAll(".openModal");

  if (!modal || !closeBtn || !openBtns.length) return; // nothing to attach

  openBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
}
//
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuToggle || !mobileMenu) {
    console.warn("Mobile menu elements not found in header.");
    return;
  }

  // Toggle visibility on hamburger click
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("hidden");
  });

  // Close when clicking outside the menu panel
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
}

// Mobile submenu toggles
function initMobileSubmenu() {
  [
    { btnId: 'mobileServicesToggle', menuId: 'mobileServicesMenu' },
    { btnId: 'mobileProjectsToggle', menuId: 'mobileProjectsMenu' }
  ].forEach(({ btnId, menuId }) => {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (btn && menu) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('hidden');
      });
    }
  });
}

// fetching the footer  
fetch("/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  })
  .catch(err => console.error("Footer load error:", err));

