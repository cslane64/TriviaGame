$(document).ready(function(){

// Questions object
var questions = {
  "question-0": {
    questionText: "What is the name of the stadium that the Red Sox play in?",
    A: "MetLife Stadium",
    B: "Fenway Park",
    C: "Boston Metropolitan Stadium",
    D: "Boston Garden",
    ans: "B",
    answer: "B Fenway Park",
    image: "assets/images/fenway.gif",
  },
  "question-1": {
    questionText: "The Red Sox won the World Series in 2004. How long had it been since they had last won it?",
    A: "27 years",
    B: "68 years",
    C: "79 years",
    D: "86 years",
    ans: "D",
    answer: "D 86 Years",
    image: "assets/images/2004.gif",
  },
  "question-2": {
    questionText: "How many Super Bowls have the New England Patriots won?",
    A: "3",
    B: "5",
    C: "6",
    D: "8",
    ans: "C",
    answer: "C 6 Super Bowl Championships",
    image: "assets/images/patriots.jpg",
  },
  "question-3": {
    questionText: "What Hall of Fame defenseman logged the most career games in Bruins history?",
    A: "Ray Bourque",
    B: "Brad Park",
    C: "Phil Esposito",
    D: "Bobby Orr",
    ans: "A",
    answer: "A Ray Bourque",
    image: "assets/images/bourque.gif",
  },
  "question-4": {
    questionText: "What Boston Celtic holds the distinction of hitting the most 3-point baskets in one season?",
    A: "Larry Bird",
    B: "Antoine Walker",
    C: "Danny Ainge",
    D: "Ray Allen",
    ans: "B",
    answer: "B Antoine Walker",
    image: "assets/images/antoine.gif",
  },
  "question-5": {
    questionText: "What Red Sox pitcher recorded the most strike outs in one season?",
    A: "Chris Sale",
    B: "Pedro Martinez",
    C: "Roger Clemmons",
    D: "Curt Schilling",
    ans: "B",
    answer: "B Pedro Martinez",
    image: "assets/images/pedro.gif",
  },
  "question-6": {
    questionText: "Who holds the New England Patriots record for most receiving yards in a game?",
    A: "Wes Welker",
    B: "Randy Moss",
    C: "Julian Edelman",
    D: "Rob Gronkowski",
    ans: "A",
    answer: "A Wes Welker",
    image: "assets/images/wes.gif",
  },
  "question-7": {
    questionText: "Who was the last Red Sox player to win AL Rookie of the Year?",
    A: "Mookie Betts",
    B: "Ted Williams",
    C: "Dustin Pedroia",
    D: "Jim Rice",
    ans: "C",
    answer: "C Dustin Pedroia",
    image: "assets/images/dustin.gif",
  },
  "question-8": {
    questionText: "When was the last time the Bruins won the Stanley Cup?",
    A: "2007",
    B: "2011",
    C: "2014",
    D: "2001",
    ans: "B",
    answer: "B 2011",
    image: "assets/images/bruins.gif",
  },
  "question-9": {
    questionText: "What song is played at Fenway Park in the middle of the 8th inning?",
    A: "Take me out to the Ballgame",
    B: "Crazy Train",
    C: "Living on a Prayer",
    D: "Sweet Caroline",
    ans: "D",
    answer: "D Sweet Caroline",
    image: "assets/images/citgo.gif",
  }


}

var num = 20;
var intervalId;
//var questionInterval = setInterval(decreaseTime, 1000);
var correctGuesses = 0;
var wrongGuesses = 0;
var noGuess = 0;
var questionNumber =0;




// Code for the timer

$("#start-game").on("click", start);
  


function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decreaseTime, 1000);
    
    $("#start-game").hide();
    $("#timer").show();
    nextQuestion();
  }

function decreaseTime(){
    num--;

    //  Show the number in the #timer div.
    $("#timer").html("<h2> Time Remaining: 00:" + num + "</h2>");
    //  Once number hits zero...
    if (num === 0) {
      //console.log("done");
      clearInterval(intervalId);
      showAnswer();
      noGuess++;
      
    }
}

/*function resetGame() {
  
  correctGuesses = 0;
  wrongGuesses = 0;
  noGuess = 0;
  questionNumber = 0;
  //clearInterval(intervalId);
  intervalId = setInterval(decreaseTime, 1000);
  nextQuestion();
}*/

function nextQuestion() {
    //console.log("nextQuestion");
    //console.log(questions["question-1"]);
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
    
    if (questionNumber <= 9) {
      nextQuestion();
      num = 20;
      start();
    } else {
      userStats();
    }

  }

  function showAnswer() {
    $("#ask").empty();
    $("#A").empty();
    $("#B").empty();
    $("#C").empty();
    $("#D").empty();
    // show the answer
    var answerImage = $("<img>");
    $("#ask").append(questions["question-" + questionNumber].answer);
    answerImage.attr("src", questions["question-" + questionNumber].image);
    $("#ask").append(answerImage);
    
    questionNumber ++;
    clearTimeout(answerID);
    var answerID = setTimeout( function() {answerDelay()}, 5000);
  }

  $(".guess").on("click", function() {
    userAnswer = $(this).attr("data-answer");
    $("#timer").hide();
    if (userAnswer === questions["question-" + questionNumber].ans) {
      showAnswer();
      correctGuesses++;
      console.log(correctGuesses);
    } else {
      showAnswer();
      wrongGuesses++;
      console.log(wrongGuesses);
    }

    })

    function userStats() {
      $("#ask").empty();
      $("#A").empty();
      $("#B").empty();
      $("#C").empty();
      $("#D").empty();
      $("#timer").hide();
      //clearTimeout(answerID);
      clearInterval(intervalId);
      $("#ask").append("<h3>Here are your stats</h3>");
      $("#A").append("<h4>Correct Guesses: " + correctGuesses);
      $("#B").append("<h4>Incorrect Guesses: " + wrongGuesses);
      $("#D").append("<h4>No guess attempted: " + noGuess);

      $("#start-game").text("Play Again");
      $("#start-game").show();
      //$("#start-game").on("click", resetGame); 
    };

  
});
