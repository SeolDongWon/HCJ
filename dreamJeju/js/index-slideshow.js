var slides = document.querySelectorAll("#slides>li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;


// 슬라이드 애니메이션
var slider = document.querySelector("#slides");

const liWidth = slides[0].clientWidth;
const sliderWidth = liWidth * slides.length;

slider.style.width = `${liWidth * slides.length}px`;


prev.onclick = prevSlide;
next.onclick = nextSlide;

let currentIdx = 0;
let translate = 0;


function nextSlide() {
  if (current !== slides.length - 1) {
    translate -= liWidth;
    slider.style.transform = `translateX(${translate}px)`;
    current = (current+1)%slides.length;
  }else{
    translate += liWidth*(slides.length-1);
    slider.style.transform = `translateX(${translate}px)`;
    current = (current+1)%slides.length;
  }
}
function prevSlide() {
  if (current !== 0) {
    translate += liWidth;
    slider.style.transform = `translateX(${translate}px)`;
    current = (current-1)%slides.length;
  }else{
    translate -= liWidth*(slides.length-1);
    slider.style.transform = `translateX(${translate}px)`;
    current = (current-1)%slides.length;
  }
}

setInterval(nextSlide,2000);

