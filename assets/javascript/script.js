let questions = [
    "Commonly used data types do NOT include:",
    "The condition in an if/else statement is enclosed with _______.",
    "Arrays in JavaScript can be used to store _______.",
    "String values must be enclosed within _______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing conent to the debugger is:",
];


let choices = {
    "Commonly used data types do NOT include:": ["alerts", "booleans", "strings", "numbers"],
    "The condition in an if/else statement is enclosed with _______.": ["quotes", "curly brackets", "parenthesis", "squeare brackets"],
    "Arrays in JavaScript can be used to store _______.": ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "String values must be enclosed within _______ when being assigned to variables.": ["commas", "curly brackets", "quotes", "parenthesis"],
    "A very useful tool used during development and debugging for printing conent to the debugger is:": ["JavaScript", "console.log", "for loops", "terminal/bash"],
};

let answers = {
    "Commonly used data types do NOT include:": "first-choice",
    "The condition in an if/else statement is enclosed with _______.": "third-choice",
    "Arrays in JavaScript can be used to store _______.": "fourth-choice",
    "String values must be enclosed within _______ when being assigned to variables.": "third-choice",
    "A very useful tool used during development and debugging for printing conent to the debugger is:": "second-choice",
}
var score;
// Not showing the purple option buttons on load.
function code() {
    document.getElementById("options").style.display = 'none';
    document.getElementById("answer-check").style.display = 'none';
    document.getElementById("high-score").style.display = 'none';

}
var seconds = 75;
function startTimer() {
    interval = setInterval(function() {
        document.getElementById("timer").innerHTML = seconds--
        if (seconds == 0) {
            document.getElementById("timer").innerHTML = "0";
            score = 0;
            switchToHighScoreSubmition()
            return;
            console.log("The return did not occur")
           
        }
    }, 1000)
}
// Clears the screen when the start button is pressed. Calls the startQuestions() function to begin printing the questions.
function clearScreen() {
    startTimer()
    document.getElementById("title").style.display = 'none';
    document.getElementById("description").style.display = 'none';
    document.getElementById("start-button").style.display = 'none';
    document.getElementById("first-choice").addEventListener("click", answerClickEventHandler);
    document.getElementById("second-choice").addEventListener("click", answerClickEventHandler);
    document.getElementById("third-choice").addEventListener("click", answerClickEventHandler);
    document.getElementById("fourth-choice").addEventListener("click", answerClickEventHandler);
    setupQuestion();
}

let i = 0;
let wrongAnswers = 0;
function checkAnswer(elementId) {
    document.getElementById("answer-check").style.display = "block"
    if (elementId == answers[questions[i]]) {
        document.getElementById("check").innerHTML = "Correct!";
    } else {
        document.getElementById("check").innerHTML = "Wrong.";
        seconds -= 10;
    }
}

// Prints the question and options.
function setupQuestion() {
    document.getElementById("options").style.display = 'block';
    document.getElementById("question").innerHTML = questions[i]
    document.getElementById("first-choice").innerHTML = "1. " + choices[questions[i]][0];
    document.getElementById("second-choice").innerHTML = "2. " + choices[questions[i]][1];
    document.getElementById("third-choice").innerHTML = "3. " + choices[questions[i]][2];
    document.getElementById("fourth-choice").innerHTML = "4. " + choices[questions[i]][3];
}

function switchToHighScoreSubmition() {
    document.getElementById("question").style.display = 'none';
    document.getElementById("options").style.display = 'none';
    document.getElementById("answer-check").style.display = 'none';
    document.getElementById("timer").style.display = 'none';
    document.getElementById("high-score").style.display = 'block';
    if (score == 0) {
        document.getElementById("score").innerHTML = "Final Score: 0";
    }
}

const answerClickEventHandler = (event) => {

    if (i >= 4) {
        score = document.getElementById("timer").textContent;
        console.log(wrongAnswers)
        score = document.getElementById("timer").textContent;
        document.getElementById("score").innerHTML = "Final Score: " + score;
        document.getElementById("timer").style.display = 'none';
        switchToHighScoreSubmition();
        return;
    }
    checkAnswer(event.currentTarget.id);
    i++;
    setupQuestion();
}

var initialsBox = document.querySelector("#initials-box");
var highScores = {};
var submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", gettingHighScoreAndInitials);

function gettingHighScoreAndInitials(event) {
    event.preventDefault()
    var scoreSentence = document.querySelector("#score")
    console.log("Storing initials and score")
    localStorage.setItem(initialsBox.value, score)
    console.log("Stored initials and score")
    highScores[initialsBox.value] = score;
    console.log(highScores);
    return;
}
function highscoreFunction() {
    console.log("hi there");
    let j;
    let highScoresSorted = {};
    let sortable = [];
    function getDataFromLocalStorage() {
        ol = document.getElementById('list')
        for (j = 0; j < localStorage.length; j++) {
            // highScoresSorted[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
            let li = document.createElement('li')
            ol.appendChild(li);
            li.textContent = localStorage.key(j) + " " + localStorage[localStorage.key(j)]
            li.className = "highscore";

        }
    }
    getDataFromLocalStorage()
    console.log(sortable);
    // document.getElementById("test").innerHTML = localStorage['NS']
}

function clearData() {
    localStorage.clear()
    document.location = "index.html"
}