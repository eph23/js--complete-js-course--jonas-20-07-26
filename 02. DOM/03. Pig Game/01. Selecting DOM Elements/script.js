'use strict';

const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');

const diceImage = document.querySelector('.dice');

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

diceImage.classList.add('hidden');
