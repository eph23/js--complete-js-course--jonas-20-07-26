"use strict";

// ANCHOR: Array
/* NOTE: 
In JavaScript, an Array is a global object used to store multiple values of any data type in an ordered, zero-indexed collection.
*/

// ANCHOR: Array literals
const friends = ["Michael", "Steven", "Bob"];

// ANCHOR: Array constructor
const years = new Array(1991, 1984, 2008, 2020);

// ANCHOR: Accessing array element
/* NOTE: 
Inside the squire bracket JavaScript always expects and accepts an expression which produce value.
*/
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);

// Accessing array element using property
console.log(friends[friends.length - 1]);

// Mutating array
friends[2] = "Jay";
console.log(friends);

/* NOTE: 
JavaScript arrays can store any type of data because they are heterogeneous and untyped, meaning a single array can hold a mix of strings, numbers, booleans, objects, and even other arrays all at the same time.
*/
const firstName = "Ephraim";
const eph = [firstName, "S", 2037 - 1988, "Web Dev", friends];
console.log(eph);
console.log(eph.length);

// ANCHOR: EXERCISE
const birthYears = [1990, 1967, 2002, 2010, 2018];
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
