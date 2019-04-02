$(document).ready(function(){

// Questions object
var questions = {
  "question-0": {
    questionText: "What is the name of the stadium that the Red Sox play in?",
    A: "MetLife Stadium",
    B: "Fenway Park",
    C: "Boston Metropolitan Stadium",
    D: "Boston Garden",
    answer: "B Fenway Park",
    image: "assets/images/fenway.jpg",
  },
  "question-1": {
    questionText: "The Red Sox won the World Series in 2004. How long had it been since they had last won it",
    A: "27 years",
    B: "68 years",
    C: "79 years",
    D: "86 years",
    answer: "D 86 Years",
    image: "assets/images/2004.gif"
  }

}

var num = 20;
var intervalId;
//var questionInterval = setInterval(decreaseTime, 1000);
var correctGuesses;
var wrongGuesses;
var noGuess;
var startButton = false; // check startbutton variable to determine whether or not to hide or show the button
var questionNumber = 0;




// Code for the timer

$("#start-game").on("click", start);
  

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decreaseTime, 1000);
    nextQuestion();
  }

function decreaseTime(){
    num--;

    //  Show the number in the #timer div.
    $("#timer").html("<h2> Time Remaining: 00:" + num + "</h2>");
    //  Once number hits zero...
    if (num === 0) {
      console.log("done");
      clearInterval(intervalId);
      showAnswer();
      noGuess++;
      
    }
}

function nextQuestion() {
    console.log("nextQuestion");
    console.log(questions["question-1"]);
    $("#ask").empty();
    $("#A").empty();
    $("#B").empty();
    $("#C").empty();
    $("#D").empty();
    $("#ask").append(questions["question-" + questionNumber].questionText);
    $("#A").append(questions["question-" + questionNumber].A);
    $("#B").append(questions["question-" + questionNumber].B);
    $("#C").append(questions["question-" + questionNumber].C);
    $("#D").append(questions["question-" + questionNumber].D);
  }

  function answerDelay() {
    
    if (questionNumber < 9) {
      console.log(questionNumber);
      nextQuestion();
      //decreaseTime();
      num = 20;
      start();
    }

  }

  function showAnswer() {
    console.log(showAnswer);
    $("#ask").empty();
    $("#A").empty();
    $("#B").empty();
    $("#C").empty();
    $("#D").empty();
    // show the answer
    var answerImage = $("<img>")
    $("#ask").append(questions["question-" + questionNumber].answer);
    answerImage.attr("src", questions["question-" + questionNumber].image);
    $("#ask").append(answerImage);
    
    questionNumber ++;
    clearTimeout(answerID);
    var answerID = setTimeout( function() {answerDelay()}, 7000);
    //answerDelay();
    
  }
  //start();
});
