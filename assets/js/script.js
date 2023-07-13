// Assignment Code
var generateBtn = document.querySelector("#start");
var timer = document.querySelector("#time");

var secondsLeft = 75;

// Timer function
function setTime() {
    timer.textContent = "Time: " + secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time: 0";
        }
    }, 1000);
}

// startQuiz function
function startQuiz() {
    // displays timer
    setTime();
    // removes text from quiz-body div
    var quizBody = document.getElementsByClassName("quiz-body")[0];
    quizBody.textContent = "";

    // changes text of quiz-header div to first question
    var quizHeader = document.getElementsByClassName("quiz-header")[0];
    quizHeader.textContent = "Commonly used data types DO NOT include:";

    // creates 4 buttons in the same style as the start button and appends them to the quiz-footer div
    // each button has a unique id
    // each button has an answer choice as its text content
    // each button has an event listener that calls the checkAnswer function
    // removes start button
    var quizFooter = document.getElementsByClassName("quiz-footer")[0];
    var button1 = document.createElement("button");
    button1.setAttribute("class", "btn btn-primary btn-lg btn-block");
    button1.setAttribute("id", "button1");
    button1.textContent = "1. strings";
    button1.addEventListener("click", checkAnswer);
    quizFooter.appendChild(button1);

}



// When start button is clicked, quiz begins
generateBtn.addEventListener("click", startQuiz);