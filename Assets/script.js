var timerCount = 90;

function startQuiz() {

    function quizQuestions() {



    }
    
    function results() {

    }


function startTime() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = 'You have' + timerCount + 'seconds left';

    },1000)
}

startTime();

submitButton

}