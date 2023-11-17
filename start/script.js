let secretNumber = Math.trunc((Math.random() * 20)) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        displayMessage('⛔️ No Number !');
    }
    else if(guess == secretNumber) {
        displayMessage('💪 Correct Number !');
        document.body.style.backgroundColor = "#6aa84f";
        //document.querySelector('body').style.backgroundColor
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if (guess != secretNumber){
        if(score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('😵‍💫 You lost the game !')
            document.querySelector('.score').textContent = 0;
            document.querySelector('.check').disabled = true;

        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20)) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.body.style.backgroundColor = "#222";
    document.querySelector('.guess').value = '';

});

