let user_Name = localStorage.getItem('name');
let final_score;

let questionArr = [
    {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: [
            "<javascript>",
            "<scripting>",
            "<js>",
            "<script>"
        ]
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        answer: "The <body> section",
        options: [
            "The <head> section",
            "Both the <head> section and the <body> section",
            "The <body> section",
            "The <footer> section"
        ]
    },
    {
        id: 3,
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer: "<script src ='xxx.js'>",
        options: [
            "<script href ='xxx.js'>",
            "<script name ='xxx.js'>",
            "<script src ='xxx.js'>",
            "<script link ='xxx.js'>"
        ]
    },
    {
        id: 4,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
            "function => myFunction()"
        ]
    },
    {
        id: 5,
        question: "How do you call a function named 'myFunction'??",
        answer: "myFunction()",
        options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "myFunction"
        ]
    },
    {
        id: 6,
        question: "How to write an IF statement in JavaScript?",
        answer: "if(i == 5)",
        options: [
            "if i == 5 then",
            "if i = 5 then",
            "if i = 5",
            "if(i == 5)"
        ]
    },
    {
        id: 7,
        question: "How does a WHILE loop start?",
        answer: "while(i <= 10)",
        options: [
            "While(i <= 10; i++)",
            "while i = 1 to 10",
            "while(i <= 10)",
            "while i < 10 && i = 10"
        ]
    },    
    {
        id: 8,
        question: "How does a FOR loop start?",
        answer: "for(let i = 0; i <= 5; i++)",
        options: [
            "for i = 1 to 5",
            "for(var i <= 5; i++)",
            "for(let i = 0; i <= 5; i++)",
            "for(const i = 0; i <= 5)"
        ]
    },    
    {
        id: 9,
        question: "How can you add a comment in a JavaScript?",
        answer: "//This is a comment",
        options: [
            "<!-- This is a comment -->",
            "'This is a comment",
            "//This is a comment",
            "||This is a comment"
        ]
    },    
    {
        id: 10,
        question: "Which HTML text tag is usually used once in a project?",
        answer: "<h1>",
        options: [
            "<h1>",
            "<h3>",
            "<p>",
            "<img>"
        ]
    }
]






let currentIndex = 0;
let score = 0;

let sec = 1000;
let time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "seconds left";
    sec--;
    if (sec == 0) {
        clearInterval(time);
        document.getElementById('timer').innerHTML = "You are out of time!";
    }
}

function displayCurrentQuestion() {
    $("#question-text").text(questionArr[currentIndex].question);
    $("#qestOne").text(questionArr[currentIndex].options[0]);
    $("#qestTwo").text(questionArr[currentIndex].options[1]);
    $("#qestThree").text(questionArr[currentIndex].options[2]);
    $("#qestFour").text(questionArr[currentIndex].options[3]);
}

function buttonClick (event) {

    

   if(currentIndex === 9 || time === 0){

    $("#message").text( user_Name + ' Your score is ' + score + " out of 10");
    timer.pause();

    
   } else {

    let userInput = event.currentTarget.textContent;

    let correctAnswer = questionArr[currentIndex].answer;

    
  
    if(userInput === correctAnswer) {
     
        $("#message").text("Correct")
        score ++;
        
    } else {
    
        $("#message").text("Wrong")
        sec = sec - 100;

    }
    currentIndex ++;
    
        
   }
   displayCurrentQuestion();
   

}

// document.querySelector("#question-text").textContent = "Hello";


$("#qestOne").on("click", buttonClick)
$("#qestTwo").on("click", buttonClick)
$("#qestThree").on("click", buttonClick)
$("#qestFour").on("click", buttonClick)

displayCurrentQuestion()

final_score = score;

localStorage.setItem('finalScore', JSON.stringify(final_score));

