console.log("This is a code quiz");
var startbtn = document.querySelector(".startbtn");
var startDiv = document.getElementById("start");

startbtn.addEventListener("click", function () {
  countdown();
  startDiv.setAttribute("class", "hide");

  loadquestions();
});

var currentQuestionIndex = 0;
var timer = document.querySelector(".timernav");
var secondsleft = 60;
var shownextbtn = document.getElementsByClassName("nextbtn");
var quizq = document.getElementById("questions");
var correct = 0;
var feedbackDiv = document.getElementById("feedback");
var timerinterval;
var finalScore;
var endQuizDiv = document.getElementById("endQuiz");


var myquestions = [
    {
    question:"Who in the premier league has gotten the entire season unbeaten?",
    options: ["Manchester City", "Manchester United", "Chelsea", "Arsenal"],
    correctAnswer: "Arsenal",
    },

    {
    question: "Who has won the most World Cups?",
    options: ["France", "Brazil", "Germany", "Italy"],
    correctAnswer: "Brazil",
    },

    {
    question: "Who has played for Barcelona and Real Madrid?",
    options: ["Messi", "Ronaldo", "Figo", "Pique"],
    correctAnswer: "Figo",
    },

    {
    question: "What team won the 2018 World Cup?",
    options: ["Brazil", "Germany", "France", "Italy"],
    correctAnswer: "France",
    },

    {
    question: "What year did Arsene Wenger become manager of Arsenal?",
    options: ["1994", "1996", "1999", "2001"],
    correctAnswer: "1996",
    },
    {
    question: "What season did Arsenal achieve their invincible status?",
    options: ["2001/2002", "2003/2004", "2004/2005", "1999/2000"],
    correctAnswer: "2003/2004",
    },
    {
    question: "Which is the bigger club?",
    options: ["Manchester City", "Arsenal", "Brighton", "Fulham"],
    correctAnswer: "Arsenal",
    },

];
//myquestions[0].question //accesing the first object of my questions, and then grabbing the question

function loadquestions() {
    quizq.removeAttribute("class");

  var currentQuestion = myquestions[currentQuestionIndex];
  var questionText = document.getElementById("questiontext")
  questionText.textContent = currentQuestion.question;
  var userOptions = document.getElementById("useroptions");

  userOptions.innerHTML = "";
  
  // going to the current question and getting the options
  currentQuestion.options.forEach(function(option, i){

    var optionButton = document.createElement("button");
    optionButton.setAttribute("value", option);
    optionButton.setAttribute("class", "optionBtn")

    optionButton.textContent = i + 1 + ". " + option;

    optionButton.onclick = handleClick;

    userOptions.append(optionButton)
  })

}

function handleClick(){

    if(this.value !== myquestions[currentQuestionIndex].correctAnswer){
        secondsleft -= 10;

        if(secondsleft < 0){
            secondsleft = 0;
            
        }

        quizq.setAttribute("class", "hide")

        timer.textContent = secondsleft;

        feedbackDiv.textContent = "Wrong!";
    } else {
        feedbackDiv.textContent = "Correct!";
    }

    feedbackDiv.setAttribute("class", "feedback")
    setTimeout(function(){
        feedbackDiv.setAttribute("class", "feedback hide")
        
    }, 3000);

    currentQuestionIndex++;

    if(currentQuestionIndex === myquestions.length){
        endQuiz();
    } else {
        loadquestions();
    }
    correct++;

    console.log("Correct",correct);
}


function countdown() {
    timerinterval = setInterval(function () {
    secondsleft--;
    timer.textContent = "Timer: " + secondsleft;

    if (secondsleft === 0) {
      clearInterval(timerinterval);
      
    }
  }, 1000);
}

function endQuiz(){

    clearInterval(timerinterval)
    endQuizDiv.removeAttribute("class");

    var finalScoreSpan = document.getElementById('finalScore');

    var userScore = correct/myquestions.length;
    var twoDecimals = userScore.toFixed(2);
    finalScore = twoDecimals.split("0.")[1];
    console.log(finalScore)

    finalScoreSpan.textContent = finalScore + "%";

}

var submitBtn = document.getElementById('submit');
submitBtn.onclick = saveScore;

function saveScore(){

    var initialsInput = document.getElementById("initials");
    var initials = initialsInput.value;

    if(initials !== ""){
        var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    }

    var newScore = {
        score: finalScore,
        initials: initials
    }

    highScores.push(newScore)
    localStorage.setItem("highscores", JSON.stringify(highScores));

    window.location.href = "highscores.html";
}


