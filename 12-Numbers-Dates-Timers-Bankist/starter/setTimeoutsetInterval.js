/* setTimeout(
  (ing1, ing2) => {
    console.log(`Here's your pizza with ${ing1} and ${ing2}`);
  },
  3000,
  'olives',
  'spinach'
);
 */

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here's your pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);
console.log(`waiting...`);

// can cancel timer until delay has passed.
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// before 3 sec, cancel the timeout
