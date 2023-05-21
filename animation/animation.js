var canvas;
var context;

function start(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    grandma = new Image();
    grandma.src = 'assets/grandma.png';
    duck = new Image();
    duck.src = 'assets/bird.png';

   mainLoop();
}

document.addEventListener('DOMContentLoaded', start);

function mainLoop () {
    clear();
    update();
    draw();
    window.setTimeout(mainLoop, 80);
}

function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//grandma
var gX = 60;
var gY = 150;

//duck
var dX = 600;
var dY = 260;

function draw() {
    x2 = x+(width/2) - 10;
    y2 = y+height;
    context.drawImage(grandma, gX, gY);
    context.drawImage(duck, dX, dY, duck.width/3, duck.height/3);
}

var count = 0;
var up = false;

function update(){

    if(count < 14){
        if(dX > 330){
            dX-=20;
            jump();
        }
    }
    else if(count < 21){

    }
    else if (count < 31){
            jump();
            duckSpeech();
    }
    else if(count < 43){
        if(count === 32){
            gY += 15;
        }else if( count === 33){
            gY -= 15;
        }
        grandmaSpeech();
        duckSpeech2();
    }
    else if(count < 53){
        duckSpeech2();
    }
    else if(count < 81){
        if(dX < 590){
            dX+=20;
            jump();
        }
    } 
    else{
        count = -1;
    }

    count++;
    //console.log(count);
}

function jump(){
    if(!up){
        dY -=30;
        up = true;
    }
    else{
        dY += 30;
        up = false;
    }
}

//duck speech bubble
var x_2 = 310;
var y_2 = 160;
var w2 = 140;
var h2 = 50;
var r2 = 5;

var px2;
var py2;

var speechUp = false;

//speech bubble pointer
function duckSpeech(){
    px2 = x_2+(w2/2) - 10;
    py2 = y_2+h2;

    context.fillStyle = '#0009';
    context.beginPath();
    context.moveTo(px2, py2);  //Startpoint (x, y)
    px2 += 10;
    py2 += 20;
    context.lineTo(px2, py2); //Point 1    (x, y)
    px2 += 10;
    py2 -= 20;
    context.lineTo(px2, py2);  //Point 2    (x, y)
    context.closePath();
    context.fill();

    context.fillRect(x_2,y_2,w2,h2,r2);

    context.font = "30px Arial";
    context.fillStyle = "white";
    context.fillText("QUACK!!", x_2 + 10 , y_2 + 40);

    if(speechUp){
        y_2 += 20;
        speechUp = false;
    }
    else{
        y_2 -= 20;
        speechUp = true;
    }
}

function duckSpeech2(){
    px2 = x_2+(w2/2) - 10;
    py2 = y_2+h2 +20 ;

    context.fillStyle = '#0009';
    context.beginPath();
    context.moveTo(px2, py2);  //Startpoint (x, y)
    px2 += 5;
    py2 += 10;
    context.lineTo(px2, py2); //Point 1    (x, y)
    px2 += 5;
    py2 -= 10;
    context.lineTo(px2, py2);  //Point 2    (x, y)
    context.closePath();
    context.fill();

    context.fillRect(x_2 + 25,y_2 + 50,w2 - 80,h2 - 30,r2);

    context.font = "30px Arial";
    context.fillStyle = "white";
    context.fillText("...", x_2 + 35 , y_2 + 65);

}

//speech bubble
var x = 110;
var y = 90;
var width = 120;
var height = 50;
var radius = 5;

//speech bubble pointer
var x2;
var y2;

function grandmaSpeech(){

    context.fillStyle = '#0009';
    context.beginPath();
    context.moveTo(x2, y2);  //Startpoint (x, y)
    x2 += 10;
    y2 += 20;
    context.lineTo(x2, y2); //Point 1    (x, y)
    x2 += 10;
    y2 -= 20;
    context.lineTo(x2, y2);  //Point 2    (x, y)
    context.closePath();
    context.fill();

    context.fillRect(x,y,width,height,radius);

    context.font = "30px Arial";
    context.fillStyle = "white";
    context.fillText("QUIET.", x + 10 , y + 40);
}