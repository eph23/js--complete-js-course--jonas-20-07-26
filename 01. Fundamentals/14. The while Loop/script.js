"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web Dev",
    ["Michael", "Steven", "Bob"],
];
console.log(eph);

// ANCHOR: while loop
/* NOTE: 
A JavaScript while loop repeats a block of code as long as a specified condition evaluates to true. It is an entry-controlled loop, meaning the condition is checked before the code block runs. If the initial condition is false, the code block will not execute at all.
 */
let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let i = 0;
while (i <= eph.length - 1) {
    console.log(eph[i]);
    i++;
}

let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log(`You rolled a ${dice}, the loop is about to finish`);
    }
}
