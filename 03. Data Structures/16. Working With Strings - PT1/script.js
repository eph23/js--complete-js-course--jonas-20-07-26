'use strict';

const airline = 'Bangladesh Biman';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('B'));
console.log(airline.lastIndexOf('B'));
console.log(airline.lastIndexOf('Ban'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline);

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(-5));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log(`You got a middle seat`);
  } else {
    console.log(`You got lucky!`);
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('21A');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
