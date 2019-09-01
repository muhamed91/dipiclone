const track = document.querySelector('.info__festival-carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.info__festival-carousel-button--right');
const prevBtn = document.querySelector('.info__festival-carousel-button--left');
const linesNav  = document.querySelector('.info__festival-carousel-nav');
const lines = Array.from(linesNav.children);

const slidePosition = function (slide, index) {
    slide.style.left = slideWidth * index + 'px';
}

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

console.log(slideWidth);

// When i click left move to left nextElement
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

slides.forEach(slidePosition);

// When i click right, move slide to the right

    const moveSlide = function(track, currentSlide, targetSlide) {
        track.style.transform= 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateLines = function(currentLine, targetLine) {
        currentLine.classList.remove('current-slide');
        targetLine.classList.add('current-slide');
    }


prevBtn.addEventListener('click', function(e) {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentLine =  linesNav.querySelector('.current-slide');
    const prevLine = currentLine.previousElementSibling;
    

    moveSlide(track, currentSlide, prevSlide);
    updateLines(currentLine, prevLine);
}) ;  



nextBtn.addEventListener('click' ,function(e){
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentLine =  linesNav.querySelector('.current-slide');
    const nextLine = currentLine.nextElementSibling;
    moveSlide(track, currentSlide, nextSlide);
    updateLines(currentLine, nextLine);
});
// when i clik the nav indicator move to that slide

linesNav.addEventListener('click', function(e) {
    const targetLine = e.target.closest('button');
    console.log(targetLine)

    if (!targetLine) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentLine = linesNav.querySelector('.current-slide');
    const targetIndex = lines.findIndex(line => line === targetLine);
    const targetSlide = slides[targetIndex];

    if(targetIndex === 0){
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }

    moveSlide(track, currentSlide, targetSlide);

    updateLines(currentLine, targetLine);
 


}) 


