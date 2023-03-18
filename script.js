/*---galeria de fotos---*/
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const gridItems = document.querySelectorAll(".grid-item");




gridItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalContent.src = item.querySelector("img").src;
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

modalContent.addEventListener("error", () => {
  modalContent.src = "default-image.jpg";
});


