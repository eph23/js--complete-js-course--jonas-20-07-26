"use strict";

//ANCHOR: Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Age from function declaration", ageDeclaration);

// ANCHOR: Function expressions
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Age from function expression", ageExpression);

//ANCHOR: Arrow functions
/* NOTE: 
Arrow functions are a compact, modern syntax introduced in ES6 (ECMAScript 2015) for writing function expressions in JavaScript. They use the fat arrow => operator and change how the this context behaves inside a function.
*/

const calcAgeArr = (birthYear) => 2037 - birthYear;

const ageArr = calcAgeArr(1988);
console.log(`Age from arrow function`, ageArr);

const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years`;
};
console.log(yearsUntilRetirement("Ephraim", 1988));
console.log(yearsUntilRetirement("Bob", 1980));
console.log(yearsUntilRetirement("Steven", 1970));
