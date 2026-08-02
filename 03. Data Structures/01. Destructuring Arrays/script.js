'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant);

// ANCHOR: Destructuring arrays
/* NOTE: 
Array destructuring in JavaScript is a concise syntax introduced in ES6 that allows you to unpack values from arrays directly into distinct variables.
*/
const [first, second] = restaurant.categories;
console.log(first);
console.log(second);

// ANCHOR: Skipping a value
let [primary, , secondary] = restaurant.categories;
console.log(primary);
console.log(secondary);

// ANCHOR: Swapping value
[primary, secondary] = [secondary, primary];
console.log(primary);
console.log(secondary);

// ANCHOR: Destructuring returned value of an method/function
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter);
console.log(main);

// ANCHOR: Nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i);
console.log(j);

const [a, , [c, d]] = nested;
console.log(a);
console.log(c);
console.log(d);

// ANCHOR: Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p);
console.log(q);
console.log(r);
