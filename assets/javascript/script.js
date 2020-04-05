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
// Not showing the purple option buttons on load.
function code() {
    document.getElementById("options").style.display = 'none';
    document.getElementById("answer-check").style.display = 'none';
};

// Clears the screen when the start button is pressed. Calls the startQuestions() function to begin printing the questions.
function clearScreen() {
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

function checkAnswer(elementId) {
    document.getElementById("answer-check").style.display = "block"
    if (elementId == answers[questions[i]]) {
        document.getElementById("check").innerHTML = "Correct!"
    } else {
        document.getElementById("check").innerHTML = "Wrong."
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

const answerClickEventHandler = (event) => {
    console.log(i, event.currentTarget.id);
    checkAnswer(event.currentTarget.id);
    if (i >= 4) {
        return;
    }
    i++;
    setupQuestion();
}