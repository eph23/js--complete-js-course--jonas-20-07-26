'use strict';

const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');
const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');

const diceImage = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial Condition
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceImage.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;

  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    Player0.classList.toggle('player--active');
    Player1.classList.toggle('player--active');
  }
});
