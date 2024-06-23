let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const centiseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
  return `${minutes}:${seconds}:${centiseconds}`;
}

function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  stopwatchDisplay.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateStopwatch, 10);
  isRunning = true;
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  stopwatchDisplay.textContent = '00:00:00';
}

startButton.addEventListener('click', () => {
  if (!isRunning) {
    startStopwatch();
  }
});

pauseButton.addEventListener('click', () => {
  if (isRunning) {
    pauseStopwatch();
  }
});

resetButton.addEventListener('click', resetStopwatch);
