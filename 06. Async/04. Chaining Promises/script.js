'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
               <img class="country__img" src=${data.flags.png} />
               <div class="country__data">
               <h3 class="country__name">${data.name}</h3>
               <h4 class="country__region">${data.region}</h4>
               <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} M people</p>
               <p class="country__row"><span>🗣️</span>${data.languages
                 .map(lang => lang.name)
                 .join(', ')}</p>
               <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
               </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://countries.dev/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbours = data[0].borders;

      if (!neighbours) {
        return;
      }

      neighbours.map(neighbour => {
        fetch(`https://countries.dev/alpha/${neighbour}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'));
      });
    });
};

getCountryData('canada');
getCountryData('bangladesh');
