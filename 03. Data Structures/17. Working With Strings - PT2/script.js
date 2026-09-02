'use strict';

const airline = 'Bangladesh Biman';

console.log(airline);
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'ePhRAIm';
const passengerLower = passenger.toLowerCase();
const passengerCorrected = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrected);

const email = 'hello@ephraim.me';
const loginEmail = '   Hello@Ephraim.me \n';

const lowerEmailCase = loginEmail.toLowerCase();
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);

if (email === normalizedEmail) {
  console.log(`Logged in!`);
} else {
  console.log(`Wrong email.....`);
}

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the new Airbus family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage(`I have a laptop, some food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a GUN and knife for protection`);
