document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

  const modalId = btn.getAttribute("data-target");
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // disable background scroll
    }
  });
});

// Close modal on close button click
document.querySelectorAll(".close-modal").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = btn.closest("div[id^='modal']");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // re-enable scroll
    }
  });
});

// Close modal when clicking outside modal content
document.querySelectorAll("div[id^='modal']").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // re-enable scroll
    }
  });
});

// Event listeners for closing modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Find the parent modal
            if (modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });
