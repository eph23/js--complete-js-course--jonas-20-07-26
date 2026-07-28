"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web Dev",
    ["Michael", "Steven", "Bob"],
];
console.log(eph);

const types = [];

for (let i = 0; i < eph.length; i++) {
    console.log(eph[i], typeof eph[i]);

    types.push(typeof eph[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// ANCHOR: Continue
console.log("===Continue===");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") {
        continue;
    }
    console.log(eph[i], typeof eph[i]);
}
console.log("===Continue===");

// ANCHOR: Break
console.log("===Break===");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") {
        break;
    }
    console.log(eph[i], typeof eph[i]);
}
console.log("===Break===");
