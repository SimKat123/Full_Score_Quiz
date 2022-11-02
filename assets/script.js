// Start Button
function startGame {
    // click button, hides all beginning text and shows questions
}
// Timer stuff with EventListener so timer starts with button click

// Timer
var seconds=50;
var timer;
function timer() {
    time.textContent = secondsLeft
    timer = setInterval (function () {
        secondsLeft--;
        timer.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval (timer);
        }
    })
}

// Function that renders a question

// Variable for questions array
var questions = [
    {
        question: "What is header element?",
        choices: ["<h1>", "<p>"],
        answer: "<h1>",
    },
    {
        question: "What is a string?",
        choices: ["Datatype", "a long rope  made of cotton"]
        answer: "Datatype",
    },

];
// var quizQuestion = {
//     question: "What is a string?",
//     answer: [{ text: "Datatype", isCorrect : true}, { text:"a long rope  made of cotton", is }]
// }


// Shows is selected answer was correct or not
    // Use event.target for the buttons to: (get question object at index 0 and index++ for next question) (questions[0].
    // Wrong answer should have a button that holds a data-attrbute to say is the answer is incorrect
        // if statement for subtracting from timer for incorrect answers
    // Correct answer should have a button that holds a data-attrbute to say is the answer is correct
        // if correct -> next question (index ++)

// Answering question triggers another question

// When all questions are answered or when timer runs out, display game over
    // Gamer over coditions
    //  Store initials and score in local storage.