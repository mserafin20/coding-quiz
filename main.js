let startButton = document.createElement('button');
let questionElement = document.getElementById('questions');
let timerElement = document.querySelector('#time-seconds');
let questionIndex = 0;
let time = 80;
let score = 0;
let scoreElement = document.querySelector('#score');
let boxElement = document.querySelector('#coding-quiz');
let timerInterval = 0;
let timerStarted = false;
let buttonContainer = document.querySelectorAll('#button');
let leaderboardElement = document.querySelector('#leaderboard');

// Questions and answers
var questionBoxes = [
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

let options = questionBoxes[questionIndex].options;

scoreElement.textContent = `Score: ${score}`;
timerElement.textContent = `Time Left: ${time}`;
startButton.setAttribute("type", "button");
startButton.classList.add("btn", "btn-primary");
startButton.textContent = "Start Quiz";

document.querySelector("#main-space").appendChild(startButton);
startButton.addEventListener("click", function () {
    if (!timerStarted) {
        timerStarted = true;
        time = 80;
        timerInterval = setInterval(function () {
            time--;
            timerElement.textContent = `Time Left: ${time}`;
            checkTime();
        }, 1000);
    } else {
        clearInterval(timerInterval);
        timerStarted = false;
    }
    startQuiz();
});
// console.log("Test connected main.js");
// function to start the quiz
function startQuiz(currentQuestion) {
    questionElement.classList.add("questionElement");
    questionIndex = 0;
    currentQuestion = questions[questionIndex];
    showQuestion();
    for (i = 0; i < buttonContainer.length; i++) {
        buttonContainer[i].addEventListener("click", function () {
            if (this.textContent === currentQuestion.correct) {
                score++;
            } else {
                time -= 5
            }
            if (questionIndex === questions.length - 1) {
                endQuiz(time);
            } else {
                questionIndex++;
                currentQuestion = questions[questionIndex];
                options = currentQuestion.options;
                showQuestion();
            }
        })
    }
}

startButton.addEventListener("click", startQuiz);

let currentQuestion = questions[questionIndex];

function showQuestion() {
    questionElement.innerHTML = "";
    var question = document.createElement("div");
    question.textContent = currentQuestion.question;
    questionElement.appendChild(question);
    for (i = 0; i < currentQuestion.options.length; i++) {
        var option = document.createElement("button");
        option.classList.add("optionButtons");
        option.textContent = currentQuestion.options[i];
        questionElement.appendChild(option);
        option.addEventListener("click", function () {
            console.log(currentQuestion.correct);
            if (this.textContent === currentQuestion.correct) {
                score++;
            } else {
                time -= 5
            }
            questionIndex++;
            if(questionIndex >= questionBoxes.length) {
                endQuiz(time);
            } else {
                currentQuestion = questionBoxes[questionIndex];
                showQuestion();
            }
            scoreElement.textContent = `Score: ${score}`;
            timerElement.textContent = `Time Left: ${time}`;
        })
    }
}

function checkTime() {
    if (time <= 0) {
        endQuiz(0);
    }
};

timerElement.classList.add("timer");
timerElement.classList.add("score");

function generateLeaderboard (userInfo) {
    if (localStorage.getItem("leaderboard") === null) {
        localStorage.setItem("leaderboard", JSON.stringify([userInfo]));
    } else {
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    }
    return localStorage;
}



// funtion to start the timer


// function startTimer() {
//     time = 80;
//     timerEl.textContent = `time left: ${time}`;

//     timerInterval = setInterval(function () {
//         time--;
//         timerEl.textContent = `time left: ${time}`;

//     }, 1000);
// }

// startTimer();



// // one box for a score

// scoreEl.textContent = `score: ${score}`;



// // create buttons
// // <button type="button" class="btn btn-primary">Base class</button>


// var startButton = document.createElement("button");

// startButton.setAttribute("class", "btn btn-primary")
// startButton.textContent = "Start Button";

// document.querySelector("#main-space").appendChild(startButton);


// // Click Event
// startButton.addEventListener("click", function (event) {
//     console.log(event);

//     var state = document.querySelector("#time-seconds").dataset.state;
//     if (state === "started") {
//         document.querySelector("#time-seconds").dataset.state = "stopped";
//         clearInterval(timerInterval);
//     }
//     else {
//         document.querySelector("#time-seconds").dataset.state = "started";
//         //timer reset
//       startTimer()
//     }
// });

// // This button is for correct answers (shows a message "Correct!")

// var correctAnswerButton = document.createElement("button");

// correctAnswerButton.setAttribute("type", "button");
// correctAnswerButton.setAttribute("class", "btn btn-success");
// correctAnswerButton.textContent = "Success Button";

// document.querySelector("#main-space").appendChild(correctAnswerButton);

// correctAnswerButton.addEventListener("click", function(event) {
//     // console.log("event listener works");
//     // console.log(event.target);
//     score++;
//     scoreEl.textContent = `score: ${score}`;
// });

// // This button is for incorrect answers and substracts 10 seconds from time score ("Incorrect!")

// var wrongAnswerButton = document.createElement("button");

// wrongAnswerButton.setAttribute("type", "button");
// wrongAnswerButton.setAttribute("class", "btn btn-danger");
// wrongAnswerButton.textContent = "Fail button";

// document.querySelector("#main-space").appendChild(wrongAnswerButton);

// wrongAnswerButton.addEventListener("click", function(event) {
//     time -= 10;
//     timerEl.textContent = `time left: ${time}`;
// });

