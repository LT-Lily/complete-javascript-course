const whereBtn = document.querySelector('.btn-country');
// get data and immediately convert to JSON
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`
    ${errorMsg}
    ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    ' Country not found'
  );

  const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(response => {
        //   error => alert(error) // handle(catch) error by displaying window
        console.log(response);
        if (!response.ok)
          throw new Error(`
            Country not found
            ${response.status}`);
        // throw - terminates the current function
        // Error - constructor funct
        return response.json();
      })
      .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if (!neighbour) return;
        // Country 2
        return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
        // the fulfilled value will be pass to /then
        //   return 23;
      })
      .then(response => response.json())
      .then(data => renderCountry(data, neighbour))
      // .then(data => alert(data)); // data takes the RESULTING VAL OF FULFILED PROMISE value -23

      // catch errors globally no matter where on the promise chain
      .catch(error => console.error(`${error} ***`))
      // called whether fulfilled or rejected
      .finally(() => {
        // hide loading spinners when loading something from data
        // show spinner when async operation starts, hide when opeation complete - success or not
        countriesContainer.style.opacity = 1;
      });
  };
};
/* const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      //   error => alert(error) // handle(catch) error by displaying window
      console.log(response);
      if (!response.ok)
        throw new Error(`
      Country not found
      ${response.status}`);
      // throw - terminates the current function
      // Error - constructor funct
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
      // the fulfilled value will be pass to /then
      //   return 23;
    })
    .then(response => response.json())
    .then(data => renderCountry(data, neighbour))
    // .then(data => alert(data)); // data takes the RESULTING VAL OF FULFILED PROMISE value -23

    // catch errors globally no matter where on the promise chain
    .catch(error => console.error(`${error} ***`))
    // called whether fulfilled or rejected
    .finally(() => {
      // hide loading spinners when loading something from data
      // show spinner when async operation starts, hide when opeation complete - success or not
      countriesContainer.style.opacity = 1;
    });
}; */

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
  //   countriesContainer.style.opacity = 1;
};

whereBtn.addEventListener('click', () => {
  getCountryData('pineapple ');
});

/* 
Handling rejected promises:
Method 1:
    .then( 1st callback for fulfilled promise, 2nd callback for rejected
    Pass call back function into the .then method.
Method 2:
*/

/* fetch only rejects when there is no internet connection */

// Create helper function - fetch, converting error to JSON,
