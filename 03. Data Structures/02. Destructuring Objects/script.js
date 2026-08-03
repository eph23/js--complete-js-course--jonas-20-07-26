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
};

console.log(restaurant);

// ANCHOR: Destructuring objects
/* NOTE: 
Object destructuring is a JavaScript syntax introduced in ES6 that allows you to unpack properties from objects directly into distinct variables.
*/
const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(openingHours);
console.log(categories);

// ANCHOR: Renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName);
console.log(hours);
console.log(tags);

// ANCHOR: Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu);
console.log(starters);

// ANCHOR: Mutating variables
let a = 111;
let b = 999;
console.log(a);
console.log(b);

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a);
console.log(b);

// ANCHOR: Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o);
console.log(c);

// ANCHOR: Destructuring returned value of an method/function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Boulevard of broken dreams',
  mainIndex: 2,
});
