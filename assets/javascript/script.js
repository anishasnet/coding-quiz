var questions = [
    "Commonly used data types do NOT include:",
    "The condition in an if/else statement is enclosed with _______.",
    "Arrays in JavaScript can be used to store _______.",
    "String values must be enclosed within _______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing conent to the debugger is:",
];


var choices = {
    "Commonly used data types do NOT include:": ["strings", "booleans", "alerts", "numbers"],
    "The condition in an if/else statement is enclosed with _______.": ["quotes", "curly brackets", "parenthesis", "squeare brackets"],
    "Arrays in JavaScript can be used to store _______.": ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "String values must be enclosed within _______ when being assigned to variables.": ["commas", "curly brackets", "quotes", "parenthesis"],
    "A very useful tool used during development and debugging for printing conent to the debugger is:": ["JavaScript", "terminal/bash", "for loops", "console.log"],
};

function code() {
    document.getElementById("options").style.display = 'none';
};


function clearScreen() {
    document.getElementById("title").style.display = 'none';
    document.getElementById("description").style.display = 'none';
    document.getElementById("start-button").style.display = 'none';
    startQuestions();
}

function startQuestions() {

    document.getElementById("options").style.display = 'block';
    document.getElementById("question").innerHTML = questions[0]
    document.getElementById("first-choice").innerHTML = "1. " + choices[questions[0]][0]
    document.getElementById("second-choice").innerHTML = "2. " + choices[questions[0]][1]
    document.getElementById("third-choice").innerHTML = "3. " + choices[questions[0]][2]
    document.getElementById("fourth-choice").innerHTML = "4. " + choices[questions[0]][3]


}