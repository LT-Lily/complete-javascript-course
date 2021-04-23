// A function that disappears right after it is called. Needed for async/await

// create a function and only execute it conce

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();
// this can still be run.
//=/===============
// do not assign to any variable
(function () {
  console.log('This will never run again');
  // test scope
  const isPrivate = 23;
})();
// console.log(isPrivate); // => ReferenceError: isPrivate is not defined

// =>Function statements require a function name
// Trick JS:
// Transform the whole thing into an expression:
// ( wrap in parenthesis )

// Syntax:
// (function(){
// })();

// Arrow Function IIFE
(() => console.log('This will ALSO never run again'))();

// Why was this invented?
// Functions create scopes
// One scope doe not have access to variables from an inner scope.
// INNER scope will have access to a variable outside(global scope), not the other way around.
// All data defined inside a scope is PRIVATE. Data is ENCAPSULATED
// For hiding variables ==> SCOPES are a good tool. This is why IIFE were invented.
// Not a JS feature, just used by developers.

// What also creates a scope in ES6?
//  variables declared with LET or CONST create their own scope inside a block.
{
  const inAccessible = 23; // cannot be accessed
  var notPrivate = 24;
}
// console.log(inAccessible);
console.log(notPrivate); // cannot be accessed

// IIFE is rarely used. If all we want to do is create a new scope for data privacy, just create a new block. No need to create a new function to create a new scope, unless we want to use var for variables.
// Use Case:
// Executing the function ONCE

// Store IIFE in a variable - returns function's return value
var result = (function () {
  var name = 'Lily';
  return name;
})();

console.log(
  `Storing a IIFE in a variable results in the return value of: "${result}"`
);
