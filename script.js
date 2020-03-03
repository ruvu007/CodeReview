// A couple of global variables
let start, stop, tijdBox;

// Grab the necessary elements from the DOM
start = document.getElementById("start");
stop = document.getElementById("stop");
tijdBox = document.getElementById("tijd-box");

// Add event listeners to both buttons
start.addEventListener("click", function() {
  stopwatch("start");
});

stop.addEventListener("click", function() {
  stopwatch("stop");
});

// Define a timer ID for the setInterval function
timerId = null;

// Create the stopwatch
function stopwatch(command) {
  let hours = 0,
    minutes = 0,
    seconds = 0,
    display;

  function maakTweeNummers(number) {
    // Laat nummers zien voor getallen onder 10
    if (number < 10) {
      return "0" + number;
    }

    return number;
  }

  if (command === "start") {
    timerId = setInterval(function() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      display =
        maakTweeNummers(hours) +
        ":" +
        maakTweeNummers(minutes) +
        ":" +
        maakTweeNummers(seconds);
      tijdBox.innerHTML = display;
      console.log(display);
    }, 1000);
  } else if (command === "stop") {
    clearInterval(timerId);
  }
}