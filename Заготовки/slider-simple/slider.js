
//slider
let slideIndex = 1;
function showSlide(n) {
  let i;
  let slides = document.querySelectorAll('.item');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for(let slide of slides) {
    slide.style.display = 'none';
  }
  slides[slideIndex -1].style.display = "block";

}
showSlide(slideIndex);

function nextSlider() {
showSlide(slideIndex += 1);
}

function previousSlide() {
showSlide(slideIndex -= 1);
}

function currentSlide(n) {
showSlide(slideIndex = n);
}

const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');

prevBtn.addEventListener('click', function() {
previousSlide();
})

nextBtn.addEventListener('click', function() {
nextSlider();
})