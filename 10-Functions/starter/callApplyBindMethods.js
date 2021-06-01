// /=======
const cathaypacific = {
  airline: 'Cathay Pacific',
  iataCode: 'CF',
  bookings: [],
  // old syntax: book: function(){}
  // enhanced object literal syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} flight ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
// Book a flight
cathaypacific.book(123, 'Lily');
cathaypacific.book(123, 'Nobu');

// Some years later Cathay Pacific creates a new airline.

const europacific = {
  airline: 'Euro Pacific',
  iataCode: 'EF',
  bookings: [],
};

//== Tell JS explicitly what "this" should be
// there are 3 function methods to do that
// .call | .bind | .apply

// possible because of first class functions.
const book = cathaypacific.book;

// book(23, 'John Smith'); // does not work
book.call(europacific, 23, 'John Smith');
console.log(europacific);

book.call(cathaypacific, 26, 'Pug');
console.log(cathaypacific);

// create more airlines
const swiss = {
  airline: 'Swiss Pacific',
  iataCode: 'SF',
  bookings: [],
};

book.call(swiss, 23, 'John Lennon');
console.log(swiss);

//========= .APPLY METHOD ========//
const flightData = [123, 'Doctor Who'];
// not common in modern JS
book.apply(swiss, flightData);
console.log(swiss);

// preferred method
book.call(swiss, ...flightData);
console.log(swiss);

//=========132 .bind METHOD ========//
// Eg. Need to use .book method for Euro Pacific all the time

// book.call(europacific, 23, 'John Smith');
// Create booking function for each airine to make it easier to book mulptiple times.
const bookEP = book.bind(europacific);
const bookCP = book.bind(cathaypacific);
const bookSP = book.bind(swiss);
// it will not call the book function.
// it will return a NEW function where THIS will ALWAYS be set to europacific

// use function
bookEP(23, 'Stephen Hawkings');
console.log(europacific);

// pass other functions to .bind. They will set in stone. THe function will be called with these same arguments.
// Eg. Use .bind for once specific arline and specific flight num.
const bookEP23 = book.bind(europacific, 23);
// only for flight 23. Preset the flightNum - Specifying parts of an argument beforehand is a common pattern called PARTIAL APPLICATION.
// go to line 9.

// pass in the remaining arguments
bookEP23('Wasabi Chuan');
bookEP23('Green Gyoza Chuan');
console.log(europacific);

// Situation: OBJs with EVENT LISTENERS
// add new property
europacific.planes = 300;
europacific.buyPlane = function () {
  console.log(this); // points to <button> w/out .bind
  this.planes++;
  console.log(this.planes); //NaN without .bind.
};
// europacific.buyPlane();
const buyPlaneBtn = document.querySelector('.buy');
buyPlaneBtn.addEventListener('click', europacific.buyPlane.bind(europacific));
// THIS always points to the element on which the handler function is attached to.
// handler: europacific.buyPlane
// attached to : buyPlaneBtn

// We need this to point to the OBJECT
// call or bind?
// we need to pass a function, not call --> bind

// PARTIAL APPLICATION = PRESET PARAMETERS
// not interested in THIS keyword but still use .BIND
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 200));

// Create one tax function always used.
const addGST = addTax.bind(null, 0.1);

// null = don't need THIS keyword
//  addGST = value + value * 0.1;

console.log(addGST(100));

// Challenge: Rewrite using the technique: function returns another function.
const taxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const auTax = taxRate(0.1);
console.log(auTax(100));
