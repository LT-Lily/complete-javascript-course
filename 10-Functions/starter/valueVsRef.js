const flight = 'NL123';
const lily = {
  name: 'Lily Chuan',
  passport: 1230248, // original p.p no.
};

// Check In

const checkIn = function (flightNum, passenger) {
  // flight number could change
  flightNum = 'AB123';
  passenger.name = 'Miss ' + passenger.name;

  if (passenger.passport === 1230248) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, lily);
console.log(flight);
console.log(lily);

/*
 Passing an object --> function
 just like copying an object.
 
*/

// Example of interacting with same object, diff function.
const newPasport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
// flight is booked with original number

newPasport(lily);
checkIn(flight, lily); // not original
// 2 functions manipulating same OBJ. Problem.
