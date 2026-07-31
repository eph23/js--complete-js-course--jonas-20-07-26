'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const numberInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnReset = document.querySelector('.again');

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const displayScore = document.querySelector('.score');
const displayHighScore = document.querySelector('.highscore');

const body = document.querySelector('body');
const displaySecretNumber = document.querySelector('.number');

console.log(secretNumber);

btnCheck.addEventListener('click', function () {
  const guess = Number(numberInput.value);

  if (!guess) {
    message.textContent = `❌ No number!`;
  } else if (guess === secretNumber) {
    message.textContent = '✅ Correct number!';
    btnCheck.disabled = true;
    numberInput.disabled = true;

    body.style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    displaySecretNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayHighScore.textContent = highScore;
    }
  }

  // Guess is highligh
  else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high...';
      score--;
      displayScore.textContent = score;
    } else {
      message.textContent = '🤬 You lost...';
      score = 0;
      displayScore.textContent = score;
      btnCheck.disabled = true;
      numberInput.disabled = true;
    }
  }

  // Guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low...';
      score--;
      displayScore.textContent = score;
    } else {
      message.textContent = '🤬 You lost...';
      score = 0;
      displayScore.textContent = score;
      btnCheck.disabled = true;
      numberInput.disabled = true;
    }
  }
});

btnReset.addEventListener('click', function () {
  score = 20;

  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log('Generated again', secretNumber);

  message.textContent = 'Start guessing...';
  displayScore.textContent = score;

  numberInput.value = '';
  number.textContent = '?';

  btnCheck.disabled = false;
  numberInput.disabled = false;

  body.style.backgroundColor = '#222';
  displaySecretNumber.style.width = '15rem';
});
