let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", click);
let menu = document.querySelector(".header__menu");
let items = document.querySelectorAll(".header__menu-item");
let lines = document.querySelectorAll(".hamburger__line");
function click(){
    menu.classList.toggle("header__menu_active");
    items.forEach((item, i) => {
        if(item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `menuItem 0.5s ease forwards ${i / 7 + 0.05}s`;
        }
    });
    lines[0].classList.toggle("hamburger__line_first");
    lines[1].classList.toggle("hamburger__line_second");
    lines[2].classList.toggle("hamburger__line_third");
};
items.forEach((item, i) =>{
    item.addEventListener("click", click);
})
window.addEventListener("click", (event) => {
    console.log(event.target);
});