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
            document.querySelectorAll(".do__dropdown-content")[i].style.display = "none";
            dropdowns[i].style.marginBottom = "10px";
            dropdowns[i].style.borderBottom = "1px solid #e5e5e5";
            // cur.children[3].style.display = "none";   
        });
        dropdowns[i].children[2].classList.toggle("do__dropdown-arrow_rotated_up");
        if(dropdowns[i].children[2].classList.contains('do__dropdown-arrow_rotated_up')) {
            document.querySelectorAll(".do__dropdown-content")[i].style.display = "block";
            dropdowns[i].style.marginBottom = "0px";
            dropdowns[i].style.borderBottom = "none";
            
        }

    });
});

function childWithClass(item, ofClass, or){
    item.children.forEach(function(child, i){
        if(child.contains(ofClass) || child.contains(or)) return child;
    });
    return null;
}