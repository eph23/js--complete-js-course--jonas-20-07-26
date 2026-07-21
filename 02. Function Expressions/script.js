"use strict";

//ANCHOR: Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Age from function declaration", ageDeclaration);

// ANCHOR: Function expressions
/* NOTE: 
A function expression in JavaScript is a syntax for creating a function inside another expression, most commonly by assigning it to a variable. Unlike traditional function declarations, function expressions treat the function as a standard data value.
*/
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Age from function expression", ageExpression);

/* NOTE: 
EXPRESSION: In JavaScript, an expression is any valid unit of code that resolves to a single value.
STATEMENT: A JavaScript statement is a standalone unit of execution that commands a computer or web browser to perform a specific action. Programs in JavaScript are essentially sequences of these statements executed one by one.

//ANCHOR: The core difference is that an expression produces a value, while a statement performs an action. 
*/