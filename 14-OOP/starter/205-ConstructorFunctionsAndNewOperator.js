'use strict';
// build an object using a function
// a constructor function is a completely normal function
// diff b/w normal function and constructor function: constructor function is called with the NEW operator.
// An arrow function does not work as a function constructor, because IT NDOES NOT HAVE ITs OWN .this KEYWORD.
// Only function declarations and function expressions

// this function produces an object for a person
const Person = function (firstName, birthYear) {
  //   console.log(this); // Person {}

  // this - is an empty object. Start seting properties to that object. CONVENTION: Give them the same names as the parameters we are passing in.
  // create a property and set it to a value
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const lily = new Person('Lily', 1995);
console.log(lily); // => Person { firstName: 'Lily', birthYear: 1995 }

console.log(typeof lily); //=> object

// Behind the scenes there are 4 steps
// 1. A new () empty object is created
// 2. The function is called. the THIS keyword will be set to this new empty object. (THIS POINTS TO new() OBJECT)
//  this happens because we are calling the function using the NEW operator here.
// 3. This newly created object is linked to a prototype (see lecture 206)
// 4. The object that is created in the beginning is automatically returned form the constructor function

// The trick to making the constructor function work is that it no longer needs to be empty.
