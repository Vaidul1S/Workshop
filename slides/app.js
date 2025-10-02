let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let sliderInterval;

if (slides.length > 0) {
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('activeD');
};

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    })
    slides[index].classList.add('active');
    dots.forEach((dot, i) => {
        dot.classList.remove('activeD')
    })
    dots[index].classList.add('activeD');
};

function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
};

function startSlider() {
    sliderInterval = setInterval(autoSlide, 2000);
};

function stopSlider() {
    clearInterval(sliderInterval);
};

dots.forEach((dot, i) => {
    dot.addEventListener('click', _ => {
        stopSlider();
        slideIndex = i;
        showSlides(slideIndex);
        startSlider();
    })
});

prev.addEventListener('click', _ => {
    stopSlider();
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
    startSlider();
});

next.addEventListener('click', _ => {
    stopSlider();
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
    startSlider();
});

showSlides(slideIndex);
startSlider();