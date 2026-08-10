'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 2, time = '22:00', address }) {
    console.log(
      `Order received! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

// ANCHOR: Optional chaining(?.)
/* NOTE: 
Optional chaining (?.) is a safe way to access nested object properties, arrays, or methods even if an intermediate property is null or undefined.Instead of throwing a runtime error and crashing your application, the expression short-circuits and immediately returns undefined if any reference in the chain is missing.
*/

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Optional chaining example
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  const openOrClosed = !open && open !== 0 ? `are closed` : `open at ${open}`;

  console.log(`On ${day}, we ${openOrClosed}`);
}

// Optional chaining on calling methods
console.log(restaurant.order?.(0, 1) ?? 'Method dose not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method dose not exists');

// Optional chaining on arrays
const users = [{ name: 'Eph', email: 'hello@abc.com' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User not found');
