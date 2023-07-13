// Assignment Code
var generateBtn = document.querySelector("#start");
var timer = document.querySelector("#time");

var secondsLeft = 75;
var currentQuestion = 1;
var score = 0;


// Timer function
function setTime() {
    timer.textContent = "Time: " + secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time: 0";
            // calls function to add initials and score to local storage
            addScore();
        }
    }, 1000);
}

// secondQuestion function
function secondQuestion() {
    // changes text of quiz-header div to second question
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "The condition in an if / else statement is enclosed within ____.";
    
    // changes text of buttons
    var button1 = document.querySelector("#btn1");
    button1.textContent = "1. quotes";
    var button2 = document.querySelector("#btn2");
    button2.textContent = "2. curly brackets";
    var button3 = document.querySelector("#btn3");
    button3.textContent = "3. parentheses";
    var button4 = document.querySelector("#btn4");
    button4.textContent = "4. square brackets";
    //add event listeners to buttons
    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);
}

// thirdQuestion function
function thirdQuestion() {
    // changes text of quiz-header div to third question
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "Arrays in JavaScript can be used to store ____.";

    // changes text of buttons
    var button1 = document.querySelector("#btn1");
    button1.textContent = "1. numbers and strings";
    var button2 = document.querySelector("#btn2");
    button2.textContent = "2. other arrays";
    var button3 = document.querySelector("#btn3");
    button3.textContent = "3. booleans";
    var button4 = document.querySelector("#btn4");
    button4.textContent = "4. all of the above";
    //add event listeners to buttons
    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", wrongAnswer);
    button4.addEventListener("click", correctAnswer);
}

// fourthQuestion function
function fourthQuestion() {
    // changes text of quiz-header div to fourth question
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "String values must be enclosed within ____ when being assigned to variables.";

    // changes text of buttons
    var button1 = document.querySelector("#btn1");
    button1.textContent = "1. commas";
    var button2 = document.querySelector("#btn2");
    button2.textContent = "2. curly brackets";
    var button3 = document.querySelector("#btn3");
    button3.textContent = "3. quotes";
    var button4 = document.querySelector("#btn4");
    button4.textContent = "4. parentheses";
    //add event listeners to buttons
    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);
}

// fifthQuestion function
function fifthQuestion() {
    // changes text of quiz-header div to fifth question
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";

    // changes text of buttons
    var button1 = document.querySelector("#btn1");
    button1.textContent = "1. JavaScript";
    var button2 = document.querySelector("#btn2");
    button2.textContent = "2. terminal / bash";
    var button3 = document.querySelector("#btn3");
    button3.textContent = "3. for loops";
    var button4 = document.querySelector("#btn4");
    button4.textContent = "4. console.log";
    //add event listeners to buttons
    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", wrongAnswer);
    button4.addEventListener("click", correctAnswer);
}

// wrongAnswer function
function wrongAnswer() {
    // print "Wrong!" below the buttons
    var wrong = document.querySelector("#answer");
    wrong.textContent = "Wrong!";
    // subtract 10 seconds from timer
    secondsLeft -= 10;
    // move to next question
    currentQuestion++;
    switch (currentQuestion) {
        case 2:
            // calls second question function
            secondQuestion();
            break;
        case 3:
            // calls third question function
            thirdQuestion();
            break;
        case 4:
            // calls fourth question function
            fourthQuestion();
            break;
        case 5:
            // calls fifth question function
            fifthQuestion();
            break;
        case 6:
            // calls function to add initials and score to local storage
            addScore();
            break;
    }
}

// correctAnswer function
function correctAnswer() {
    // print "Correct!" below the buttons
    var correct = document.querySelector("#answer");
    correct.textContent = "Correct!";
    // add 10 points to score
    score += 10;
    // move to next question
    currentQuestion++;
    switch (currentQuestion) {
        case 2:
            // calls second question function
            secondQuestion();
            break;
        case 3:
            // calls third question function
            thirdQuestion();
            break;
        case 4:
            // calls fourth question function
            fourthQuestion();
            break;
        case 5:
            // calls fifth question function
            fifthQuestion();
            break;
        case 6:
            // calls function to add initials and score to local storage
            addScore();
            break;
    }
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