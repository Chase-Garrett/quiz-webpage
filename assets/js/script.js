// Assignment Code
var generateBtn = document.querySelector("#start");
var timer = document.querySelector("#time");

var secondsLeft = 75;
var currentQuestion = 1;
var score = 0;

// create button to clear score and restart quiz
var clearButton = document.createElement("button");
clearButton.setAttribute("class", "btn");
clearButton.setAttribute("id", "clear");
clearButton.textContent = "Replay";
clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    // clears score
    score = 0;
    // return to start of quiz
    firstQuestion();
});

var quizBody = document.querySelector(".quiz-body");
 // creates h1 element
 var h1 = document.createElement("h1");
 // adds text to h1 element
 h1.textContent = "Coding Quiz Challenge";
 // appends h1 element to quiz-body div
 quizBody.appendChild(h1);
 // creates p element
 var p = document.createElement("p");
 // adds text to p element
 p.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
 // appends p element to quiz-body div
 quizBody.appendChild(p);


// displays high scores
function displayScores() {
    // hides buttons
    var button1 = document.querySelector("#btn1");
    button1.style.display = "none";
    var button2 = document.querySelector("#btn2");
    button2.style.display = "none";
    var button3 = document.querySelector("#btn3");
    button3.style.display = "none";
    var button4 = document.querySelector("#btn4");
    button4.style.display = "none";

    // removes text from quiz-body div
    var quizBody = document.querySelector(".quiz-body");
    quizBody.textContent = "";
    // removes text from answer div
    var answer = document.querySelector("#answer");
    answer.textContent = "";
    // removes text from quiz-header div
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "";
    // removes text from timer div
    var timer = document.querySelector("#time");
    timer.textContent = "";

    // creates h1 element
    var h1 = document.createElement("h1");
    // adds text to h1 element
    h1.textContent = "High Scores";
    // appends h1 element to quiz-body div
    quizBody.appendChild(h1);
    // gets scores from local storage
    var scores = JSON.parse(localStorage.getItem("scores"));
    // checks if scores is null
    if (scores == null) {
        // creates array to store scores
        scores = [];
    }
    // creates ul element
    var ul = document.createElement("ul");
    // appends ul element to quiz-body div
    quizBody.appendChild(ul);
    // loops through scores array
    for (var i = 0; i < scores.length; i++) {
        // creates li element
        var li = document.createElement("li");
        // adds text to li element
        li.textContent = scores[i].initials + " - " + scores[i].score;
        // appends li element to ul element
        ul.appendChild(li);
    }

    // creates button element
    var button = document.createElement("button");
    button.setAttribute("class", "btn");
    // adds text to button element
    button.textContent = "Clear Scores";
    // adds event listener to button element
    button.addEventListener("click", function (event) {
        event.preventDefault();
        // clears scores from local storage
        localStorage.clear();
        // calls function to display high scores
        displayScores();
    });
    // appends button element to quiz-body div
    quizBody.appendChild(button);
    // appends clearButton element to quiz-body div
    quizBody.appendChild(clearButton);
}

// saveScore function
function saveScore() {
    // gets initials from input element
    var initials = document.querySelector("#initials").value;
    // creates object to store initials and score
    var scoreObject = {
        initials: initials,
        score: score
    };
    // gets scores from local storage
    var scores = JSON.parse(localStorage.getItem("scores"));
    // checks if scores is null
    if (scores == null) {
        // creates array to store scores
        scores = [];
    }
    // adds scoreObject to scores array
    scores.push(scoreObject);
    // saves scores array to local storage
    localStorage.setItem("scores", JSON.stringify(scores));
    // calls function to display high scores
    displayScores();
}

