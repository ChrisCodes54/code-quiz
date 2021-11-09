console.log("This is a code quiz")
var startbtn = document.querySelector(".startbtn").addEventListener("click", function() {
    countdown();
})


var timer = document.querySelector(".startbtn");
var secondsleft = 5;

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