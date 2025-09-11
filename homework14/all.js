const photos = [];
for (let i = 1; i <= 10; i++) {
    photos.push("img/" + i + ".jpg");
}

let currentSlide = 0;

const slideImage = document.querySelector(".slider-img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

const dots = [];
for (let i = 0; i < photos.length; i++) {
    const dot = document.createElement("span");

    dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
}

function showSlide(index) {
    slideImage.src = photos[index];
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
}

prevButton.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = photos.length - 1;
    showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= photos.length) currentSlide = 0;
    showSlide(currentSlide);
});

showSlide(currentSlide);