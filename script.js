const modal = document.querySelector("#popup");
const openModal = document.querySelector(".contactButt");
const closeModal = document.querySelector(".closePopup");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});