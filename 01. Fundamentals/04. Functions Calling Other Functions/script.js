"use strict";

//ANCHOR: Helper Functions
/* NOTE: 
A helper function is a small, reusable function that performs a single, specific task to assist a larger main function or streamline repetitive logic. It helps implement the DRY (Don't Repeat Yourself) programming principle, making your codebase much cleaner, more readable, and significantly easier to test.
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}

// ANCHOR: Functions calling other functions
/* NOTE: 
In JavaScript, you can call a function from inside another function simply by invoking its name followed by parentheses () inside the parent function's body. This core concept allows you to break large programs into smaller, reusable pieces of code.
*/
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
