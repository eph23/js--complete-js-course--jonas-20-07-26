'use strict';

const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  get latest() {
    // console.log(this.movements[this.movements.length - 1]);
    return this.movements[this.movements.length - 1];
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

// Getter
console.log(account.latest);

// Setter
account.latest = 900;
console.log(account.latest);

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
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.age);
console.log(jessica.fullName);

const walter = new PersonCl('Walter', 1965);
console.log(walter);

walter.fullName = 'Walter White';
console.log(walter.age);
console.log(walter.fullName);
console.log(walter);
