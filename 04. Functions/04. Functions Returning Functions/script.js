'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Eph');

greet('Hello')('Eph');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Bonjour')('Eph');
