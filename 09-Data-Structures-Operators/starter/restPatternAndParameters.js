// Menu

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
  // pizza needs at least one ingredient. Others are optional. For this, REST parameters are perfect.
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); // => tomato sauce
    console.log(otherIngredients); // =>[ 'mozarella', 'salami', 'olives', 'anchovies' ]
  },
};

// 1. DESTRUCTURING
// ----------------------
// spread review:

// right hand of '=' --> SPREAD
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
// left hand of '=' --> REST
console.log(a, b, others); // => 1 2 [ 3, 4, 5 ]
// takes REST (of the elements into the new array.)
// collects the elemetns that areunused in the destructuring asssignment.

// 3 dots on both side of the assignment operator:
// entire menu:
// take Pizza and Risotto out of the mainMenu
// destructuring assignment on the left = spread on the right

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, ...otherFood); // =>Pizza Risotto Focaccia Bruschetta Garlic Bread Caprese Salad

//Rest element must be last element

// Collect the REST into OBJECTS
// EG. Get Saturday, and create an object for the Weekdays
const { sat, ...weekdays } = {
  ...restaurant.openingHours,
};
// Saturday is put into its own variable.
console.log(weekdays);

// console.log({
//   ...restaurant.openingHours,
// }); // ES2018 spread syntax for OBJECTS (non-callable @@iterator)

// =======================
// 2. FUNCTIONS
// 2nd Usecase of Spread Operators:
//passing multiple arguments in a function.
// eg. restaurant.orderPasta(...ingredients);
// passed as individual arguments to a function

// REST operator does the opposite

// REST PARAMETERS
// This function accepts single values or an unpacked array
const add = function (...numbers) {
  // PACK
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4); // =>[ 8, 2, 5, 3, 2, 1, 4 ]

const x = [23, 5, 7];
add(...x); //UNPACK
// pass to add --> collected by ...numbers REST parameters

//=================
// Create a function to order pizza.

restaurant.orderPizza(
  'tomato sauce',
  'mozarella',
  'salami',
  'olives',
  'anchovies'
);
