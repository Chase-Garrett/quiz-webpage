// Assignment Code
var generateBtn = document.querySelector("#start");

// startQuiz function
function startQuiz() {
    // removes text from quiz-body div
    var quizBody = document.getElementById("quiz-body");
    quizBody.textContent = "";

    // change timer to 75 seconds and display it
    var timer = document.getElementById("time");
    timer.textContent = "Time: 75";


    // changes text of quiz-header div to first question
    var quizHeader = document.getElementById("quiz-header");
    quizHeader.textContent = "Commonly used data types DO NOT include:";

    // creates 4 buttons in the same style as the start button and appends them to the quiz-footer div
    // each button has a unique id
    // each button has an answer choice as its text content
    // each button has an event listener that calls the checkAnswer function
    // removes start button
    var quizFooter = document.getElementById("quiz-footer");
    quizFooter.removeAttribute(generateBtn);
    var button1 = document.createElement("button");
    button1.setAttribute("class", "btn btn-primary btn-lg btn-block");
    button1.setAttribute("id", "button1");
    button1.textContent = "1. strings";
    button1.addEventListener("click", checkAnswer);
    quizFooter.appendChild(button1);

}



// When start button is clicked, quiz begins
generateBtn.addEventListener("click", startQuiz);