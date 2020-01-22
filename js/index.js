import { gsap } from "gsap";

let nav = document.getElementById("navegation");

//mouseover
nav.addEventListener("mouseover", function (event){
    event.target.style.color = "#17A2B8";

    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
    }, false);

// Wheel
    function zoom(event) {
        event.preventDefault();
      
        scale += event.deltaY * -0.01;
      
        scale = Math.min(Math.max(.125, scale), 4);
      
        el.style.transform = `scale(${scale})`;
      }
      
      let scale = 1;
      const el = document.getElementById("zoom");
      el.onwheel = zoom;


// double click
const image = document.getElementById("image");

image.addEventListener('dblclick', function (e) {
  image.classList.toggle('large');
});


// noContextMenu

noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});


//stop propagation and make font bigger
const footer = document.querySelector(".footer");
console.log(footer);

footer.addEventListener("dblclick", function(event) {
  event.stopPropagation();
  event.preventDefault();
  event.target.style.fontSize = "40px";
});

// dbclick allert
 window.addEventListener('dblclick', function(){
    alert('Dblclick');
});

// footer change color 
window.addEventListener('resize', function(event) {
    footer.style.background = 'green';
});

//mouseup on buttons
const button = document.querySelectorAll('.destination .btn');

button.forEach(item => {
    item.addEventListener('mouseup', function(event){
        item.style.background = 'blue';
    });
});

// GreenSock

CSSPlugin.defaultTransformPerspective = 400; 

gsap.to(".imageOne", {duration: 3, rotationX: 360});
gsap.to(".imageTwo", {duration: 3, rotationY: 360});
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);










