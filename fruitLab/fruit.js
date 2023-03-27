var canvas;
var ctx; 

var fruit = [
    {name: "Apple", quantity:20, color:"red"},
    {name: "Orange", quantity:10, color: "orange"}
];


function start(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d"); 

    draw();
    //mainLoop();
}

function draw(){

    ctx.font = "30px Arial";
    var height = 0;
    var heightSize = canvas.height/fruit.length;

    for(var i = 0 ; i < fruit.length ; i++){
        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(0,height,(fruit[i].quantity/50) * canvas.width, heightSize);
        ctx.fillStyle = "black";
        ctx.fillText(fruit[i].name, 5, height+heightSize/2);
        height += heightSize;
    }
}

document.addEventListener('DOMContentLoaded', start);

function mainLoop(){
    //draw();
    window.setTimeout(mainLoop, 1000 / 60);
}