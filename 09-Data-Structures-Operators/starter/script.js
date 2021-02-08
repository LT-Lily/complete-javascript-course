'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring method:
const [x, y, z] = arr;
console.log(x, y, z);

//original array not affected
console.log(arr);

let [main, , secondary] = restaurant.categories;

//simulating a food delivery application
//EG:
//The owner decides to switch the main and the 2nd category. Currently: primary is 'Italian' secondary is 'Vegetariann'

//Non destructuring method:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
//1. create a new array with 2 variables inverted
//the array on the right is destructured.
//let or const is not used. Just reassigning the values.

//Notes --------
//Way of unpacking values from an array or an object into separate variables.
//to break a complex data structure down into a smaller data structure like a variable.
//destructuring is used to retrieve elements from the array and store them into variables in a very easy way.

//----Recieve 2 return values from a function-----
// console.log(restaurant.order(2, 0));
//destructure
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//----------Nested Destructuring--------------
const nested = [2, 4, [5, 6]];
//return 1st value and 2nd array
//create variable using destructuring assignment
// const [i, , j] = nested;
// console.log(i, j); //--> 2[5, 6]

//return all values
// destructuring inside destructuring.
const [i, , [j, k]] = nested;
console.log(i, j, k); //-->2, 5, 6

//----Feature: If the value doesn't exists in the position, use the default values that we have set
// useful in the case when length of the array is unknown.
// ****USEFUL WHEN RETRIEVING DATA FROM API ****
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
