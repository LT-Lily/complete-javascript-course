"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const countryCard = `
      <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
      `;
  countriesContainer.insertAdjacentHTML("beforeend", countryCard);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
//BEFORE
/* 
const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
request.send(); 
*/

// AFTER

const request = fetch("https://restcountries.eu/rest/v2/name/portugal");
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      console.log(response);
      return response.json(); //🤞 json returns promise - RETURN
    })
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
      //////// GET NEIGHBOURING COUNTRY - 🔗CHAINING PROMISES 🤞
      // as soon as we get data, get neighbouring country.
      const neighbour = data[0].borders;
      console.log(neighbour);
      if (!neighbour) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);

      // .then method ALLWAYS RETURNS A PROMISE no matter if anything is returned or not. If we do return a value, that value will be the FULFILLMENT VALUE of the promise.

      //   return 23; // the success value is returned from the .then method. Therefore in the NEXT .then method data is 23.
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"));
  // immediately returns Promise
  // state: PENDING...
  // (assume success) - handle with .then
  // pass CBFunct(arg: resultOfFulfiledPromise) as soon as (FULFILLED) result is available
};

getCountryData("portugal");

// Chain Promise to get the neighbouring country
