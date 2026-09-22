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
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function (country) {
    try {
        const position = await getPosition();
        const { latitude, longitude } = position.coords;

        const responseGeo = await fetch(
            `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_d63e6de052444c0aa24140dbc3c9560a`,
        );

        if (!responseGeo.ok) {
            throw new Error(`Problem getting location data`);
        }

        const dataGeo = await responseGeo.json();

        const response = await fetch(
            `https://countries.dev/name/${dataGeo.countryName}`,
        );

        if (!response.ok) {
            throw new Error(`Problem getting country data`);
        }

        const data = await response.json();
        renderCountry(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
    } catch (error) {
        renderError(`⚠️ ${error.message}`);
        throw error;
    }
};

console.log(`1: One`);
/* whereAmI()
    .then((city) => console.log(`2: ${city}`))
    .catch((error) => console.log(`2: ${error.message}`))
    .finally(() => console.log(`3: Three`));
 */
(async function (params) {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (error) {
        console.log(`2: error.message`);
    }
    console.log(`3: Finished`);
})();
