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
  //   countriesContainer.style.opacity = 1;
};
////////////////////////////////////////////
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};

// Only way to REJECT - user loses internet connection

// Simulate losing internet - Dev tools>Network>Change speed to Offline
// Simulate Page first stillloaded, but as user loads request without internet, see the error happen.

const request = fetch("https://restcountries.eu/rest/v2/name/portugal");
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(
      (response) => response.json()
      //   (error) => alert(error)
      //🤞 json returns promise - RETURN
    )
    .then((data) => {
      console.log(data);
      renderCountry(data);
      //////// GET NEIGHBOURING COUNTRY - 🔗CHAINING PROMISES 🤞
      const neighbour = data.borders;
      console.log(neighbour);
      if (!neighbour) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((error) => {
      // only called whilst promise is rejected
      console.log(`${error} 💢`); // catch anywhere in chain
      renderError(`Something went wrong 💢💢💢💢 ${error.message}`);
    })
    .finally(() => {
      // always called no matter fulfilled or rejected
      // use case: hide loading spinner
      // no matter what:
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("Portugal");
});

/* 
Handling Rejections:
2 ways:
Method 1.
Add 2nd CBFunct() to .then
SYNTAX: .then(success, reject)

  .then(
      (response) => response.json()
      //   (error) => alert(error)
      //🤞 json returns promise - RETURN
    )

    Method 2
    .catch((error) => {
      console.log(`${error} 💢`); // catch anywhere in chain
      renderError(`Something went wrong 💢💢💢💢 ${error.message}`);
    });

    Method 3
*/
