Built in Datastructures and Modern Advanced operatures

Destructuring Arrays
Destructuring: ES6 feature.
Destructuring is a way of unpacking values from an array or an object into separate variables.

- To breaking down a complex data structure into a smaller data structure - like a variable

What is destructuring used for?

- For arrays: Retrieve elements in a variable

Retrieve a variable without destructuring:
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

With destructuring, we can declare all 3 at the same time.
const [x, y, z] = arr // destructuring the array from the right side.
console.log(x, y, z);

The original array is unaffected.

Switch the main and secondary:
WITHOUT DESTRUCTURING:
// create temp var

const temp = main;
main = secondary;
secondary = temp;

WITH DESTRUCTURING:
// create an arr with both.
[secondary, main]

Order from a restaurant:

const myOrder = restaurant.order(0, 1);
console.log(myOrder); // => [ 'Focaccia', 'Pasta' ]

// destructure it
const [starters, secondCourse] = restaurant.order(0, 1);
console.log(starters, secondCourse); // => Focaccia Pasta
// immediately creates 2 variables out of 1 function call.

Nested Arrays

Self Quiz

Given:
const veryNested = [2, 4, [5, 6, [7, 8, 9, 10]]];

Give me 4, 6, 9
