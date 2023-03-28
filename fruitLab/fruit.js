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

    //controlling input
    var apple = document.getElementById("apple");
    apple.value = fruit[0].quantity;
    var orange = document.getElementById("orange");
    orange.value = fruit[1].quantity;
    var banana = document.getElementById("banana");
    banana.value = fruit[2].quantity;
    var kiwi = document.getElementById("kiwi");
    kiwi.value = fruit[3].quantity;
    var blueberry = document.getElementById("blueberry");
    blueberry.value = fruit[4].quantity;
    var grape = document.getElementById("grape");
    grape.value = fruit[5].quantity;

    draw();
    mainLoop();
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update(){
    //edit value with new input
    if(apple.value < 0)
        apple.value = 0;
    else if(apple.value > 50)
        apple.value = 50;
    else
        fruit[0].quantity = apple.value;

    if(orange.value < 0)
        orange.value = 0;
    else if(orange.value > 50)
        orange.value = 50;
    else
        fruit[1].quantity = orange.value;

    if(banana.value < 0)
        banana.value = 0;
    else if(banana.value > 50)
        banana.value = 50;
    else
        fruit[2].quantity = banana.value;

    if(kiwi.value < 0)
        kiwi.value = 0;
    else if(kiwi.value > 50)
        kiwi.value = 50;
    else
        fruit[3].quantity = kiwi.value;

    if(blueberry.value < 0)
        blueberry.value = 0;
    else if(blueberry.value > 50)
        blueberry.value = 50;
    else
        fruit[4].quantity = blueberry.value;

    if(grape.value < 0)
        grape.value = 0;
    else if(grape.value > 50)
        grape.value = 50;
    else
        fruit[5].quantity = grape.value;
}

function draw(){

    ctx.font = "bold 18px Courier";
    //ctx.textAlign = "left";
    var height = 0;
    var heightSize = canvas.height/fruit.length;
    var widthSize;

    for(var i = 0 ; i < fruit.length ; i++){
        widthSize = (fruit[i].quantity/50) * canvas.width;

        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(0,height,widthSize, heightSize);
        ctx.fillStyle = "black";
        ctx.fillText(fruit[i].quantity, 15, height -10 +heightSize/2);
        ctx.fillText(fruit[i].name, 2, height +10 +heightSize/2);
        height += heightSize;
    }
}

document.addEventListener('DOMContentLoaded', start);

function mainLoop(){
    clear();
    update();
    draw();
    window.setTimeout(mainLoop, 1000 / 60);
}