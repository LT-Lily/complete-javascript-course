'use strict';


// REMOVE WHEN COMPLETE!!!!!! display num for testing game logic or when player guesses correctly
// document.querySelector('.number').textContent = secretNumber;

// ELEMENTS
const checkBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// trunc to get rid of decimal.
// 1 - 19. .9999 truncated. solution: +1
const message = document.querySelector('.message');
let hs = document.querySelector(".highscore");
// state variable
let score = 20;
let highScore = 0;

const generateNum = () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // Game logic:
  // First see if number exist
  // Check Number
  if (!guess) {
    // Doesn't exist
    message.textContent = "You didn't enter anything yet..";
  } else if (guess === secretNumber) {
    //CORRECT
    message.textContent = 'Correct!!!';
    document.querySelector('.number').textContent = secretNumber;
    // Highscore
    if(score > highScore){
      highScore = score;
      hs.textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    // INCORRECT
    message.textContent = 'Too low!';
    calcScore();
    // scoreContent = score;
  } else if (guess > secretNumber) {
    message.textContent = 'Too High!';
    calcScore();
    // scoreContent = score;
  }
};

const calcScore = () => {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    message.textContent = 'GAME OVER';
    document.querySelector('.score').textContent = 0;
  }
};

// Score
// Max score is 20
// -1 for each incorrect guess
// 2 methods:
// Method 1: Get max score from DOM, -1, display
// Method 2: create variable score

// When score reaches 0 - LOSE

// Styling
// Correct num --> change background colour, widen correct num
checkBtn.addEventListener('click', generateNum);
// function is a value. we can pass a function as another argument.


// RESET THE GAME WHEN "AGAIN" btn is clicked
// get the button
const replay = document.querySelector(".again");
const playAgain = () => {
  // new secretNumber for each game -> let
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // reset score to 20
  score = 20; // use as reference.
  document.querySelector('.score').textContent = score;
  // initialize message
  message.textContent = "Start guessing...";
  // rest BG color
  document.querySelector('body').style.backgroundColor = "#222";
  // make input blank
  document.querySelector('.guess').value = " ";
  // hide the secret number
  document.querySelector('.number').textContent = "?"
  // restore original width of number
  document.querySelector('.number').style.width = '15rem';

}
replay.addEventListener("click", playAgain);

// HIGHSCORE


// JS ENGINE is responsible for calling the callback function when the "click" event is fired.

// input is a string
// convert to int to compare to random integer using Number()
