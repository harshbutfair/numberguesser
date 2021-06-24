// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}` , 'red' );
    }

    // Check if won
    if(guess === winningNum){
        // Game over Won

        gameOver(true, `${winningNum} is correct, YOU WIN!`)


    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
        // Game over, lost

        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

        } else {
        // Game continues - answer wrong

        // Change border color
        guessInput.style.borderColor = 'red';

        // Clear Input
        guessInput.value = ''; 

        // Tell user it's the wrong number
        setMessage(`Guess is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Change message color
    message.style.color = color;
    // Set message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}