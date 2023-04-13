var scoreEl = document.querySelector('#score');
var score = 0;
var timerEl = document.querySelector('#time-seconds');
var time = 180;
var timerInterval = 0;

console.log("Test connected main.js");

// one box for a timer 
function startTimer() {
    time = 180;
    timerEl.textContent = `time left: ${time}`;

    timerInterval = setInterval(function () {
        time--;
        timerEl.textContent = `time left: ${time}`;

    }, 1000);
}

startTimer();



// one box for a score 

scoreEl.textContent = `score: ${score}`;



// create buttons 
// <button type="button" class="btn btn-primary">Base class</button>


var startButton = document.createElement("button");

startButton.setAttribute("class", "btn btn-primary")
startButton.textContent = "Start Button";

document.querySelector("#main-space").appendChild(startButton);


// Click Event 
startButton.addEventListener("click", function (event) {
    console.log(event);

    var state = document.querySelector("#time-seconds").dataset.state;
    if (state === "started") {
        document.querySelector("#time-seconds").dataset.state = "stopped";
        clearInterval(timerInterval);
    }
    else {
        document.querySelector("#time-seconds").dataset.state = "started";
        //timer reset
      startTimer()
    }
});

// one button to add 1 to score (shows a message)

var scoreButton = document.createElement("button");

// one button to subtract 1 from score (shows a message)