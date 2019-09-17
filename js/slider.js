let current = 0;
let sliders = document.querySelectorAll(".slider__content-wrapper");
let col = sliders.length - 1;
console.log(col);
sliders[0].style.display = "flex";
console.log(sliders);
let prev = document.querySelector(".slider__button-prev");
let next = document.querySelector(".slider__button-next");
console.log(prev);
console.log(next);
prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);
function prevClick(){
    currentDown();
    console.log(current);
}
function nextClick(){
    currentUp();
    console.log(current);
    sliders[current].classList.add("slider__content-wrapper_active");
}
function currentDown(){
    current--;
    if(current<0)
        current = col;
}
function currentUp(){
    current++;
    if(current>col)
        current = 0;
}