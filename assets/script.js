var secondsLeft = 60;
var time = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionTitle = document.querySelector("#question-title");
// var options= document.querySelector("#options");
var choices = document.querySelector("#choices");
var correct = document.querySelector("#answer");

// Variable for questions array
var questions = [
  {
    title: "What is header element?",
    options: {1: "h1",
      2: "p",},
    answer: "h1",
  },
  {
    title: "What is a string?",
    options: {1: "Datatype",
      2: "a long rope  made of cotton",},
    answer: "Datatype",
  },
  {
    title: "What is header element?",
    options: {1: "h1",
      2: "p",},
    answer: "h1",
  },
  {
    title: "What is a string?",
    options: {1: "Datatype",
      2: "a long rope  made of cotton",},
    answer: "Datatype",
  },
];

var currentQuestion = 0;
var questIndex = questions[currentQuestion];
var optSelect= questions[currentQuestion].options;
var corrAns= questions[currentQuestion].answer;

// Timer
function startTimer() {
  time.textContent = secondsLeft + " seconds left";
  var timer = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// Start Button
function startGame() {
    startTimer();
    getQuestion();
}

function getQuestion() {
    choices.innerHTML="";
    questionTitle.textContent = questIndex.title;
    choices.textContent = questIndex.options;
    //create a button, display the choice on that button, append that button to choices var
    var choicesBtn = document.createElement("button");
    choicesBtn.textContent = optSelect;
    choices.appendChild(choicesBtn);
}
console.log(optSelect);

function checkQuestion(event) {
    var buttonEl=event.target;
    console.log(buttonEl);
    currentQuestion++;
    getQuestion();
    // if (correct.matches(questIndex.answer)) {
    //     currentQuestion++;
    //   getQuestion();
    // } else {
    //   secondsLeft-5;
    //   currentQuestion++;
    //   getQuestion();
    // }

}

// EventListener so timer and quiz starts with button click
choices.addEventListener("click", checkQuestion);
startBtn.addEventListener("click", startGame);

// Wrong answer should have a button that holds a data-attrbute to say is the answer is incorrect
// if statement for subtracting from timer for incorrect answers
// Correct answer should have a button that holds a data-attrbute to say is the answer is correct
// if correct -> next question (index ++)

// When all questions are answered or when timer runs out, display game over
// Gamer over coditions Store initials and score in local storage
