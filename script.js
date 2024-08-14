const modal = document.querySelector("#popup");
const openModal = document.querySelector(".contactButt");
const closeModal = document.querySelector(".closePopup");

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});

document.addEventListener("DOMContentLoaded", function() {
    var portfolioButt = document.querySelector('.articlesButt');
    var contactButt = document.querySelector('.contactButt');
    var portfolioWidth = getComputedStyle(portfolioButt).width;
    contactButt.style.width = portfolioWidth;
});