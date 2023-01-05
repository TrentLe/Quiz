var timerCount = 90;

 

function startTime() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        alert('You have' + timerCount + 'seconds left');

    },1000)
}

startTime();