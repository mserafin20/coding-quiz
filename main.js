var scoreEl = document.querySelector('#score');
var score = 0;
var timerEl = document.querySelector('#time-seconds');
var time = 80;
var timerInterval = 0;

// Questions and answers

var questionAnswers = [ 
    {
        question: "1. Commonly used data types DO Not include: ",
        answers: ['A. Strings', 'B. Booleans', 'C. Alerts', 'D. Numbers'],
        correct: 'C. Alerts'
    },
    {
        question: "2. The condition in an if/else statement is enclosed with ________. ",
        answers: ['A. Quotes', 'B. Curly Brackets', 'C. Parenthesis', 'D. Square Brackets'],
        correct: 'C. Parenthesis'
    },
    {
        question: "3. Arrays in JavaScript can be used to store ______. ",
        answers: ['A. Numbers and Strings', 'B. Other Arrays', 'C. Booleans', 'D. All the above'],
        answer: 'D All the above'
    },
    {
        question: "4. String values must be enclosed within _____ when being assigned to variables.",
        answers: ['A. Commas', 'B. Curly Brackets', 'C. Quotes', 'D. Parenthesis'],
        correct: 'C. Quotes'
    },
    {
        question: "5. A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: ['A. JavaScript', 'B. Terminal/Bash', 'C. For Loops', 'D. console.log'],
        correct: 'D. console.log'
    },
];

// console.log("Test connected main.js");

// function to start the quiz



// funtion to start the timer 


function startTimer() {
    time = 80;
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

