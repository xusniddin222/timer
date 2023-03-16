const num = document.querySelector("#num")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const stop = document.querySelector("#stop")

let counter = 0;
let timer;

stop.onclick = function (){
    clearTime(timer);
}
pause.onclick = function (){
    clearInterval(timer);
}
start.onclick = function(){
    timer = setInterval(setTime, 1000);
}

function setTime(){

    counter++;
    num.textContent = counter;

}

function clearTime(){
    clearInterval(timer);
    num.innerHTML = 0;
    counter = 0;
}
