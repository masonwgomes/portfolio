const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let maxSlide = slides.length - 1;

function moveSlides() {
  slides[currentSlide].style.opacity = 0;

  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides[currentSlide].style.opacity = 1;
}

// nextBtn.addEventListener("click", moveSlides);

setInterval(() => {
  moveSlides();
}, 8000);

// prevBtn.addEventListener("click", prevSlides);

function prevSlides() {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}
