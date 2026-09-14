'use strict';

class Account {
  local = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) this.deposit(val);
    console.log(`Your loan request of $${val} is approved`);
    return this;
  }

  static test() {
    console.log(`TRUE`);
  }
}

const acc1 = new Account('Eph', 'EUR', 1111);

const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(250000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);
console.log(movements);
