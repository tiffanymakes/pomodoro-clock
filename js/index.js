// Display session time
let session = document.getElementById('session').value;
//let breakt = document.getElementById('break').value;
document.getElementById('display').innerHTML = session;

// Store and display session time change
document.getElementById('session').addEventListener('input', sessionTime);
function sessionTime() {
  session = document.getElementById('session').value;
  document.getElementById('display').innerHTML = session;
}

// Store break time change
/*
document.getElementById('break').addEventListener('input', breakTime);
function breakTime() {
  breakt = document.getElementById('session').value;
}
*/

// Run Pomodoro on click
let timerInterval;
document.getElementById('display').addEventListener('click', function() {
  clearInterval(timerInterval);
  // Countdown timer
  const start = Date.parse(new Date());
  const end = session*1000*60+start;
  timerInterval = setInterval(() => {
    const now = Date.parse(new Date());
    const t = end - now;
    const m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((t % (1000 * 60)) / 1000);
    m < 10 && s < 10 ? document.getElementById('display').innerHTML = `0${m}:0${s}` 
      : m < 10 ? document.getElementById('display').innerHTML = `0${m}:${s}` 
      : s < 10 ? document.getElementById('display').innerHTML = `${m}:0${s}` 
      : document.getElementById('display').innerHTML = `${m}:${s}`;

    if (t <= 0) {
      clearInterval(timerInterval);
    }
}, 1000);
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timerInterval);
    document.getElementById('display').innerHTML = session;
});