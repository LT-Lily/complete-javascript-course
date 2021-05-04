const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order delivery for ${address}:
    at ${time}.
    Order: 
      ${this.starterMenu[starterIndex]}
      ${this.mainMenu[mainIndex]}`);
  },
};
//1. pass this object into orderDelivery() to destructure
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// test default values
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
});
// destructuring objects
const { name, openingHours, categories } = restaurant;
// 3 new variables created based on restaurant object.
console.log(name, openingHours, categories);
// give them new variable names. useful when dealing with 3rd party data.
//
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// default values for properties that does not exist.

//restaurant.menu // undefined. no menu.

// setting the default value to an empty array. Return an empty array if property does not exist.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }; // destructure this.
({ a, b } = obj); //SyntaxError: Unexpected token =

console.log(a, b); // => 23, 7.     Overriden.
// x const { a, b} <- a & b are already declared.
// ERROR
// When starting a line with { } JS expects a code block
// cannot assign anything to a code block like that.
// wrap it all in praenthesis.
// ===============================================================
// NESTED objects

// retrieve Friday from Opening hours. One called open, close
const {
  fri: { open: o, close: c }, // renamed variable to o and c
} = openingHours;
console.log(o, c); //=>11 23

// Practical application of destructuring.
// in JS: functions with a lot of parameters. Hard to  know the order.
// pass an object into the function, function will destructure the object.
