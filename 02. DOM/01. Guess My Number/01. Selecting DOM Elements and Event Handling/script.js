'use strict';

const numberInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');

const message = document.querySelector('.message');

btnCheck.addEventListener('click', function () {
  const guess = Number(numberInput.value);

  if (!guess) {
    message.textContent = `🎯 Guess a number!`;
  }
});
