'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// setting a default className to nothing
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
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
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send(); // sends request to above URL and fetches the data in the background. Once this is done, it will FIRE the "load" EVENT

  request.addEventListener('load', function () {
    // Callback funct()
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data); // Render country 1

    // Get neighbour country 2
    const [neighbour] = data.borders; // Get neighbour country 2
    // destructure and take first element

    if (!neighbour) return; // some countries don't have border
    // if another border exists, do 2nd AJAX call

    // AJAX call #2 - DEPENDENT on 1st AJAX call
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();
    // listen to load even
    request2.addEventListener('load', function () {
      // Callback funct() 2
      //this.response is a string
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('france');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
    }, 1000);
  }, 1000);
}, 1000);
