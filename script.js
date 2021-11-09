console.log("This is a code quiz")
var startbtn = document.querySelector(".startbtn").addEventListener("click", function() {
    countdown();
    hidestarttext();

})
var timer = document.querySelector(".timernav");
var secondsleft = 5;
var starttext = document.getElementById("start-text");
var shownextbtn = document.getElementsByClassName ("nextbtn");
var showquiz = document.getElementsByClassName ("quiz")

//myquestions[0].question //accesing the first object of my questions, and then grabbing the question

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

function showquiz () {
    var 
}

// function shownextbtn () {
//     document.getElementsByClassName("nextbtn").style.display = 'block';
//     e.preventDefault();
// }