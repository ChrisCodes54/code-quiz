console.log("This is a code quiz")
var startbtn = document.querySelector(".startbtn").addEventListener("click", function() {
    countdown();
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


function hidestarttext (){
    var x = document.getElementById("start-text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}






// startbtn.onclick = function () {
//     if (starttext.style.display !== "none") {
//       starttext.style.display = "none";
//     } else {
//       starttext.style.display = "block";
//     }
//   };




// function startquiz () {
//     var hidestarttext = document.getElementById("start-text")
//     if (hidestarttext.style.display === "none") {
//         hidestarttext.style.display = "block";
//     } else {
//         hidestarttext.style.display = "none";
//     }
// }