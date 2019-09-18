let current = 0;
let last = 0;
let prelast = 0;
let first = true;
let sliders = document.querySelectorAll(".slider__content-wrapper");
let col = sliders.length - 1;
console.log(col);
console.log(sliders);
let prev = document.querySelector(".slider__button-prev");
let next = document.querySelector(".slider__button-next");
console.log(prev);
console.log(next);
prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);
function prevClick(){
    currentDown();
    changeSlide();
}
function nextClick(){
    currentUp();
    changeSlide();
}
function changeSlide(){
    console.log(current);
    console.log(sliders[current].classList);
    sliders[current].classList.remove("slider__content-wrapper_last");
    sliders[last].classList.remove("slider__content-wrapper_active");
    sliders[last].classList.remove("slider__content-wrapper_active_move");
    sliders[current].classList.add("slider__content-wrapper_active");
    sliders[last].classList.add("slider__content-wrapper_last");
    sliders[current].classList.add("slider__content-wrapper_active_move");
}
function nullify(){
    sliders.forEach(function(item, i){
    });
}
function currentDown(){
    last = current;
    current--;
    if(current<0)
        current = col;
}
function currentUp(){
    last = current;
    current++;
    if(current>col)
        current = 0;
}