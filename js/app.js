let hr = min = seg = 0, hrTxt = minTxt = segTxt = '00', startTimer;
const startBtn = document.getElementById('start'),
pauseBtn = document.getElementById('stop'),
resetBtn = document.getElementById('reset'),
input = document.getElementById('check');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
function start (){
    startTimer = setInterval(() => {

        seg += 1;
        segTxt = seg < 10 ? `0${seg}` : seg;
        
        if (seg === 60){
            min += 1;
            minTxt = min < 10 ? `0${min}` : min;
            segTxt = '00';
            seg = 0;
        } 
        if (min === 60){
            hr += 1;
            hrTxt = hr < 10 ? `0${hr}` : hr;
            minTxt = '00';
            min = 0;
        } 
        putValue();

    },1000)
}

function pause() {
    clearInterval(startTimer);
}
function reset() {
    input.checked = false;
    clearInterval(startTimer);
    hr = min = seg = 0;
    hrTxt = minTxt = segTxt = '00';
    putValue();
}
function putValue(){
    document.getElementById('hours').innerHTML = hrTxt;
    document.getElementById('minutes').innerHTML = minTxt;
    document.getElementById('seconds').innerHTML = segTxt;
}