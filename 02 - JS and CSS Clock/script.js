const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds/60 * 360) + 90;
    const minutesDegrees = (minutes/60 * 360) + 90;
    const hoursDegrees = (hours/12 * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //fix transition bugs
    if(seconds === 0) {
        secondHand.style.transition = "none"; 
    } else {
        secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.5, 0.58, 1)"; 
    }

}

setInterval(setDate, 1000);