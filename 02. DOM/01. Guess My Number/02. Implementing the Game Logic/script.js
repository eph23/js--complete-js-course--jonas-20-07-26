'use strict';
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const numberInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const displayScore = document.querySelector('.score');

number.textContent = secretNumber;

btnCheck.addEventListener('click', function () {
  const guess = Number(numberInput.value);

  if (!guess) {
    message.textContent = `❌ No number!`;
  } else if (guess === secretNumber) {
    message.textContent = '✅ Correct number!';
    btnCheck.disabled = true;
    numberInput.disabled = true;
  } else if (guess > secretNumber) {
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
  } else if (guess < secretNumber) {
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
