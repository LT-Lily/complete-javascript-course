'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// make sure there are no errors in an old browser:
// if it exists
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // called on success
      // console.log(position.coords);
      // const latitude = position.coords.latitude
      // const longitude = position.coords.longitude
      // destructuring
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //creates variable latitude based on latitude property of the object coords.
      // console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coords = [latitude, longitude];
      // const map = L.map('map').setView([51.505, -0.09], 13);
      //setView(expects an array of coordinates, zoom level)
      const map = L.map('map').setView(coords, 13);
      // L is the function Leaflet has given as an entry point/namespace. Global var inside Leaflet ID name of html
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;

        // L.marker(coords)
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false, // one marker closes when new one is created
              closeOnClick: false,
              className: 'running-popup', //use for styling popup
            })
          )
          .setPopupContent('House by the beach')
          .openPopup();
      });
      // .on is from leaflet library. Using this instead of addEventListener. They use the _ convention
    },

    function () {
      alert('Could not get your position');
    }
  );
}
