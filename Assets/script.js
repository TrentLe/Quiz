// Global variables
var timerCount = 15;
var startButton = document.getElementById('begin')
var timerElement = document.getElementById('time')

// Quiz container
function startQuiz() {
    
// Function holding the quiz questions
    function quizQuestions() {
        var myQuestions = [

        {
            question : 'Who is the first Hokage ?',
            answers : {
                a: 'Jiraya',
                b: 'Hashirama',
                c: 'Sasuke'
            },
            rightAnswer : 'b'
        },

        {
            question : 'What is the sqrt of pi ?',
            answers : {
                a: '1.72',
                b: 'huh ?',
                c: '76'
            },
            rightAnswer : 'a'
        }
        ]


    }
// Function showing the questions to the user     
    function userSight(){

    }

// Functions to show the results of the quiz
    function results() {

    }


function startTime() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = 'You have ' + timerCount + ' seconds left';

    },1000)
}
quizQuestions();
startTime();



}

// Button to start the quiz
startButton.onclick = function(){
    startQuiz();
}