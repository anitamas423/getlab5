document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("closeModal");

  // Select all triggers (links or buttons)
  document.querySelectorAll(".openModal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent link navigation if <a>
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // disable background scroll
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // restore scroll
  });

  // Close if clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) { // fix: comparison not assignment
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // restore scroll
    }
  });
});
