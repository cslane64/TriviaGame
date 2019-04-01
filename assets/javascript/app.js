$(document).ready(function(){

var num = 30;
var intervalId;
var correctGuesses;
var wrongGuesses;
var noGuess;
var startButton = false; // check startbutton variable to determine whether or not to hide or show the button




// Code for the timer

$("#start-game").on("click", start);
  

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decreaseTime, 1000);
  }

function decreaseTime(){
    num--;

    //  Show the number in the #timer div.
    $("#timer").html("<h2> Time Remaining: 00:" + num + "</h2>");
    //  Once number hits zero...
    if (num === 0) {
      console.log("done");
      clearInterval(intervalId);
      //  ...pop up the next question.
      nextQuestion();
     //add 1 to the 'unguessed' variable

    }
}

function nextQuestion() {
    console.log("nextQuestion");
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    
  }
  //start();
});
