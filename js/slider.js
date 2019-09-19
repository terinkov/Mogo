function sliderAdapter(stringButtonPrev, stringButtonNext, stringContentWrapper, stringKey){    
    if(stringKey){
        stringButtonPrev+=stringKey;
        stringButtonNext+=stringKey;
        stringContentWrapper+=stringKey;
    }
    let current = 0;
    let last = 0;
    let prelast = 0;
    let first = true;
    let sliders = document.querySelectorAll(stringContentWrapper);
    let col = sliders.length - 1;
    let prev = document.querySelector(stringButtonPrev);
    let next = document.querySelector(stringButtonNext);
    prev.addEventListener("click", prevClick);
    next.addEventListener("click", nextClick);
    console.log(prev);
    console.log(next);
    console.log(sliders);
    function prevClick(){
        currentDown();
        changeSlide();
    }
    function nextClick(){
        currentUp();
        changeSlide();
    }
    function changeSlide(){
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
}

sliderAdapter(".slider__button-prev", ".slider__button-next", ".slider__content-wrapper", ".citation-slider");
sliderAdapter(".slider__button-prev", ".slider__button-next", ".slider__content-wrapper", ".second-comments-slider");