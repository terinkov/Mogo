let promo = document.querySelector(".promo");
let header = document.querySelector(".header");
let changed = false;
window.onscroll = function() {
	posLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(promo.clientHeight<posTop) {
        header.classList.add("header_promo");
        header.classList.remove("header_moved");
        header.classList.remove("header_none");
    } else if(0<posTop) {
        header.classList.add("header_moved");
        header.classList.remove("header_promo");
        header.classList.remove("header_none");
    } else {
        header.classList.add("header_none");
        header.classList.remove("header_promo");
        header.classList.remove("header_moved");
    }
}
