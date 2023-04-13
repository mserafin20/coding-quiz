var scoreEl = document.querySelector('#score');
var score = 0;
var timerEl = document.querySelector('#time-seconds');
var time = 500;
var timerInterval = 0;

console.log("Test connected main.js");

// one box for a timer 
function startTimer() {
    time = 500;
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

// This button is for correct answers (shows a message "Correct!")

var correctAnswerButton = document.createElement("button");

correctAnswerButton.setAttribute("type", "button");
correctAnswerButton.setAttribute("class", "btn btn-success");
correctAnswerButton.textContent = "Success Button";

document.querySelector("#main-space").appendChild(correctAnswerButton);

correctAnswerButton.addEventListener("click", function(event) {
    // console.log("event listener works");
    // console.log(event.target);
    score++;
    scoreEl.textContent = `score: ${score}`;
});

// This button is for incorrect answers and substracts 10 seconds from time score ("Incorrect!")

var wrongAnswerButton = document.createElement("button");

wrongAnswerButton.setAttribute("type", "button");
wrongAnswerButton.setAttribute("class", "btn btn-danger");
wrongAnswerButton.textContent = "Fail button";

document.querySelector("#main-space").appendChild(wrongAnswerButton);

wrongAnswerButton.addEventListener("click", function(event) {
    time -= 10;
    timerEl.textContent = `time left: ${time}`;
});

