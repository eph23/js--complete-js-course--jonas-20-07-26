'use strict';

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
console.log(martha.age);
