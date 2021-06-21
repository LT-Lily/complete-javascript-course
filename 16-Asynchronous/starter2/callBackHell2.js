"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// Create a sequence of AJAX calls
// Ajax call -> gte 1 country - get neighbouring country

// once neighbouring country arrives render this too

// adding class to make neighbouring country card smaller
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
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", countryCard);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    // console.log(this.responseText); //string
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // GET NEIGHBOUR COUNTRY
    const [neighbour] = data.borders;
    //   console.log(neighbour);
    if (!neighbour) return;
    // neighbouring country exist, proceed with 2nd AJAX call
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      console.log(this.responseText); //string
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("Portugal");
getCountryAndNeighbour("France");

// Problem: Want to get neighbour of neighbour of neighour --> too many call backs nested - callback hell.
// Bug: when callingn more than 1 country, cannot scroll across screen.

//eg

//❌
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    // after 1st is fin, start 2nd
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("4 seconds passed");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
