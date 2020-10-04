const newYearDate = new Date('1 Jan 2021');
var seconds, minutes, hours, days;
const secElem = document.getElementById("seconds");
const minElem = document.getElementById("minutes");
const hourElem = document.getElementById("hours");
const dayElem = document.getElementById("days");

function countdown() 
{
    const currentDate = new Date();
    const totalSeconds = Math.round((newYearDate - currentDate) / 1000);
    days = Math.round(totalSeconds / 3600 / 24);
    hours = Math.round(totalSeconds / 3600 % 60);
    minutes = Math.round(totalSeconds / 60 % 60);
    seconds = Math.round(totalSeconds % 60);

    secElem.innerHTML = seconds;
    minElem.innerHTML = minutes;
    hourElem.innerHTML = hours;
    dayElem.innerHTML = days;
}

setInterval(countdown, 1000);