"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    const responseGeo = await fetch(
        `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_d63e6de052444c0aa24140dbc3c9560a`,
    );
    const dataGeo = await responseGeo.json();
    console.log(dataGeo.countryName);

    const response = await fetch(
        `https://countries.dev/name/${dataGeo.countryName}`,
    );

    const data = await response.json();
    console.log(data[0]);
    renderCountry(data[0]);
};

whereAmI();
