'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Eph', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
const jake = new Person('Jake', 1975);

console.log(matilda);
console.log(jake);

console.log(eph instanceof Person);
