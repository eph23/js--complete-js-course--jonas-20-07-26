'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
               <img class="country__img" src=${data.flag.url_png} />
               <div class="country__data">
               <h3 class="country__name">${data.names.common}</h3>
               <h4 class="country__region">${data.region}</h4>
               <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} people</p>
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

const getCountryAndNeighbour = function (country) {
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
    console.log(countryData);
    renderCountry(countryData);

    countryData.borders.forEach(function (border) {
      const neighbourRequest = new XMLHttpRequest();

      neighbourRequest.open(
        'GET',
        `https://api.restcountries.com/countries/v5/codes.alpha_3/${border}`,
      );

      neighbourRequest.setRequestHeader(
        'Authorization',
        'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f36',
      );

      neighbourRequest.send();

      neighbourRequest.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        const neighbourData = data.data.objects[0];

        renderCountry(neighbourData, 'neighbour');
      });
    });
  });
};

getCountryAndNeighbour('bangladesh');
getCountryAndNeighbour('canada');
