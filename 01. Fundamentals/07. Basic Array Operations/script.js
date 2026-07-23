"use strict";

const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// ANCHOR: push method
/* NOTE: Adds elements to the end of an array
 */
friends.push("Jay");
console.log(friends);

// ANCHOR: unshift method
/* NOTE: Adds elements to the beginning of an array
 */
friends.unshift("Sarah");
console.log(friends);

// ANCHOR: pop method
/* NOTE: removes elements from the end of an array and returns the removed element
 */
const popped = friends.pop();
console.log(friends);
console.log(popped);

// ANCHOR: shift method
/* NOTE: removes elements from the beginning of an array and returns the removed element
 */
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

// ANCHOR: indexOf method
/* NOTE: returns the index of the element
 */
console.log(friends.indexOf("Steven"));

// ANCHOR: includes method
/* NOTE: returns the true or false
 */
console.log(friends.includes("Steven"));
console.log(friends.includes("Sarah"));

if (friends.includes("Michael")) {
    console.log(`You have a friend called Michael`);
}
