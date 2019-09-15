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
        contents[i].style.display = "none";
        dropdowns[i].style.marginBottom = "10px";
        dropdowns[i].style.borderBottom = "1px solid #e5e5e5";
    });
    array.forEach(function(item, i){
        if(item){
            contents[i].style.display = "block";
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