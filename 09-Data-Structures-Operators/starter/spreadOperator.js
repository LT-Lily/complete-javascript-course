// Menu
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

  // Real-world example
  orderPasta: function (ingr1, ingr2, ingr3) {
    console.log(`Here is your pasta containing 
		${ingr1}
		${ingr2}
		${ingr3}`);
  },
};

const arrToBeSpread = [7, 8, 9];
const newArr = [1, 2, ...arrToBeSpread];
console.log(newArr);
// => [ 1, 2, 7, 8, 9 ]

// Expand new array.
// Useful for: Writing an array, passing multiple elements into a function.
console.log(...newArr); // => 1 2 7 8 9
//====================================

// Create a new menu (add an item to the menu)
//						 `````expand this arr
const newMenu = [...restaurant.mainMenu, 'Spaghetti'];
console.log(newMenu);
// => [ 'Pizza', 'Pasta', 'Risotto', 'Spaghetti' ]
// ````````
// Put Spaghetti at the top of of the menu
const topMenu = ['Spaghetti', ...restaurant.mainMenu];
console.log(topMenu);
// => [ 'Spaghetti', 'Pizza', 'Pasta', 'Risotto' ]
//```````

// Use Cases:
//1. Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//2. Merge/join 2 arrays or more together
// eg. join Italian food and Japanese food
const jpMenu = ['Tonteki', 'Shabu shabu', 'TKG'];
const joinArrays = [...jpMenu, ...restaurant.mainMenu];
console.log(joinArrays);
// => [ 'Tonteki', 'Shabu shabu', 'TKG', 'Pizza', 'Pasta', 'Risotto' ]

// Iterables: maps, strings, sets but NOT OBJECTS
const str = 'Lily';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// => [ 'L', 'i', 'l', 'y', ' ', 'S.' ]
// pass value to a function
console.log(...str); // => L i l y

// Cannot use in template literals
// console.log(`${...str} Tan`) // Unexpectect token "..."

// Write a function that accepts multiple arguments then use spread operator to pass arguments
// Order pasta with 3 ingredients
// get the ingredients from a prompt window

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];
console.log(ingredients); // => (3) ["a", "b", "c"]
// call the orderPasta function
restaurant.orderPasta(...ingredients); // =>Here is your pasta containing
// cheese
// tomato
// parsley
// ES6

// Since ES2018 Spread Operators also work on OBJECTS even thoguh they are not iterables
// new information added to new object: foundedYear and founder
const newRestaurant = { foundedYear: 1995, ...restaurant, founder: 'Lily' };
console.log(newRestaurant);
// copy original object to a copy
const restaurantCopy = { ...restaurant };
// change restaurant name on the copy
restaurantCopy.name = "Lily's French Bistro";
console.log(restaurantCopy.name); // => Lily's French Bistro
console.log(restaurant.name); // => Classico Italiano
