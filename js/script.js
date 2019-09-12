let dropdowns = document.querySelectorAll(".do__dropdown");
dropdowns.forEach(function(item, i){
    item.addEventListener("click", function(e){
        console.log(i);
        console.log(dropdowns[i].children[2]);
        dropdowns[i].children[2].classList.toggle("do__dropdown-arrow_rotated");
        // dropdowns[i].childNodes[2].classList.toggle("do__dropdown-arrow");
    });
});

function childWithClass(item, ofClass, or){
    item.children.forEach(function(child, i){
        if(child.contains(ofClass) || child.contains(or)) return child;
    });
    return null;
}