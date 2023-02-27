var canvas;
var context;

function canvasColor(){
    canvas = document.getElementById("myCanvas");
    canvas.fillStyle = "blue";
}

document.addEventListener('DOMContentLoaded', canvasColor);