let lists=document.getElementsByClassName("list");  // array of all the items in the list
let rightBox= document.getElementById("right");     // selecting the right box
let leftBox= document.getElementById("left");       // selecting the left box

for(var list of lists){
    list.addEventListener("dragstart", function(e){     // to drag item from left container
        let selected=e.target;

        rightBox.addEventListener("dragover", function(e){      // to move item over the right container
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){          // to drop the dragged item in the riight container
            rightBox.appendChild(selected);                     // adds the item to the right container
            selected=null;                                      // after dropping selected value should be null so to select hte other element
            
        })
        
    })
}