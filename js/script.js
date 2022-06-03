let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let divTimer = document.querySelector(".timer");

// get buttons //
let startButton = document.getElementById("start");
let endButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

// Initalize seconds and minutes ==> 0;

let second = 0;
let minute = 0;
let interval;

// function start //

let startFunction = ()=>{
    second++;
    seconds.innerHTML = second;
    if(second == 99){
        second = 0;
        second++;
        seconds.innerHTML = second;
        minute++;
        minutes.innerHTML = minute;
    }
    if(minute <= 9){
        minutes.innerHTML = "0" + minute; 
    }
}

function timeInterval(){
    interval = setInterval(startFunction, 5);
}

// function stop //

let stopFunction = ()=>{
    clearInterval(interval);
    divTimer.classList.add("stop");
}

// function reset //

let resetFunction = ()=>{
    location.reload();
}

startButton.addEventListener("click", timeInterval);
endButton.addEventListener("click", stopFunction);
resetButton.addEventListener("click", resetFunction);