var hoursInput = document.getElementById("hours");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var intervalId;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;
  var totalSeconds = hours * 3600 + minutes * 60 + seconds;

  intervalId = setInterval(function () {
    if (totalSeconds <= 0) {
      stopTimer();
      return;
    }

    totalSeconds--;
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    seconds = totalSeconds - hours * 3600 - minutes * 60;

    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}
document.querySelector(
  "body > div.main-content-div > main > article > div > section.tool__wrap.pdflexi > div > div > div > div.timerContainer > div > div > div.progressBar > div"
);
