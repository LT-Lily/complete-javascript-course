'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// takes string as an argument of country
const getCountryData = function (country) {
  // There are mayn ways of doing AJAX calls iN JS
  // OLD SCHOOL METHOD: XML HTTP request function
  // How AJAX calls used to be handled with events and callback functions.
  const request = new XMLHttpRequest();
  // need URL for which we will make the AJAX call:
  // .open([type of request, URL])
  // open the request
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send(); // sends request to above URL and fetches the data in the background. Once this is done, it will FIRE the "load" EVENT
  // AJAX call is being done in the background. We cannot just save this to a variable because the result is not there yet. (This is an asynchronous non-blocking behaviour.)

  // Register a callback on the request OBJECT for the LOAD event.
  // When data arrives, this callback function will be called.
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    // THIS keyword is the REQUEST
    //.responseText property is only going to be set once the data has arrived.
    // JSON is recieved. -> Convert to a Javascript OBJECT
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // data is an object -> destructure it. []
    // this is the same as this.responseText[0]

    const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
    // insert this HTML
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

// 2 ajax calls in parallel at the same time
getCountryData('japan');
getCountryData('france');
getCountryData('australia');
// when reloading they may appear in a different order. Reason: data arrives at a slightly different time. Non-blocking data in action.
// Whichever one happens first will FIRE the "load" EVENT.

// What if we want it to be in a SPECIFIC order?
// CHAIN the REQUESTS (make the 2nd request ONLY after the 1st REQUEST has finished) --> NEXT lecture = Callback hell.
