var slide = document.getElementById("slide");
var arrowUp = document.getElementById("arrow-up");
var arrowDown = document.getElementById("arrow-down");

let x = 0;

arrowUp.onclick = function() {
   if (x > -900) {
    x = x - 300; // because card height is 300px 
    slide.style.top = x + "px";
   }

}

arrowDown.onclick = function() {
   if (x < 0) {
    x = x + 300; // because card height is 300px 
    slide.style.top = x + "px";
   }

}