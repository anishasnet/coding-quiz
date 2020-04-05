var questions = [
    "Commonly used data types do NOT include:",
    "The condition in an if/else statement is enclosed with _______.",
    "Arrays in JavaScript can be used to store _______.",
    "String values must be enclosed within _______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing conent to the debugger is:",];


var choices = {
    "Commonly used data types do NOT include:": ["strings", "booleans", "alerts", "numberes"],
    "The condition in an if/else statement is enclosed with _______.": ["quotes", "curly brackets", "parenthesis", "squeare brackets"],
    "Arrays in JavaScript can be used to store _______.": ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "String values must be enclosed within _______ when being assigned to variables.": ["commas", "curly brackets", "quotes", "parenthesis"],
    "A very useful tool used during development and debugging for printing conent to the debugger is:": ["JavaScript", "terminal/bash", "for loops", "console.log"],
}
function code() {

    // document.getElementById("start-button").addEventListener("click", function(){
    //     document.body.innerHTML = '';
        
    // });
    
}
function startQuestions() {
    var i;
    for (i = 0; i < questions.length; i++) {
        document.getElementById("question").innerHTML = questions[i]
    }
}
function clearScreen() {
    document.getElementById("title").style.display = 'none';
    document.getElementById("description").style.display = 'none';
    document.getElementById("start-button").style.display = 'none';
    startQuestions();
}
function startQuestions() {
    var i;
    for (i = 0; i < questions.length; i++) {
        document.getElementById("question").innerHTML = questions[i]
        document.getElementById("first-choice").innerHTML = "1. " + choices[questions[i]][0]
        document.getElementById("second-choice").innerHTML = "3. " + choices[questions[i]][1]
        document.getElementById("third-choice").innerHTML = "3. " + choices[questions[i]][2]
        document.getElementById("fourth-choice").innerHTML = "4. " + choices[questions[i]][3]

    }
}

//buttonEl.addEventListener("click", startQuestions());
// document.getElementById("start-button").addEventListener("click", function(){
//     document.body.innerHTML = '';
//     document.getElementsByClassName("question").innerHTML = questions[0];
   

// });