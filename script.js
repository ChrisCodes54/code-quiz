console.log("This is a code quiz")
var startbtn = document.querySelector(".startbtn")

startbtn.addEventListener("click", function() {
    countdown();
    hidestarttext();
    loadquestions();

})
var timer = document.querySelector(".timernav");
var secondsleft = 5;
var starttext = document.getElementById("start-text");
var shownextbtn = document.getElementsByClassName ("nextbtn");
var quizq = document.getElementById("questions")



//myquestions[0].question //accesing the first object of my questions, and then grabbing the question

function loadquestions () {
    var firstq = myquestions[0].question;
    console.log(firstq);
    var firsto = myquestions[0].options;
    console.log(firsto);
    var firsta = myquestions[0].correctAnswer;
    console.log(firsta);

    if(startbtn.style.display === "none"){
        startbtn.style.display = "block";
    } else {
    startbtn.style.display = "none";
    }

}






var myquestions = [ 
    {
        question: "Who in the premier league has gotten the entire season unbeaten?",
        options: ['Manchester City', 'Manchester United', 'Chelsea', 'Arsenal'],
        correctAnswer: 'Arsenal'
    },

    {
        question: "Who has won the most World Cups?",
        options: ['France','Brazil','Germany','Italy'],
        correctAnswer: 'Arsenal'
    },

    {
        question: "Who has played for Barcelona and Real Madrid?",
        options: ['Messi','Ronaldo','Figo','Pique'],
        correctAnswer: 'Figo'

    }
]
function countdown() {
var timerinterval = setInterval(function() {
    secondsleft--;
    timer.textContent = "Timer: " + secondsleft;
    
    if(secondsleft === 0) {
        clearInterval(timerinterval);
        
    }
    
}, 1000);
}


function hidestarttext () {
    var hidestarttext = document.getElementById("start-text")
    if (hidestarttext.style.display === "none") {
        hidestarttext.style.display = "block";
    } else {
        hidestarttext.style.display = "none";
    }
}



// function buildquiz () {
    
// }

// function shownextbtn () {
//     document.getElementsByClassName("nextbtn").style.display = 'block';
//     e.preventDefault();
// }