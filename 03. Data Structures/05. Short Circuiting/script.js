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

// ANCHOR: Short circuiting
/* NOTE: 
Short-circuiting in JavaScript is a behavior where logical operators evaluate an expression from left to right and stop (short-circuit) as soon as the final outcome is mathematically guaranteed.
*/

// ANCHOR: Short-Circuiting Operators - Logical OR (||)
/* NOTE: 
The Logical OR (||) operator evaluates expressions from left to right and short-circuits as soon as it finds the first truthy value. It immediately returns that truthy value without evaluating anything else.
*/
console.log(`---OR---`);
console.log(3 || 'Ephraim');
console.log('' || 'Ephraim');
console.log(true || null);
console.log(false || null);
console.log(undefined || false);
console.log(null || undefined);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
// ANCHOR: Setting Default Variables and Eliminating conditionals
const guests_conditional = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests_conditional);

const guests_without_conditionals = restaurant.numGuests || 10;
console.log(guests_without_conditionals);

// ANCHOR: Short-Circuiting Operators - Logical AND (&&)
/* NOTE: 
The Logical AND (&&) operator evaluates expressions from left to right and short-circuits as soon as it finds the first falsy value. It immediately returns that falsy value without evaluating the rest of the expression.
*/
console.log(`---AND---`);
console.log(0 && 'Ephraim');
console.log(7 && 'Ephraim');
console.log(null && undefined);
console.log(undefined && null);

console.log('Hello' && 23 && null && 'Ephraim');

// ANCHOR: Guard Clauses and Conditional Code Execution
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
