const airline = 'Cathay Pacific';
const plane = 'A320';

console.log(plane[0]); // => A
console.log('B737'[0]); // => B

console.log(airline.length); // => 14
console.log('Cathay Pacific'.length); // => 14

// String Methods

// indexOf
// Get the position of speciifc letter
console.log(airline.indexOf('P')); // => 7
// lastIndexOf
// Get the last occurence of a letter
console.log(airline.lastIndexOf('a')); // => 8

// search entire words
console.log(airline.lastIndexOf('Pacific')); // => 7
// lower case --> -1    cannot be found.

// Use case:
// Extract part of a string using SLICE method < -- requires indexes as arguments
// 1. What is the index
// 2. Extract that

console.log(airline.slice(4)); // => ay Pacific
// begin   parameter
console.log(airline.slice(4, 7)); // => ay
// (begin, end)
// The length of the extracted string is always going to be end-beginning
// 7 - 4 = 3
// Rule of thumb:
// IMPOSSIBLE to mutate strings. They are primitives.
// always returns a new string

// don't know the index:
// Extract the first word.
console.log(airline.slice(0, airline.indexOf(' '))); // => Cathay
// begin at 0, end at " "

// Extract the LAST word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // => _Pacific
// begin at the last " ". // +1 added to get rid of the space
// 2nd parameter not added. Extracted everything until the end.

// Start counting from the end
console.log(airline.slice(-2)); //=> ic
console.log(airline.slice(1, -1)); //=> athay Pacifi

// Write a function that recieves an airline seat, logs to console whether it is a middle seat

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  // check is string recieved contains B or E
  const seatNumber = seat.slice(-1);
  if (seatNumber === 'B' || seatNumber === 'E') {
    console.log(`Seat number ${seatNumber} is a Middle Seat`);
  } else {
    console.log('Lucky you');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('20C');

// Behind the Scenes

console.log(new String('Lily')); // => String {"Lily"} See console.
console.log(typeof new String('Lily')); //=> object

// All string methods return primitives even if called on a string OBJECT.
console.log(typeof new String('Lily').slice(1)); //=> string
// See console.
