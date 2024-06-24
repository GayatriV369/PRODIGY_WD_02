let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;
let lapCount = 1;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10); // update time every 10 milliseconds
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    startTime = 0;
    updatedTime = 0;
    difference = 0;
    lapCount = 1;
    document.getElementById('timeDisplay').innerHTML = '00:00:00.000';
    document.getElementById('laps').innerHTML = '';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = difference % 1000;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let formattedTime = hours + ':' + minutes + ':' + seconds + '.' + String(milliseconds).padStart(3, '0');
    document.getElementById('timeDisplay').innerHTML = formattedTime;
}

function recordLap() {
    if (running) {
        let lapTime = document.getElementById('timeDisplay').innerHTML;
        let lapRecord = document.createElement('div');
        lapRecord.innerText = 'Lap ' + lapCount + ': ' + lapTime;
        document.getElementById('laps').appendChild(lapRecord);
        lapCount++;
    }
}
