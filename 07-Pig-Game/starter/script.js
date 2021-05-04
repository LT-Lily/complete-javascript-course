'use strict';

// Elements
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceElement = document.querySelector('.dice');
const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');
// Player 1 and 2
const p1Element = document.querySelector('.player--0');
const p2Element = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;
const init = () => {
  // Initialize Game
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScore = 0;
  document.querySelector('.current-score').textContent = 0;
  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;
  diceElement.classList.add('hidden');
  p1Element.classList.remove('player--winner');
  p2Element.classList.remove('player--winner');
  activePlayer = 0;
  p1Element.classList.add('player--active');
  p2Element.classList.remove('player--active');
};
init(); // when page loads

newGameBtn.addEventListener('click', init);
// JS calls this

const switchPlayers = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // player--active class exists
  p1Element.classList.toggle('player--active');
  p2Element.classList.toggle('player--active');
  // toggle: adds class if not there, removes class if there
};

// Roll Dice
rollBtn.addEventListener('click', () => {
  if (playing) {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // display
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // check for 1. if T - next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayers();
    }
  }
});

// Hold btn --> current score is collected in Total score

holdBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if totalscore >=100. If >=100 player wins. End Game. Else switch players
    if (scores[activePlayer] >= 20) {
      // Finishing game
      playing = false;
      // hide dice
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayers();
    }
  }
});

// Problem: when game ended still able to keep playing
// Solution: create variable to hold state of game. Is the game being played or not? - data type: boolean
// Yes --> can click button. Btn logic can only be executing if playing
// No --> can no longer click these buttons.
