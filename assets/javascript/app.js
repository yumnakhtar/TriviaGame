//need to add windows.onload = function() {
// 
// }
// where to add it?

var allQuestions = [
    {
        question: "Who said this? “I saw wedding crashers accidentally. I bought a ticket for “Grizzly Man” and went into the wrong theatre. After an hour, I figured I was in the wrong theatre, but I kept waiting. Cuz that’s the thing about bear attacks… they come when you least expect it.”",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "What item of clothing does Michael insist on having dry cleaned?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "Where does Ryan work after he gets fired from corporate?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "What is the fake persona that Jim uses to author the book that Dwight uses to plan Andy's garden party in the season 8 episode, 'Garden Party'?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "In the episode, 'Diwali', who attempts to kiss Pam?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "When did Ryan and Kelly hook up for the first time?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "What did Ryan leave in the toaster oven that caused the fire in the episode, 'The Fire'?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "What nickname does Pam not come up with for Dwight's bed and breakfast?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "What does Jim NOT do to pay Dwight back for saving him from Roy",
        options: ["1", "2", "3", "4"],
        correct: "a"
    },
    {
        question: "How soon after Jim and Pam started dating did Jim buy an engagement ring?",
        options: ["1", "2", "3", "4"],
        correct: "a"
    }
]



//use objects to store questions and answers
window.onload = function () {
    console.log("hello")


    for (var i = 0; i < allQuestions.length; i++) {
        console.log("testing " + i);
        var print = "testing " + i;
        var QUESTION = ("Quesiton " + [i+1] + ": " + allQuestions[i].question);
        console.log(QUESTION);

        var hook = $("#storeQuestions");
        var newDiv = $("<div class='eachQuestion'>");
        newDiv.text(QUESTION);
        hook.append(newDiv)
    }

    $("#stop").on("click", stopwatch.stop);
    $("#start").on("click", stopwatch.start);

}
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

//stopwatch object
var stopwatch = {
    time: 60,
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },
    stop: function () {

        clearInterval(intervalId);
        clockRunning = false;
    },

    count: function () {
        stopwatch.time--;

        var converted = stopwatch.timeConverter(stopwatch.time);
        //   console.log(converted);

        $(".display").text(converted);
    },
    timeConverter: function (t) {
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