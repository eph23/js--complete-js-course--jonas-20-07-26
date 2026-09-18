'use strict';

console.log(`Test start!`);
setTimeout(() => console.log(`O sec timer`), 0);

Promise.resolve(`Resolved promise 1`).then(response => console.log(response));
console.log(`Test End`);

Promise.resolve(`Resolved promise 2`).then(response => {
  for (let i = 0; i < 1000; i++) {
    console.log(response);
  }
});
