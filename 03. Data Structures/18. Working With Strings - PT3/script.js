'use strict';

console.log('a+very+nice+string'.split('+'));
console.log('Ephraim S'.split(' '));

const [firstName, lastName] = 'Ephraim S'.split(' ');

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameWords = name.split(' ');
  const nameArr = [];

  for (const word of nameWords) {
    nameArr.push(word[0].toUpperCase() + word.slice(1));
  }

  console.log(nameArr.join(' '));
};

capitalizeName('Jessica ann smith davis');
capitalizeName('Ephraim s');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4554454533677));
console.log(maskCreditCard(22004587895111455));

const weatherMessage = `Bad weather... All Departures Delayed...`;
console.log(weatherMessage.repeat(5));

const planesInline = function (num) {
  console.log(`There are ${num} planes in line ${'🛬'.repeat(num)}`);
};

planesInline(5);
planesInline(15);
planesInline(2);
