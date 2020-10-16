var seconds, minutes, hours, days;
const secElem = document.getElementById("seconds");
const minElem = document.getElementById("minutes");
const hourElem = document.getElementById("hours");
const dayElem = document.getElementById("days");

const userDate = document.getElementById("user-date");

function setMinDate() {
    var today = new Date();
    var mm = today.getMonth() + 1;
    var dd = today.getDate() + 1;
    const yyyy = today.getFullYear();

    mm = formatTime(mm);
    dd = formatTime(dd);

    today = yyyy + '-' + mm + '-' + dd;

    userDate.setAttribute("min", today);
    userDate.setAttribute("value", today);
}

function formatTime(time) {
    if (time < 10)
        return '0' + time;
    return time;
}

function countdown() {
    const currentDate = new Date();
    const totalSeconds = (userDate.valueAsDate - currentDate) / 1000;

    days = Math.round(totalSeconds / 3600 / 24);
    hours = Math.round((totalSeconds - 7200) / 3600) % 24; //-7200 is for hardfixing GMT+0200 problem
    minutes = Math.round(totalSeconds / 60) % 60;
    seconds = Math.round(totalSeconds) % 60;

    secElem.innerHTML = formatTime(seconds);
    minElem.innerHTML = formatTime(minutes);
    hourElem.innerHTML = formatTime(hours);
    dayElem.innerHTML = formatTime(days);
}

setMinDate();
setInterval(countdown, 1000);