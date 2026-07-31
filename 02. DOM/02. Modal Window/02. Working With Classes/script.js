'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModalBtn.forEach(btn =>
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }),
);

closeModalBtn.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
