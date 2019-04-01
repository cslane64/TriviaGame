var num = 30;
var IntervalID;
var correctGuesses;
var wrongGuesses;
var noGuess;

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decreaseTime(){
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...pop up the next question.
      nextQuestion();
     //add 1 to the 'unguessed' variable
}

function nextQuestion() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
  start();
}
