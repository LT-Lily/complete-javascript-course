// Functions that accept callback functions

// String transformations
// replace all the spaces

// *(LOWER-LEVEL FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// generic function
// we will pass this into another function.
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}; //destructuring

// *HIGHER-order function. (takes in funct therefore higher-order)
// higher level of ABSTRACTION.
const transformer = function (str, funct) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${funct(str)}`); // LATER IS HERE
  // functions can have methods and properties.
  console.log(`Transformed by:
   ${funct.name}
   ==========`); // => returns the name of the generic function. -upperFirstWord
};

transformer('Javascript is great!', upperFirstWord);
transformer('Javascript is great!', oneWord);
// transform string passed int

// Callback functions:  upperFirstWord and oneWord
//  A Callback function is called a Callback function because we do not call it ourselves. We tell JS to call them LATER.

const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener('click', high5);
// Which is the higher-order function?
// .addEventListener

// Which is the callback function?
// high5

// EG
// Passing in a CALLBACK function into a .forEach method
['Nobu', 'Lily', 'Wasabi-chan'].forEach(high5);

// Why are callback functions used so much in JS?
// Adv: Easy to split up code into more reusable connected parts.
// Important adv: Callbacks allow us to create abstraction.
// Abstract = hide the detail of some code implmentation because we dont' care all about that detail. This allows us to think about problems at a higher more abstract level.
// See transformer function - does not care baout ow th efunction is transformed. Abstracted code into other functions. Only concerned with transoforming the input string itself.

// HIGHER-order function OPERATES at a HIGHER level of ABSTRACTION leaving details to low-level functions.
