var canvas;
var context;

const circle = {
    count: 20,
    speed: 1.5,
    colors: ["#ffffff", "#FDE38A", "#ffffb3", "#ffeb99", "#ffb380", "#bbff99", "#80ffd4", "#ff80ff"]
};

function start(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

   mainLoop();
}

document.addEventListener('DOMContentLoaded', start);

function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var check = true;
function update(){

    //loop the sun's shine
    if(check){
        suns.r -= 0.05;
    }
    else{
        suns.r += 0.05;
    }

    if(suns.r < 0.8){
        check = false;
    }

    if(suns.r > 0.9){
        check = true;
    }
}

function draw() {
    background();
    sun();
    house();
    ground();
    character();
    drawCircle();
    text();
}

function mainLoop () {
    clear();
    update();
    draw();
    window.setTimeout(mainLoop, 1000/5);
   }

function text () {
    context.font = "italic 15pt Courier New";
    context.fillStyle = "black";
    context.fillText("Here lives", 10, 30);
    context.fillText("three yams...", 80, 50);
}

//draw characters
   var flip = false;
   img1 = new Image();
   img1.src = 'assets/yam1.png';
   img2 = new Image();
   img2.src = 'assets/yam2.png';
function character () {
    if(!flip){
        context.drawImage(img1, 150, 240, 100, 100);
        context.drawImage(img1, 60, 240, 100, 100);
        context.drawImage(img1, 240, 240, 100, 100);
        flip = true;
    }
    else{
        context.drawImage(img2, 155, 240, 100, 100);
        context.drawImage(img2, 65, 240, 100, 100);
        context.drawImage(img2, 245, 240, 100, 100);
        flip = false;
    }

}

//confetti rain
function drawCircle () {
    var x;
    var y;
    var r;
    var circleColor;
    for(var i = 0 ; i < circle.count ; i++){
        x = Math.random()*canvas.width;
        y = Math.random()*canvas.height;
        r = Math.random()*3;

        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, true);
        context.closePath();
        circleColor = circle.colors[Math.floor(Math.random()*circle.colors.length)];
        //circleColor = circleColor + Math.floor(Math.random()*10)+0;
        context.fillStyle = circleColor;
        context.fill();
    }

   }

function house(){
    context.fillStyle = "brown";
    context.fillRect(100, 230, 200,100);

    context.fillStyle = "peru";
    for(var i = 240 ; i < 330 ; i += 30){
        context.fillRect(100, i, 200, 10);
    }

    //width 100 - 300 is fill
    //height 230 - 330
    context.beginPath();
    context.moveTo(80,235);
    context.lineTo(320,235);
    context.lineTo(300,170);
    context.lineTo(100,170);
    context.closePath();
    context.stroke();
    context.strokeStyle = "brown";
    context.fillStyle = "brown";
    context.fill();

    context.fillStyle = "Maroon";
    context.fillRect(80,231, 240, 5);

    //ceiling pipe
    context.fillStyle = "peru";
    context.fillRect(250,140, 20, 50);
    context.fillStyle = "Maroon";
    context.fillRect(247,140, 26, 5);

    //door
    context.fillStyle = "black";
    context.fillRect(140,270, 40, 58);
    //window
    context.fillRect(200,250, 80, 50);

}

const suns = {
    r: 1.0
}

function sun() {
    
    var radgrad = context.createRadialGradient(340,60,0,340,60,50);
    radgrad.addColorStop(0, 'rgba(255,255,0,1)');
    radgrad.addColorStop(suns.r-0.3, 'rgba(255,250,50,.7)');
    radgrad.addColorStop(suns.r-0.1, 'rgba(255,255,100,.3)');
    radgrad.addColorStop(suns.r, 'rgba(255,255,100,.1)');

    context.beginPath();
    context.arc(340, 60, 50, 0, 2 * Math.PI, true);
    context.closePath();
    //context.stroke();
    //context.fillStyle = "lightYellow";
    context.fill();
    context.fillStyle = radgrad;
    context.fill();
    
   }

function ground(){
            //checkerboard ground
            for(var i = 0; i < canvas.width ; i+=50){
                for(var j = canvas.height/1.2 ; j < canvas.height ; j+=50){
                    context.fillStyle = "sienna";
                    context.fillRect(i, j, 50, 50);
                    context.fillStyle = "peru";
                    context.fillRect(i, j, 25, 25);
                    context.fillRect(i+25, j+25, 25, 25);
                }
        
                //grass
                context.fillStyle = "green";
                context.fillRect(i+12, canvas.height/1.24, 5, 15);
                context.fillRect(i, canvas.height/1.2, 100, 25);
                context.fillStyle = "lightGreen";
                context.fillRect(i+28, canvas.height/1.23, 5, 15);
                context.fillRect(i+50, canvas.height/1.23, 5, 15);
                context.fillRect(i, canvas.height/1.21, 100, 20);
        
            }
}

function background(){
        //gradient for the sky
        var gradient = context.createLinearGradient(0,-100,0,300);
        gradient.addColorStop(0, "darkBlue");
        gradient.addColorStop(0.5, "cyan");
        gradient.addColorStop(1, "lightYellow");
    
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

}


