let i = 0;
const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
    const nxt = i - 1 >= 0 ? i - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${i}"]`),
    nextSlide = document.querySelector(`[data-index="${nxt}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        i = nxt;
    });
}

const handleRightClick = () => {
    const nxt = i + 1 <= slides.length - 1 ? i + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${i}"]`),
    nextSlide = document.querySelector(`[data-index="${nxt}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        i = nxt;
    });
}