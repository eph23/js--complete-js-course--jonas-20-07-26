"use strict";

// ANCHOR: Object literal

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
};
console.log(eph);

// ANCHOR: Accessing object property with dot notation
console.log(eph.firstName);

// ANCHOR: Accessing object property with bracket notation
console.log(eph["lastName"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph[`last${nameKey}`]);

/* const interestedIn = prompt(
    `What do you want to know about Ephraim? Choose between firstName, lastName, age, job and friends`,
);
if (eph[interestedIn]) {
    alert(eph[interestedIn]);
} else {
    prompt(
        `Wrong request! Choose between firstName, lastName, age, job and friends`,
    );
} */

// ANCHOR: Mutating object property
eph.location = "Bangladesh";
eph["twitter"] = "@ephraimsbd";
console.log(eph);

// ANCHOR: Challenge
/* 
Write the sentence from the eph object in dynamic way
"Ephraim has 3 friends, and his best friend is called Steven"
*/
console.log(
    `${eph.firstName} has ${eph.friends.length} friends, and his best friend is called ${eph.friends[1]}`,
);
