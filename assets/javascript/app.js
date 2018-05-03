//need to add windows.onload = function() {
// 
// }
// where to add it?
//use objects to store questions and answers

var allQuestions = {
    'question1': {
        question: "peep this is question 1",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question2': {
        question: "this is question 2",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question3':{
        question: "this is question 3",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question4':{
        question: "this is question 4",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question5':{ 
        question: "this is question 5",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question6':{
        question: "this is question 6",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question7':{
        question: "this is question 7",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question8':{
        question: "this is question 8",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question9':{
        question:"this is question 9",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    'question10':{
        question:"this is question 10",
        options: ["1", "2", "3", "4"],
        correct: "a"
    }
}

window.onload = function() {
    $("#stop").on("click", stopwatch.stop);
    $("#start").on("click", stopwatch.start);
}
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
var stopwatch = {
  
    time: 0,

    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time++;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
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
//use for loop to print all questions on!!
// console.log(allQuestions.question1.question);

//function to hook onto html

//function to print out the questions
//function to pring out options(buttons)
//function to check for correctness



//timer running, have x seconds
    //give alert when 10 seconds remaining
    //give alert when time out

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
