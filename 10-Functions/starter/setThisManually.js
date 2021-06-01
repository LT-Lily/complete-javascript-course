// Learning to set the "this" keyword manually, why we would want to do that

const jal = {
  airline: 'Japan Airline',
  iataCode: 'JAL',
  bookings: [],
  book(flightNo, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNo}`
    );
    // + new passenger to array.
    this.bookings.push({
      flight: `${this.iataCode}${flightNo}`,
      name,
    });
  },
};

const eual = {
  airline: 'European Airline',
  iataCode: 'EAL',
  bookings: [],
};

// call function
jal.book(239, 'Lily');
jal.book(123, 'Nobu');
console.log(jal);

const book = jal.book; // seperate function. Not the same method as in the object. "this" will point to undefined.
//DOES NOT WORK
// book(23, 'Wasabi'); // Wasabi booked a seat on undefined flight undefined23

// solution: book.call
// I want to book a JAL flight.--> this should point to jal
// If I want to book a European Airline flight, "this" should point to eual

// How to tell JS explicitly what "this" should be?
// 1. call 2. apply 3. bind
// A function is an object. OBJECTS have methods.

// set "this" keyword to jal
book.call(jal, 23, 'Wasabi'); //SYNTAX .call(functionThisShouldPoint, other args for book)
// We are not calling book function outselves. .call is calling book function with the "this" keyword set to jal. This allows manually and explicitly setting the "this" keyword of any function that we want to call. The other arguments are the arguments of the original function.
console.log(jal);

book.call(eual, 45, 'Tintin'); //SYNTAX .call(functionThisShouldPoint, other args for book)
//// Even though book() function is inside jal OBJECT, we can make "this" point to eual
console.log(eual);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'SAL',
  bookings: [],
};

// Apply is the same as call. The other arguments must be an array.
// Not as used anymore in modern JS. Use the Spread Operator.
const flightDataArray = [432, 'Mickey'];
book.apply(swiss, flightDataArray);
console.log(swiss);

// better way:
book.call(swiss, ...flightDataArray);

// EXPLICITLY DEFINE KEYWORD IN ANY FUNCTION WE WANT.

// bind
const bookEU = book.bind(eual); // will not call book. Instead, returns a new function where "this" will always be BINDED to eual
// use function
bookEU(123, 'Stephen Hawkings'); // looks like the normal function

// add extra arguments to bind. set in stone.
// PARTIAL APPLICATION = a part of the arguments of the original function are already set/applied.
const bookEU123 = book.bind(eual, 123); // presetting the 1st argument that book() requires. --> book(flightNo, name). flightNo is preset. bookEU123 only needs name now.
bookEU123('Lily');
