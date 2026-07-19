"use strict";

//ANCHOR: Function Declaration
/* NOTE: 
In JavaScript, a function declaration (also called a function statement) is used to define a named, reusable block of code using the function keyword.
*/
function logger() {
    console.log(`My name is Eph`);
}

// ANCHOR: Calling/invoking/running a function
logger();

// ANCHOR: Function with parameters
/* NOTE: 
In JavaScript, parameters are the placeholder variables listed in a function's definition, while arguments are the actual values passed to the function when it is invoked.
*/
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}

// ANCHOR: Calling the function with arguments
/* NOTE: 
In JavaScript, arguments are the actual values passed to and received by a function when it is invoked, whereas parameters are the named placeholders specified in the function's definition. 
*/
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(2, 4));
