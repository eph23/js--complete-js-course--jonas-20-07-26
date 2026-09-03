'use strict';

const flight = 'LH234';
const eph = {
  name: 'Ephraim',
  passport: 24878365,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24878365) {
    alert(`Checked in`);
  } else {
    alert(`Wrong passport!`);
  }
};

checkIn(flight, eph);
console.log(flight);
console.log(eph);
