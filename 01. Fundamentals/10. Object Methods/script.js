"use strict";

// ANCHOR: Object methods
/* NOTE: 
An object method is a function that belongs to an object, defining the actions or behaviors that the specific object can perform.  
*/

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    // ANCHOR: Object method
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // ANCHOR: Challenge solution
    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};
console.log(eph);
console.log(eph.calcAge());
console.log(eph.getSummery());

// ANCHOR: Challenge
/* 
Ephraim is a 49 years old Web Dev, and he has a driver's license
*/
