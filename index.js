const daystext = document.getElementById('days')
const hoursstext = document.getElementById('hours')
const mintstext = document.getElementById('mints')
const secondstext = document.getElementById('seconds')

const newYears = "2 May 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daystext.innerText = formatTime(days)
    hoursstext.innerText = formatTime(hours)  
    mintstext.innerText = formatTime(mins)  
    secondstext.innerText = formatTime(seconds)  
     
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)