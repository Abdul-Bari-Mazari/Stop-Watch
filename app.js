// Timer and Stopwatch elements

const timerHeading = document.getElementById("timerHeading"),
  timerButtons = document.getElementById("timerButtons"),
  startTimerButton = document.getElementById("startTimerButton"),
  resetTimerButton = document.getElementById("resetTimerButton"),
  timerInterface = document.getElementById("timerInterface"),
  //   Stopwatch elements
  stopwatchHeading = document.getElementById("stopwatchHeading"),
  stopwatchButtons = document.getElementById("stopwatchButtons"),
  startWatchButton = document.getElementById("startWatchButton"),
  resetWatchButton = document.getElementById("resetWatchButton");
stopwatchInterface = document.getElementById("stopwatchInterface");

// Render timer interface on page load

function renderTimer() {
  timerInterface.style.display = "flex";
  timerButtons.style.display = "flex";
  stopwatchButtons.style.display = "none";
}

window.onload = renderTimer();

// Switch to timer interface

function timerSwitch() {
  stopwatchHeading.style.color = "black";
  stopwatchHeading.style.borderBottom = "none";
  timerHeading.style.color = "blue";
  timerHeading.style.borderBottom = "2px solid blue";

  timerInterface.style.display = "flex";
  stopwatchInterface.style.display = "none";

  timerButtons.style.display = "flex";
  stopwatchButtons.style.display = "none";
}

// Switch to stopwatch interface

function stopwatchSwitch() {
  timerHeading.style.color = "black";
  timerHeading.style.borderBottom = "none";
  stopwatchHeading.style.color = "blue";
  stopwatchHeading.style.borderBottom = "2px solid blue";

  stopwatchInterface.style.display = "flex";
  timerInterface.style.display = "none";

  timerButtons.style.display = "none";
  stopwatchButtons.style.display = "flex";
}

// Timer minute and second element

const minutesHTML = document.getElementById("minutes"),
  secondsHTML = document.getElementById("seconds");

// Start timer function

function startTimer() {
  let seconds = 0,
    minutes = 5;

  if (seconds <= 0) {
    if (minutes <= 0) {
      clearInterval(interval);
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  minutesHTML.innerHTML = minutes;
  secondsHTML.innerHTML = seconds;
}

let interval = setInterval(startTimer, 1000);

// Start timer button event

function startTimerBtn() {
  startTimer();
  if ((startTimerButton.innerHTML = "START")) {
    startTimerButton.innerHTML = "STOP";
  } else if (startTimerButton.innerHTML === "STOP") {
    startTimerButton.innerHTML = "START";
    clearInterval(interval);
  }
}

// Reset timer button event

function resetTimer() {
  minutesHTML.innerHTML = "5";
  secondsHTML.innerHTML = "00";
  clearInterval(interval);
}

// Stopwatch second and milisecond elements

const watchSeconds = document.getElementById("watchSeconds"),
  miliseconds = document.getElementById("miliseconds"),
  stopWatchMinutes = document.getElementById("stopWatchMinutes");

// Start stopwatch function

let interval1;

function startWatch() {
  let timer = 0,
    stopWatchSeconds = 0,
    watchMinutes = 0,
    interval1 = setInterval(function () {
      timer++;
      if (timer === 100) {
        stopWatchSeconds++;
        timer = 0;
        if (stopWatchSeconds === 60) {
          stopWatchSeconds = 0;
          stopWatchMinutes.style.display = "flex";
          watchMinutes++;
        }
      }
      stopWatchMinutes.innerHTML = `<h1>${watchMinutes}</h1>
    <h5>m</h5>`;
      watchSeconds.innerHTML = stopWatchSeconds;
      miliseconds.innerHTML = timer;
    }, 10);
}

// Reset stopwatch function

function resetWatch() {
  watchSeconds.innerHTML = "0";
  miliseconds.innerHTML = "00";
  clearInterval(interval1);
}
