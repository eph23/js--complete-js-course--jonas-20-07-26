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
};

console.log(restaurant);

// ANCHOR: The spread operator
/* NOTE: 
The JavaScript spread operator (...) allows an iterable, such as an array, string, or object, to be expanded into individual elements or properties.
*/

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// ANCHOR: Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// ANCHOR: Merging
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// ANCHOR: Iterate
const str = 'Ephraim';
const letters = [...str, 'S.'];
console.log(letters);
console.log(...str);

// ANCHOR: As function/method argument
/* const ingredients = [
  prompt(`Lets make pasta! Ingredient 1`),
  prompt(`Lets make pasta! Ingredient 2`),
  prompt(`Lets make pasta! Ingredient 3`),
]; */
const ingredients = ['Mushroom', 'Cheese', 'Basil'];

restaurant.orderPasta(...ingredients);

// ANCHOR: Copy object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
