document.addEventListener("DOMContentLoaded", function () {
  const minutesTimer = document.getElementById("minutes");
  const secondsTimer = document.getElementById("seconds");
  const millisecTimer = document.getElementById("millisec");
  const lapTime = document.getElementById("laptime");

  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const pauseBtn = document.getElementById("pause");
  const resetBtn = document.getElementById("reset");

  let minutes = 0;
  let seconds = 0;
  let millisec = 0;
  let interval;

  startBtn.addEventListener("click", startFunc);
  stopBtn.addEventListener("click", stopFunc);
  pauseBtn.addEventListener("click", pauseFunc);
  resetBtn.addEventListener("click", resetFunc);

  function startFunc() {
    interval = setInterval(update, 10);
    startBtn.disabled = true;
    resetBtn.disabled = false;
  }

  function stopFunc() {
    clearInterval(interval);
   
    lapCount();
    startBtn.disabled = false;
  }
  function pauseFunc() {
    clearInterval(interval);

    startBtn.disabled = false;
  }
  function resetFunc() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    millisec = 0;
    displayTime();

    startBtn.disabled = false;
    resetBtn.disabled = false;
  }
  function update() {
    millisec++;
    if (millisec == 100) {
      millisec = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
    }
    displayTime();
  }

  function displayTime() {
    millisecTimer.textContent = padTime(millisec);
    secondsTimer.textContent = padTime(seconds);
    minutesTimer.textContent = padTime(minutes);
  }

  function padTime(time) {
    return time.toString().padStart(2, "0");
  }

  function lapCount() {
    let laptimer = `${padTime(minutes)}:${padTime(seconds)}:${padTime(
      millisec
    )}`;

    const lapList = document.createElement("li");
    lapList.innerHTML = `<span>lap ${
      lapTime.childElementCount + 1
    }:</span> ${laptimer}`;
    lapTime.appendChild(lapList);
  }
});
