"use strict";

// ANCHOR: Helper function
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

// ANCHOR: Function expression
const yearsUntilRetirement = function (firstName, birthYear) {
    const retirement = 65 - calcAge(birthYear); // ANCHOR: calling a function inside another function

    // ANCHOR: Conditionals
    if (retirement > 0) {
        return `${firstName} will retire in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
};

// ANCHOR: Calling function
console.log(yearsUntilRetirement("Ephraim", 1988));
console.log(yearsUntilRetirement("Bob", 1980));
console.log(yearsUntilRetirement("Steven", 1970));
