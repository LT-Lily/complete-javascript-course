// changing the case

const airline = 'Cathay Pacific';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Convert all to lower case
// Make the first letter toUpperCase
// Join together using slice
const passenger = 'nOBu';
const passengerLowerAll = passenger.toLowerCase();
const passengerCorrect =
  passengerLowerAll[0].toUpperCase() + passengerLowerAll.slice(1);
console.log(passengerCorrect);

const passengerNameCorrect = function (name) {
  const passengerLowerAll = name.toLowerCase();
  const passengerCorrect =
    passengerLowerAll[0].toUpperCase() + passengerLowerAll.slice(1);
  console.log(passengerCorrect);
};
passengerNameCorrect('lILy');

// Comparing User Input Email
const email = 'hello@lily.io';
const loginEmail = ' Hello@Lily.io \n';
// convert them, see if they are the same

// convert to lowercase
// get rid of whitespace    .trim()
const lowerEmailCase = loginEmail.toLowerCase();
const trimmedEmail = lowerEmailCase.trim();
console.log(trimmedEmail); // => hello@lily.io

// Do this in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// Since ES2019
// .trimStart, .trimEnd

// Replace parts of strings

const priceUK = '288,97£';
// compute the price in US
const priceUS = priceUK.replace('£', '$').replace(',', '.');
// .replace("to be replaced", "replacewith")
console.log(priceUS);

// Replace the "door" with "gate"
const announcement = 'All passengers come to door 23! Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// Only replaces the first occurence.

// Regular Expression: target all occurences of "door"
console.log(announcement.replace(/door/g, 'gate'));

// Methods that return booleans:    startsWith(), endsWith()
const aircraft = 'Airbus A320neo';
console.log(aircraft.includes('A320'));
console.log(aircraft.startsWith('Air'));
console.log(aircraft.endsWith('Air'));

// check if baggage of passenger can be checked in
const checkBaggage = function (items) {
  // good practice to put everything in lowerCase first to make it easier to compare
  const baggage = items.toLowerCase();
  if (baggage.includes('knife')) {
    console.log('You cannot board this plane');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, pocket knife');
checkBaggage('I have a some makeup and a camera');
