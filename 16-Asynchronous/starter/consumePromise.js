// const request = fetch('https://restcountries.eu/rest/v2/name/${country}');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// REFACTORED
const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
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
    .then(data => renderCountry(data, neighbour));
  // .then(data => alert(data)); // data takes the RESULTING VAL OF FULFILED PROMISE value -23
};

//1. immediately return a promise as soon as request is started. state: PENDING. Task of getting data running background ....

// Assuming SETTLED state: FULFILLED - handle with .then() - available on all promises
/* 
1. BUILD PROMISE, return promise
//- HANDLE FULFILLED PROMISE
then()
<-- pass "then" a callback funct() to be executed as soon as PROMISE is fulfilled - funct(receives 1 arg once called by JS - RESULTING VAL OF FULFILED PROMISE) - response 
//////////////////////
.then(function(response){
 ... do something with response
})
//////////////////////

//- Do somehting with the response
 
 Data is in response body: ReadableStream
 JSON method available on all response objects coming from the fetch  function (all of the RESOLVED values).
 JSON is also an ASYNCfunction. That means it will also RETURN a NEW PROMISE
 Return it and need to HANDLE IT too --> .then()

 return response.json().then(function(data){
     
 })
*/

/* Chain 2 ajax calls 

.then method ALWAYS returns a promise no matter if we return anything or not.
if we do return a value, that value will be the fulfilled value of the returned promise
*/

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
getCountryData('Japan');
