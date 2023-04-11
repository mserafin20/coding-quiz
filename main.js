var scoreEl = document.querySelector('#score');
var score = 0;
var timerEl = document.querySelector('#time-seconds');
var time = 180;
var timerInterval = 0;

console.log("Test connected main.js");

// one box for a timer 

timerEl.textContent = `time left: ${time}`;

timerInterval = setInterval(function() {
    time--;
    timerEl.textContent = `time left: ${time}`;

}, 1000)

// one box for a score 

scoreEl.textContent = `score: ${score}`;



// create buttons 
// <button type="button" class="btn btn-primary">Base class</button>


var startButton = document.createElement("Start");

startButton.setAttribute("class", "btn btn-primary")
startButton.textContent = "Start Button";
document.querySelector("#main-space").appendChild(startButton);
// one to start/stop timer 


// one button to add 1 to score (shows a message)

// one button to subtract 1 from score (shows a message)