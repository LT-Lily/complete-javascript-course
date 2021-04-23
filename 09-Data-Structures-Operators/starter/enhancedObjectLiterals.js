'use-strict';
// restaurant object is an OBJECT LITERAL
// LITERALLY wrote it in code using {}

// ES6 METHOD 1: save obj in obj OUTSIDE
// METHOD 2:
//  Get rid of keyword: function (Personal preference)
// Writing methods. No longer need to create a property and then set it to a function expression
// eg: order: function() {}

// METHOD 3: Property names can be computed
// Can compute(calculate) property names instead of writing manually and literally

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// take these property names here out

const openingHours = {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day ~ ${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);
// we still want the openingHours inside restaurant.
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // before ES6:
  // openingHours: openingHours,

  // ES6 Enhanced Object Literals (METHOD 1)
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
