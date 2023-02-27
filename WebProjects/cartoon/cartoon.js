var canvas;
var context;

function canvasColor(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d")
    canvas.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', canvasColor);