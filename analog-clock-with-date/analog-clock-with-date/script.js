const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");
const hourMinSec = document.getElementById("hourMinSec");
const dayOfTheWeek = document.getElementById("dayOfTheWeek");
const month = document.getElementById("month");
const day = document.getElementById("day");

const updateTime = () => {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    let monthName = date.toLocaleString('default', { month: 'short' });
    let dayOfMonth = date.getDate().toString().padStart(2, '0');

    hourMinSec.textContent = `${hours}:${minutes}:${seconds}`;
    dayOfTheWeek.textContent = dayOfWeek.toUpperCase();
    month.textContent = monthName.toUpperCase();
    day.textContent = dayOfMonth;
    
    let secToDeg = (date.getSeconds() / 60) * 360;
    let minToDeg = (date.getMinutes() / 60) * 360;
    let hrToDeg = (date.getHours() / 12) * 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();