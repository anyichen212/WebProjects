//var balls;
//var strikeGet;

function start(){
    //localStorage.clear();
    var goalLabel = document.getElementById("goal");
    var strikeLabel = document.getElementById("strike");
    var out = document.getElementById("out");

    if(localStorage){
        //balls = localStorage.goal;
        //strikeGet = localStorage.strike;

        if(localStorage.goal == undefined || localStorage.strike == undefined){
            reset();
        }

        goalLabel.innerHTML = "Balls Goal : " + localStorage.goal;
        strikeLabel.innerHTML = "Strikes : " + localStorage.strike;
    }else {
        alert("Sorry, your browser do not support local storage.");
    }

    if(localStorage.strike >= 3){
        out.innerHTML = "STRIKE 3, YOU ARE OUT!!"
    }
    else{
        out.innerHTML = "";
    }

};

document.addEventListener('DOMContentLoaded', start);


function goal(){
    if(localStorage.strike < 3){
        localStorage.goal++;
        start();
    }
};

function strike(){
    if(localStorage.strike < 3){
        localStorage.strike++;
        start();
    }
};

function reset(){
    localStorage.goal = 0;
    localStorage.strike = 0;
    start();
};

function clearStorage(){
    localStorage.clear();
    out.innerHTML = "Press Reset or Refresh the page to use counter again!"
}