// firstQuestion function
function firstQuestion() {
    // removes replay button
    var clearButton = document.querySelector("#clear");
    clearButton.remove();

    // sets currentQuestion to 1
    currentQuestion = 1;

    // removes text from quiz-body div
    var quizBody = document.querySelector(".quiz-body");
    quizBody.textContent = "";
    // removes text from answer div
    var answer = document.querySelector("#answer");
    answer.textContent = "";
    // removes text from quiz-header div
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "";
    // removes text from timer div
    var timer = document.querySelector("#time");
    timer.textContent = "";

    // creates h1 element
    var h1 = document.createElement("h1");
    // adds text to h1 element
    h1.textContent = "Coding Quiz Challenge";
    // appends h1 element to quiz-body div
    quizBody.appendChild(h1);
    // creates p element
    var p = document.createElement("p");
    // adds text to p element
    p.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    // appends p element to quiz-body div
    quizBody.appendChild(p);
    // creates button element
    var button = document.createElement("button");
    button.setAttribute("class", "btn");
    // adds text to button element
    button.textContent = "Start Quiz";
    // adds event listener to button element
    button.addEventListener("click", function (event) {
        event.preventDefault();
        // calls function to start quiz
        startQuiz();
    });
    // appends button element to quiz-body div
    quizBody.appendChild(button);
}


// addScore function
function addScore() {
    // hides buttons
    var button1 = document.querySelector("#btn1");
    button1.style.display = "none";
    var button2 = document.querySelector("#btn2");
    button2.style.display = "none";
    var button3 = document.querySelector("#btn3");
    button3.style.display = "none";
    var button4 = document.querySelector("#btn4");
    button4.style.display = "none";


    // removes text from quiz-body div
    var quizBody = document.querySelector(".quiz-body");
    quizBody.textContent = "";
    // removes text from answer div
    var answer = document.querySelector("#answer");
    answer.textContent = "";
    // removes text from quiz-header div
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "";
    // removes text from timer div
    var timer = document.querySelector("#time");
    timer.textContent = "";
    // creates form element
    var form = document.createElement("form");
    // creates label element
    var label = document.createElement("label");
    // creates input element
    var input = document.createElement("input");
    // creates button element
    var button = document.createElement("button");
    button.setAttribute("class", "btn");
    // adds text to label element
    label.textContent = "Score = " + score + " Enter initials: ";
    // adds attributes to input element
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials");
    // adds text to button element
    button.textContent = "Submit";
    // adds event listener to button element
    button.addEventListener("click", function (event) {
        event.preventDefault();
        // calls function to save initials and score to local storage
        saveScore();
    });

    // appends label element to form element
    form.appendChild(label);
    // appends input element to form element
    form.appendChild(input);
    // appends button element to form element
    form.appendChild(button);
    // appends form element to quiz-body div
    quizBody.appendChild(form);
    // appends clearButton to quiz-footer div
    var quizFooter = document.querySelector(".quiz-footer");
    quizFooter.appendChild(clearButton);
}

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

        // stops timer if all questions have been answered or if replay button is clicked
        if (currentQuestion == 1 || currentQuestion == 6) {
            clearInterval(timerInterval);
            // clear timer from screen
            timer.textContent = "";
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

// secondQuestion function
function secondQuestion() {
    // sets current question to 3
    currentQuestion = 3;

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
    // sets current question to 4
    currentQuestion = 4;

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
    // sets current question to 5
    currentQuestion = 5;

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
    // sets current question to 6
    currentQuestion = 6;

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

// startQuiz function
function startQuiz() {
    // sets current question to 2
    currentQuestion = 2;

    // ensures timer is set to 75 seconds
    secondsLeft = 75;
    // displays timer
    setTime();

    // removes start button


    // removes text of quiz-body div
    var quizBody = document.querySelector(".quiz-body");
    quizBody.textContent = "";
   
    // changes text of quiz-header div to first question
    var quizHeader = document.querySelector(".quiz-header");
    quizHeader.textContent = "Commonly used data types DO NOT include:";

    // changes text of buttons
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
   // creates button element
   var generateBtn = document.createElement("button");
   generateBtn.setAttribute("class", "btn");
   // adds text to button element
   generateBtn.textContent = "Start Quiz";
   // adds event listener to button element
   generateBtn.addEventListener("click", function (event) {
       event.preventDefault();
       // calls function to start quiz
       startQuiz();
   });
   // appends button element to quiz-body div
   quizBody.appendChild(generateBtn);

// make header-left clickable to view high scores
var headerLeft = document.querySelector(".header-left");
headerLeft.addEventListener("click", displayScores);