document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalOverlay");
  const openBtn = document.getElementById("openModal"); // button somewhere in your page
  const closeBtn = document.getElementById("closeModal");

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // disable background scroll
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // restore scroll
  });

  // Close if clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // restore scroll
    }
  });
});