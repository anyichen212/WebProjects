var canvas;
var ctx; 

var fruit = [
    {name: "Apple", quantity:20, color:"red"},
    {name: "Orange", quantity:10, color: "orange"},
    {name: "Banana", quantity:15, color: "yellow"},
    {name: "Kiwi", quantity:5, color: "green"},
    {name: "Blueberry", quantity:5, color: "blue"},
    {name: "Grapes", quantity:10, color: "purple"}
];


function start(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d"); 

    draw();
    //mainLoop();
}

function draw(){

    ctx.font = "bold 18px Arial";
    //ctx.textAlign = "left";
    var height = 0;
    var heightSize = canvas.height/fruit.length;
    var widthSize;

    for(var i = 0 ; i < fruit.length ; i++){
        widthSize = (fruit[i].quantity/25) * canvas.width;

        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(0,height,widthSize, heightSize);
        ctx.fillStyle = "black";
        ctx.fillText(fruit[i].quantity, 15, height -10 +heightSize/2);
        ctx.fillText(fruit[i].name, 5, height +10 +heightSize/2);
        height += heightSize;
    }
}

document.addEventListener('DOMContentLoaded', start);

function mainLoop(){
    //draw();
    window.setTimeout(mainLoop, 1000 / 60);
}