var canvas;
var context;

function canvasColor(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    var gradient = context.createLinearGradient(0,-100,0,300);
    gradient.addColorStop(0, "darkBlue");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "lightYellow");

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', canvasColor);

function draw() {

    for(var i = 0; i < canvas.width ; i+=50){
        for(var j = canvas.height/1.2 ; j < canvas.height ; j+=50){
            context.fillStyle = "sienna";
            context.fillRect(i, j, 50, 50);
            context.fillStyle = "peru";
            context.fillRect(i, j, 25, 25);
            context.fillRect(i+25, j+25, 25, 25);
        }

    }
}

document.addEventListener('DOMContentLoaded', draw);