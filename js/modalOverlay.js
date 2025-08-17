document.addEventListener("DOMContentLoaded", function () {
  const openLink = document.getElementById("openModal");
  const openModal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  const pageContent = document.getElementById("pageContent");

  openLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page jump
    openModal.style.display = "flex";
    pageContent.classList.add("blur");
    document.body.classList.add("no-scroll"); 
  });

  closeBtn.addEventListener("click", function () {
    openModal.style.display = "none";
    pageContent.classList.remove("blur");
    document.body.classList.remove("no-scroll"); 
  });

  // close modal when clicking outside the modal content
  window.addEventListener("click", function (e) {
    if (e.target === openModal) {
      openModal.style.display = "none";
      pageContent.classList.remove("blur");
      document.body.classList.remove("no-scroll");
    }
  });
});

