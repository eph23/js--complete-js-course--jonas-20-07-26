'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5/name?q=${country}`,
  );

  request.setRequestHeader(
    'Authorization',
    'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f36',
  );

  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    const countryData = data.data.objects[0];

    const languageNames = countryData.languages
      .map(lang => lang.name)
      .join(', ');

    const html = `
          <article class="country">
               <img class="country__img" src=${countryData.flag.url_png} />
               <div class="country__data">
               <h3 class="country__name">${countryData.names.common}</h3>
               <h4 class="country__region">${countryData.region}</h4>
               <p class="country__row"><span>👫</span>${(countryData.population / 1000000).toFixed(2)} people</p>
               <p class="country__row"><span>🗣️</span>${languageNames}</p>
               <p class="country__row"><span>💰</span>${countryData.currencies[0].name}</p>
               </div>
          </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('bangladesh');
