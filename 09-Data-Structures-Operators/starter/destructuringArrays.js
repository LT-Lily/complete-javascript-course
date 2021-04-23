'use strict';

// Retrieve a variable without destructuring:
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring, we can declare all 3 at the same time.

const [x, y, z] = arr; // destructuring the array from the right side.
console.log(x, y, z); //=> 2 3 4
console.log(arr); //=>[ 2, 3, 4 ]

//===================================================
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order food by the index
  order: function (starterMenuIndex, mainMenuIndex) {
    //return the content of the array based on the given indexes.
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
};

// take items out of categories
// we do not need to take all elements out of the arr.

// const [first, second] = restaurant.categories;
// Read 1st & 3rd element
let [main, , secondary] = restaurant.categories;

console.log(main, secondary); //=>Italian Vegetarian

// SWAPPING variables
//w/out destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // =>Vegetarian Italian

// w/ destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // =>Vegetarian Italian

// Have a function return an array and immediately destruct the restult into diff variables. This allows returning mulitple values from a function.

// Order food.

const myOrder = restaurant.order(0, 1);
console.log(myOrder); // => [ 'Focaccia', 'Pasta' ]
// destructure it
const [starters, secondCourse] = restaurant.order(0, 1);
console.log(starters, secondCourse); // => Focaccia Pasta
// immediately creates 2 variables out of 1 function call.

// NESTED

const nested = [2, 4, [5, 6]];
// take 2, 5 and 6 out.
const [two, , nest] = nested;
console.log(two, nest);
// read all individual values - destructure within destructure
const [i, , [j, k]] = nested;
console.log(i, j, k);

// very nested
const veryNested = [2, 4, [5, 6, [7, 8, 9, 10]]];
// take out 4, 6, 9
const [, l, [, m, [, , n]]] = veryNested;
console.log(l, m, n);

//=======
// Default values
// Given: [8, 9] (Pretend we don't know the array.)
// We try to take 3 elements out of the array.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// If the value does exist in the array, it will be given the value of 1.
// This is useful when we get data from an API.
