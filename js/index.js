// Display session time
let session = document.getElementById('session').value;
document.getElementById('display').innerHTML = `${session} minutes`;

 // Store and display session time change
document.getElementById('session').addEventListener('input', function () {
  clearInterval(timerInterval);
  session = document.getElementById('session').value;
  document.getElementById('display').innerHTML = `${session} minutes`;
});

// Reset timer
document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timerInterval);
    document.getElementById('display').innerHTML = `${session} minutes`;
});

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
    const d = Math.floor(t / (1000 * 60 * 60 * 24));
    const h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((t % (1000 * 60)) / 1000);

    console.log(d + ":" + h + ":" + m);

    d > 0 ? document.getElementById('display').innerHTML = `Reduce session length`
      : h > 0 && m < 10 && s < 10 ? document.getElementById('display').innerHTML = `${h}:0${m}:0${s}`
      : h > 0 && m < 10 ? document.getElementById('display').innerHTML = `${h}:0${m}:${s}`
      : h > 0 && s < 10 ? document.getElementById('display').innerHTML = `${h}:${m}:0${s}`
      : h > 0 ? document.getElementById('display').innerHTML = `${h}:${m}:${s}`
      : m < 10 && s < 10 ? document.getElementById('display').innerHTML = `0${m}:0${s}` 
      : m < 10 ? document.getElementById('display').innerHTML = `0${m}:${s}` 
      : s < 10 ? document.getElementById('display').innerHTML = `${m}:0${s}` 
      : document.getElementById('display').innerHTML = `${m}:${s}`;

    if (t <= 0) {
      clearInterval(timerInterval);
      document.getElementById('play').play();
      document.addEventListener('click', function () {
        document.getElementById('play').pause()
        });
    }
}, 1000);
});