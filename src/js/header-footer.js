// fetching the header
fetch("/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    
    initModal();

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

// fetching the footer
fetch("/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer load error:", err));
