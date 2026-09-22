'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`);
    }

    return response.json();
  });
};

(async function () {
  const res = await Promise.race([
    getJSON(`https://countries.dev/name/bangladesh`),
    getJSON(`https://countries.dev/name/egypt`),
    getJSON(`https://countries.dev/name/canada`),
  ]);

  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://countries.dev/name/canada`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

Promise.allSettled([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another Success`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another Success`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
