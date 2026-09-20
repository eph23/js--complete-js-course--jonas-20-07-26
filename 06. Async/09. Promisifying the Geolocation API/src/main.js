"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (message) {
    countriesContainer.insertAdjacentText("beforeend", message);
    countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
    const html = `
          <article class="country ${className}">
               <img class="country__img" src=${data.flags.png} />
               <div class="country__data">
               <h3 class="country__name">${data.name}</h3>
               <h4 class="country__region">${data.region}</h4>
               <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} M people</p>
               <p class="country__row"><span>🗣️</span>${data.languages
                   .map((lang) => lang.name)
                   .join(", ")}</p>
               <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
               </div>
          </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
};

/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
    );
  });
}; */

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then((position) => console.log(position));

const whereAmI = function () {
    getPosition()
        .then((position) => {
            const { latitude, longitude } = position.coords;

            return fetch(
                `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_d63e6de052444c0aa24140dbc3c9560a`,
            );
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Problem with geocoding. ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return fetch(`https://countries.dev/name/${data.countryName}`);
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Problem with geocoding. ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            renderCountry(data[0]);
        })
        .catch((error) => console.log(`${error.message}`))
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener("click", whereAmI);
