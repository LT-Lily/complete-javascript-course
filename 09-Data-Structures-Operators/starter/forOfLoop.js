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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// NO INDEX
// for (const item of menu) console.log(item);
// can still use continue and break keywords.

// other ways - cannot

// To get the index using a for of loop

// OLD WAY
// for (const [i, element] of menu.entries()) {
//   console.log(`${item[0] + 1}. ${item[1]}`);
//   // item is an array, just destructure it.
// }

// NEW WAY:     Destructure.
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}. ${element}`);
}

// returns => [ 0, 'Focaccia' ]

// console.log(menu.entries()); // => Object [Array Iterator] {}
// * Understand at the end of the course

// console.log(...menu.entries());
// =>
/*

[ 0, 'Focaccia' ] [ 1, 'Bruschetta' ] [ 2, 'Garlic Bread' ] [ 3, 'Caprese Salad' ] [ 4, 'Pizza' ] [ 5, 'Pasta' ] [ 6, 'Risotto' ]

*/
