function dropdown(){
    let dropdowns = document.querySelectorAll(".do__dropdown");
    let contents = document.querySelectorAll(".do__dropdown-content");

    dropdowns.forEach(function(item, i){
        item.addEventListener("click", function(e) {
            
            let icons = [false, false, false];
            let current;
            let anyOpened = false;


            current = i;
            if(icons[i]==true)
                icons[i] = false;
            else
                icons[i] = true;
            console.log(i + " " + icons[i]);
            nullify(icons);
            live(icons, i);
            showContent(icons);
            anyOpened = check(icons);
        });
    });

    function showContent(array){
        array.forEach(function(item, i){
            contents[i].classList.remove("do__dropdown-content_active");
            dropdowns[i].style.marginBottom = "10px";
            dropdowns[i].style.borderBottom = "1px solid #e5e5e5";
        });
        array.forEach(function(item, i){
            if(item){
                contents[i].classList.add("do__dropdown-content_active");
                dropdowns[i].style.marginBottom = "0px";
                dropdowns[i].style.borderBottom = "none";
            }
        });
    }

    function live(icons, index){
        let opened = findOpened(icons);
        icons[index] = dropdowns[index].children[2].classList.toggle("do__dropdown-arrow_rotated_up");
        console.log(index + " " + icons);
    }

    function findOpened(array){
        array.forEach(function(item, i){
            if(item == true)
                return i;
        });
    }

    function check(a){
        let allFalse = true;
        a.forEach(function(item){if(item==true) allFalse=false});
        return !allFalse;
        //if any opened - true
    }

    function childWithClass(item, ofClass, or){
        item.children.forEach(function(child, i){
            if(child.contains(ofClass) || child.contains(or)) return child;
        });
        return null;
    }

    function nullify(array){
        array.forEach(function(item, i){
            if(!item)
                dropdowns[i].children[2].classList.remove("do__dropdown-arrow_rotated_up");
        });
    }

    function restore(item){
        
    }
}

dropdown();

function slider(){
    let last = 0;
    let current = 0;
    let sliders = Slider(3);//описывает все слайдеры
    function Slider(count, defIcon, defCitate, defAuthor){
        let slider = {
            icon:defIcon||"icons/comments.png",
            citate:defCitate||"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”",
            author:defAuthor||"Jon Doe"
        };
        let array = [];
        for(let i = 0; i < count; i++){
            slider.citate = i;
            array.push(slider);
            l(array);
        }
        return array;
    }
    let realSliders = [];
    realSliders = RealSliders();
    l(sliders);
    l(realSliders);
    l(current);
    l("------------");
    let prev = document.querySelector(".slider__button-prev");
    let next = document.querySelector(".slider__button-next");
    prev.addEventListener("click", prevClick);
    next.addEventListener("click", nextClick);
    function prevClick(){
        sliderDown();
        before(realSliders[current]);
        l(current+ " " + last);
        deleteSlider(last);
        // sliderElement.innerHTML = sliderInners;
        // document.querySelector(".slider__content-wrapper").after(sliderElement);
    }
    function deleteSlider(number){
        document.querySelectorAll(".slider__content-wrapper")[number].remove();
    }
    function sliderDown(){
        last = current;
        current--;
        if(current<0)
            current = sliders.length-1;
    }
    function sliderUp(){
        last = current;
        current++;
        if(current>=slider.length-1)
            current = 0;
    }
    function nextClick(){
        sliderUp();
    }
    function RealSliders(){
        let array = [];
        sliders.forEach(function(item, i){
            const sliderInners = `
                <div class="slider__content-wrapper">
                    <div class="slider__icon">
                        <img src=${item.icon} alt="" class="slider__icon-img">
                    </div>
                    <div class="slider__text-wrapper">
                        <div class="slider__text">${item.citate}</div>
                        <div class="slider__author"">${item.author}</div>
                    </div>
                </div>
                `;
            l(i + " " + item.citate);
            let sliderElement = document.createElement("div");
            sliderElement.classList.add("slider__content-wrapper");
            sliderElement.innerHTML = sliderInners;
            array.push(sliderElement);
        });
        return array;
    }
    function after(slider){
        document.querySelector(".slider__content-wrapper").after(slider);
    };
    function before(slider){
        document.querySelector(".slider__content-wrapper").before(slider);
    };
    function l(a){
        console.log(a);
    }
}

slider();
