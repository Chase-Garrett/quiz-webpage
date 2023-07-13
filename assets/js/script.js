// Assignment Code
var generateBtn = document.querySelector("#start");
var timer = document.querySelector("#time");

var secondsLeft = 75;
var currentQuestion = 1;

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

// wrongAnswer function
function wrongAnswer() {
    // print "Wrong!" below the buttons
    var wrong = document.querySelector("#answer");
    wrong.textContent = "Wrong!";
    // subtract 10 seconds from timer
    secondsLeft -= 10;
    currentQuestion++;
}

// correctAnswer function
function correctAnswer() {
    // print "Correct!" below the buttons
    var correct = document.querySelector("#answer");
    correct.textContent = "Correct!";
    currentQuestion++;
}

// startQuiz function
function startQuiz() {
    // displays timer
    setTime();
    // removes text from quiz-body div
    var quizBody = document.querySelector(".quiz-body");
    quizBody.textContent = "";

    // changes text of quiz-header div to first question
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "Commonly used data types DO NOT include:";

    // removes start button
    var quizFooter = document.querySelector(".quiz-footer");
    quizFooter.removeChild(generateBtn);
    // add text to hidden buttons and display them
    var button1 = document.querySelector("#btn1");
    button1.textContent = "1. strings";
    button1.style.display = "inline-block";
    var button2 = document.querySelector("#btn2");
    button2.textContent = "2. booleans";
    button2.style.display = "inline-block";
    var button3 = document.querySelector("#btn3");
    button3.textContent = "3. alerts";
    button3.style.display = "inline-block";
    var button4 = document.querySelector("#btn4");
    button4.textContent = "4. numbers";
    button4.style.display = "inline-block";
    //add event listeners to buttons
    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);
}



// When start button is clicked, quiz begins
generateBtn.addEventListener("click", startQuiz);