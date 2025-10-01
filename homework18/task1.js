let startTime = 90;  

const timerContainer = document.getElementById("timer");

function timer(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return min + ":" + sec;
}

function startTimer(time) {
    let timeLeft = time;

    timerContainer.textContent = timer(timeLeft);

    const interval = setInterval(() => {
        timeLeft--;

        timerContainer.textContent = timer(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerContainer.textContent = "00:00";
        }
    }, 1000);
}

startTimer(startTime);