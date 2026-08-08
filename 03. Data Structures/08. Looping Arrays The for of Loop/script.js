'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// ANCHOR: The for of loop
/* NOTE: 
The for...of loop executes a loop over iterable objects (including Array, Map, Set, String, TypedArray, and the arguments object). It directly loops over the values of the collection, rather than the indexes or keys.
*/

for (const item of menu) {
  console.log(item);
}

// ANCHOR: Object.entries()
/* NOTE: 
Object.entries() is a built-in static method that takes an object and returns an array of its own enumerable string-keyed property [key, value] pairs.
*/
for (const item of menu.entries()) {
  console.log(item);
}

for (const [index, item] of menu.entries()) {
  console.log(item);
  console.log(`${index + 1}: ${item}`);
}
