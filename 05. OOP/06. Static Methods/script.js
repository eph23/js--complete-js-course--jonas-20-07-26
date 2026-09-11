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

Person.hey = function () {
  console.log(`Hey there 🙋‍♂️`);
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.hey();
eph.calcAge();
matilda.calcAge();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return `${this._fullName} is ${2039 - this.birthYear} years old`;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${this._fullName} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hi() {
    console.log(`Hey.. 🙋`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.age);
console.log(jessica.fullName);
PersonCl.hi();
