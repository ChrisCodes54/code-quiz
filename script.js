console.log("This is a code quiz")
var startbtn = document.querySelector(".startbtn").addEventListener("click", function() {
    countdown();
    hidestarttext();

})


var timer = document.querySelector(".timernav");
var secondsleft = 5;
var starttext = document.getElementById("start-text")

function showtime () {

}


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