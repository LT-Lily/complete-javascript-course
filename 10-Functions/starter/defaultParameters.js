'use strict';
// Don't need to pass manually

// without default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 30 * numPassengers
) {
  // ES6
  const booking = {
    // set default parameters
    // ES5
    // numPassengers = numPassengers || 1;
    // // if numPassengers is falsie (undefined), use default value 1
    // price = price || 199;

    //enhanced Object Literals syntax
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('FB123');
// // =>{ flightNum: 'FB123',
//   numPassengers: undefined,
//   price: undefined }

// override default values
createBooking('LN123', 2);
// skip a default parameter to use the default
createBooking('LN123', undefined, 1000);
