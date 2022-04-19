const mustache = require("mustache");

const div = document.querySelector('div');
let move = false;
let move_can = false;
let coordX;
let coordY;

div.addEventListener('mousedown', clickOn)
div.addEventListener('mouseup', clickUp)
document.addEventListener('mousemove', mouseMove)

function clickOn(event) {
    coordX = event.layerX;
    coordY = event.layerY;
    move = true;
    div.style.border = '3px solid black'
    div.style.transition = 'border 0.5s ease-in-out'
}

function clickUp() {
    move = false
    div.style.border ='0px'
}

function mouseMove(event) {
    if (!move) {
        return
    }
    div.style.top = event.clientY - coordY + 'px'
    div.style.left = event.clientX - coordX+ 'px'
}