let hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second');

function getDoubleDigit(a) {
    if (a < 10) {
        return `0${a}`;
    } else {
        return a;
    }
};

function time(){
    let d = new Date();
    let s = getDoubleDigit(d.getSeconds());
    let m = getDoubleDigit(d.getMinutes());
    let h = getDoubleDigit(d.getHours());

    document.querySelector('#clock').innerText = `${h}:${m}:${s}`;

    secondHand.style.transform = `rotate(${s*6}deg)`;
    minuteHand.style.transform = `rotate(${m*6}deg)`;
    hourHand.style.transform = `rotate(${h*30}deg)`;

};

document.addEventListener('DOMContentLoaded', function () {
    setInterval(time,1000);
});

