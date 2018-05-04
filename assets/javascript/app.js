//need to add windows.onload = function() {
// 
// }
// where to add it?
//use objects to store questions and answers
window.onload = function() {
var allQuestions = [
    {
        question: "this is question 1",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "this is question 2",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "this is question 3",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "this is question 4",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    { 
        question: "this is question 5",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "this is question 6",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "this is question 7",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "this is question 8",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question:"this is question 9",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question:"this is question 10",
        options: ["1", "2", "3", "4"],
        correct: "a"
    }
]


//iterates through each object in allQuestions array
// for(var i=0; i<allQuestions.length; i++){
//     // var eachQuestion= allQuestions[i].question;
//     // $("#storeQuestions").append("<p>eachQuestion<p>");
   
//      //console.log(eachQuestion);
// }


    $("#stop").on("click", stopwatch.stop);
    $("#start").on("click", stopwatch.start);

  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;


  //timer running, have x seconds
    //give alert when 10 seconds remaining
    //give alert when time out
  //stopwatch object
var stopwatch = {

    time: 60,

    start: function() {
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },

    stop: function() {
  
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
      stopwatch.time--;
 
      var converted = stopwatch.timeConverter(stopwatch.time);
  
      $(".display").text(converted);
    },

    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    }
  };





//   var i = 0;
// //div that holds all the questions
//   var quizQuestions = $("<div class='questionaire'>");

//   console.log(" 1quizQuestions: " + quizQuestions);
// //element in above dive that will print the questions
//   var theQuestions = $("<p>").text(JSON.stringify(allQuestions[i].question));

//   console.log(" 2theQuestions: " + theQuestions);
//   quizQuestions.append(theQuestions);

//   console.log(" 3quizQuestions" + quizQuestions);



//use for loop to print all questions on!!
// console.log(allQuestions.question1.question);

//function to hook onto html

//function to print out the questions
//function to pring out options(buttons)
//function to check for correctness


//select an option 
    //have option to change mind
    //button change color when chosen
    //change color when actively clicking
    //change color when hovering
//decrement "you have x questions remaning" after selecting an answer for each question
//submit button and timer out do same thing (use ||)
    //when complete
    //compare chosen answer to correct answer
    //increment correct if correct
    //increment wrong if wrong
    //calculate score
    //send message with score
}