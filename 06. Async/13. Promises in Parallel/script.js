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

const getThreeCountries = async function (c1, c2, c3) {
  try {
    /* const [data1] = await getJSON(`https://countries.dev/name/${c1}`);
    const [data2] = await getJSON(`https://countries.dev/name/${c2}`);
    const [data3] = await getJSON(`https://countries.dev/name/${c3}`); */

    /*     console.log([data1.capital, data2.capital, data3.capital]); */

    const data = await Promise.all([
      getJSON(`https://countries.dev/name/${c1}`),
      getJSON(`https://countries.dev/name/${c2}`),
      getJSON(`https://countries.dev/name/${c3}`),
    ]);

    console.log(data.map(country => country[0].capital));
  } catch (error) {
    console.error(error);
  }
};
getThreeCountries('canada', 'bangladesh', 'australia');
