let indexRotate = 0;
let dropdowns = document.querySelectorAll(".do__dropdown");
dropdowns.forEach(function(item, i){
    item.addEventListener("click", function(e){
        console.log(i);
        console.log(dropdowns[i].children[2]);
        dropdowns.forEach(function(cur, number){
            if(number!=i){
                cur.children[2].classList.remove("do__dropdown-arrow_rotated_up"); 
            }
            cur.children[3].style.display = "none";   
        });
        dropdowns[i].children[2].classList.toggle("do__dropdown-arrow_rotated_up");
        if(dropdowns[i].children[2].classList.contains('do__dropdown-arrow_rotated_up')) dropdowns[i].children[3].style.display = "block";

    });
});

function childWithClass(item, ofClass, or){
    item.children.forEach(function(child, i){
        if(child.contains(ofClass) || child.contains(or)) return child;
    });
    return null;
}