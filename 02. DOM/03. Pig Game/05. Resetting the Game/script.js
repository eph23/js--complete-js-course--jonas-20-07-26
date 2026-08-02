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
let scores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  diceImage.classList.add('hidden');

  currentScorePlayer0.textContent = 0;
  currentScorePlayer1.textContent = 0;

  Player0.classList.remove('player--winner');
  Player1.classList.remove('player--winner');
  Player0.classList.add('player--active');
  Player1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  Player0.classList.toggle('player--active');
  Player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceImage.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
