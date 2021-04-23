const greet = function (greeting) {
  return function (name) {
    //greeterHi
    console.log(`${greeting} ${name}`);
  };
};
const greeterHi = greet('Hi');
// greeter is now a FUNCTION
greeterHi('Lily');
greeterHi('Nobu');

// Works because of a CLOSURE.

// Do it in one go
greet('Hello')('Wasbi-chan');
//function | immediatelycall ('Wasbi-chan') <_ argument of function

// Functions returnign other functions:
// Useful: FUNCTIONAL PROGRAMMING (End of course)

// / Refactor (ES6)
// one arrow function returning another arrow function
const greetArr = greeting => nom => console.log(`${greeting} ${nom}`);
greetArr('Hello')('Wasbi-chan');
