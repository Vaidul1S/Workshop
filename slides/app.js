let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

if (slides.length > 0 ) {
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('activeD');
    slideIndex++
}

function showSlides(slideIndex) {
    slides.forEach((slide, i) =>{
        slide.classList.remove('active')
    })
    slides[slideIndex].classList.add('active');
    dots.forEach((dot, i) =>{
        dot.classList.remove('activeD')
    })
    dots[slideIndex].classList.add('activeD');
}
   
setInterval(function(){
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);    
    slideIndex++;
}, 2000);