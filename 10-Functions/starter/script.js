

const flight = 'LH234';
const lily = {
  name: 'Lily Tan',
  passport: 123345093,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //bad practice
  passenger.name = 'Miss ' + passenger.name;

  // check if passenger no. is correct
  if (passenger.password === 123345093) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, lily);
console.log(flight);
console.log(lily);

const flightNum = flight;
const passenger = lily;

const newPassport = function (person) {
  person.passport = Math.trun(Math.random() * 10000000000);
};

newPassport(lily);
checkIn(flight, jonas);

// Passing by Value
//The Reference is passed to a function. The reference is the value.

// Passing by Reference
// JS DOES NOT HAVE THIS
