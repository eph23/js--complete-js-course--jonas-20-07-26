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

// ANCHOR: Logical assignment operators
/* NOTE: 
Logical assignment operators combine logical operators (||, &&, or ??) with an assignment operator (=). They allow you to conditionally assign a value to a variable only if a specific short-circuit condition is 
*/

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2); */

// ANCHOR: Logical OR Assignment (||=)
/* NOTE: 
The Logical OR Assignment Operator (||=) assigns a value to a variable only if that variable is currently falsy (false, 0, "", null, undefined, or NaN).
If the variable is already truthy, the operator short-circuits. This means the right-hand side is completely ignored, and no assignment takes place.
*/
console.log(`--- OR ||= ---`);
/* rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2); */

// ANCHOR: Logical AND Assignment (&&=)
/* NOTE: 
The Logical AND Assignment Operator (&&=) assigns a value to a variable only if that variable is currently truthy.
If the variable is falsy (false, 0, "", null, undefined, or NaN), the operator short-circuits. The right-hand side is completely ignored, and the original falsy value is retained.
*/
console.log(`--- AND ||= ---`);
/* rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>'; */

/* rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2); */

// ANCHOR: Nullish Coalescing Assignment (??=)
/* NOTE: 
The Nullish Coalescing Assignment Operator (??=) assigns a value to a variable only if that variable is currently nullish (null or undefined).
If the variable contains any other value—including falsy values like 0, false, or "" (empty string)—the operator short-circuits. The right-hand side is completely ignored, and the original value is safely preserved.
*/
console.log(`--- Nullish Coalescing ??= ---`);
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);
