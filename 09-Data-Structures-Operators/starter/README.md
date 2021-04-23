Destructuring Assignment: Requirement for React

Built in Data structures and Modern Advanced operatures

```
Destructuring Arrays
```

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

FEATURE: set default variables for variables when extracting them.

- We don't know the length of the array.
- Unpacking arrays with positions that don't even exist.

Nested Arrays

Self Quiz

Given:
const veryNested = [2, 4, [5, 6, [7, 8, 9, 10]]];

Give me 4, 6, 9
#destructuringwithindestructuring

---

Summary:

- Destructuring:
- Skipping values
- Swapping
- Destructuring nested arrays
- # Setting default values if we don't know the length of the array.
  ===========================================

# Destructuring Objects

- Don't need to manually skip elements like in an array.
- The order of the objects doesn't matter.
  Useful when dealing with result of an API call (getting data from another web application. Data usually comes in the form of OBJECTS.)

What if we wnat the variable names to be different to property names?
SYNTAX:
const { propertyName: customVariableName} = nameOfObject;

EG:
const {
name: restaurantName,
openingHours: hours,
categories: tags,
} = restaurant;

Set Default Value

- Useful when:
- Don't know what the data will look like. No hard coded data. GET data from somewhere else.
  const { menu = [], starterMenu: starters = [] } = restaurant;
  return an empty array if it doesn't exist.
  renaming the star

# Mutating variables while Destructuring OBJECTS

// (swapping)

When starting a line with { }, JS expects a code block.
You cannot assign anything to a code block like that.
// wrap it all in parenthesis.

WRONG:
{ a, b } = obj; //SyntaxError: Unexpected token =
CORRECT: :
` `
({ a, b } = obj); //SyntaxError: Unexpected token =
` `

# NESTED OBJECTS

Spread Operator
Expand and array into all its elements. Unpacking at one.

const arrToBeExpanded = [7,8,9]
create a new element with some at the beginning.
Manually:
const badNewArr = [1,2, arr[0], arr[1], arr[2]]; XX
console.log(baddNewArr)

ES6: Spread operater
const newArr = [1,2, ...arrToBeExpanded] ... expand into original elements.

USE CASE of Spread Operator:

- To create shallow copies of arrays
- Merge 2 arrays together

Spread Operator works on all ITERABLES
ITERABLES:
Eg. arrays, strings, maps, sets
BUT NOT OBJECT (available since ES2018 - see below)

Note:
The spread operator can ONLY be used to:

- build arrays
- pass values into a function

// prompt is a way to intput data or cells

Spread Operator: OBJECTS

=================================

# Rest Pattern & Parameters

Looks exactly like the spread operator.
Same syntax. BUT Does the opposite

// Spread Operator: use cases build arrays, pass value to function (UNPACK)
// Rest Pattern to collect multiple elemnts and condense them into an array (PACK into an array)

LEFT: destructuring assignment and REST on the left = RIGHT: SPREAD on the right
// REST on the left (collect the REST unused into a variable ...otherFood)
const [pizza, , risotto, ...otherFood] = [
...restaurant.mainMenu,
...restaurant.starterMenu,
];

RULE OF THUMB:

- THE REST SYNTAX MUST BE LAST
  The REST syntax collects all of the elements AFTER the LAST variable. This is so JS knows WHEN to collect the REST of the array. It DOES NOT include the skipped elements.
- THERE MUST ONLY BE ONE REST IN ANY DESTRUCTURING ASSINGMENT

console.log(...restaurant.mainMenu, ...restaurant.starterMenu);
//=> Pizza Pasta Risotto Focaccia Bruschetta Garlic Bread Caprese Salad
take skipped take ...otherFood

In OBJECTS:
The REST Collected into OBJECTS instead of into an Array.

The REST takes multiple values and then packs them into ONE ARRAY
// REST PARAMETERS
// rest arguments
const add = function (...numbers) {
console.log(numbers);
};

add(8, 2, 5, 3, 2, 1, 4); // =>[ 8, 2, 5, 3, 2, 1, 4 ]

SUMMARY:

SPREAD & REST are OPPOSITES
LEFT REST = RIGHT SPREAD
SPREAD - EXPAND/UNPACKS [], strings, maps (iterables) execept OBJ(until ES2018)
REST - COMPRESS/PACKS - into [] or {}

Subtle distinction to know when and where to use Spread or Rest:
Spread takes the place of where we would otherwise write values separated by a commma.
Rest is used where we would normally write variable names, separated by commas not values separated by commas.

===================================================================================================

for-of-LOOP

console.log(menu.entries()); // => Object [Array Iterator] {}

- Understand at the end of the course

// console.log(...menu.entries());
// =>
[ 0, 'Focaccia' ] [ 1, 'Bruschetta' ] [ 2, 'Garlic Bread' ] [ 3, 'Caprese Salad' ] [ 4, 'Pizza' ] [ 5, 'Pasta' ] [ 6, 'Risotto' ]

OLD WAY:

for (const item of menu.entries()) {
console.log(`${item[0] + 1}. ${item[1]}`);
}
// item is an array, just destructure it.

NEW WAY:

for (const [i, element] of menu.entries()) {
console.log(`${i + 1}. ${element}`);
}
======================================
// restaurant object is an OBJECT LITERAL
// LITERALLY wrote it in code using {}

ES6 Introduced 3 ways to write object literals
METHOD 1: save obj in obj OUTSIDE but put in another obj
METHOD 2: Get rid of keyword: function (Personal preference)
Writing methods. No longer need to create a property and then set it to a function expression
eg: order: function() {}

METHOD 3: Property names can be computed
Can compute(calculate) property names instead of writing manually and literally

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

======================================
STRINGS
Strings 1:
Strings 2:
.includes()
.replace()
.toLowerCase
.toUpperCase
.trim
.slice

Strings 3:
split("") // divider string
slice(begin, end)

If STRINGS are primitives, why do they have methods?
Shouldn't they only be available on objects such as arrays?
JS is smart. Behind the scences:
Whenever a method is called on a string, JS will automatically convert STRING PRIMITIVE -TO-> STRING OBJECT with the same content. The methods are then called on that OBJECT.
Process is referred to as "BOXING". Takes string, puts in box which is th e object

call method on string --> convert to object --> back to string (regular string primitive)

All string methods return primitives even if called on a string OBJECT.

STRINGS 3

Padding a String - to add a number of characters to a string until the string has a certain desired length
