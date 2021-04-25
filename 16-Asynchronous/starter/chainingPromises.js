// Chain promises to render neighbouring country of initial country given to function

// Chain 2 sequential AJAX calls.
// get data about country
// get data about neighbouring country
// 2nd Ajax call depends on 1st AJAX call. Must be done in sequence.

const countriesContainer = document.querySelector('.countries');

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
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

const getCountryData = function (country) {
  // Country 1

  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      //2nd AJAX call needs to happen here.
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return; //if no neighbours return immediately.

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    });
};
getCountryData('portugal');
