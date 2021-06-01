# 128 Values vs References

Passing arguments into functions
Primitives VS Objects (Primitive Types vs Reference Types)
How they work in the context of functions:

In programming there are 2 terms used frequently whe dealing with functions:
// passing by value and passing by reference
// JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE (original value outside function can change).

- // JAVASCRIPT ONLY HAS PASS BY VALUE
  // For Objects, we do pass in a reference (the memory address of the object) but that reference is a VALUE. A value that contains a memory address.
  // We pass a reference--> function BY VALUE, NOT BY REFERENCE.
  ==========================
  ======================================================================================================================================

# 129 First-class and Higher-Order Functions

JS has First-class functions.
IMPORTANT FEATURE OF JS LANGUAGE:
JS treats functions as first-class citizens. This means that functions are simply treated as values.

# Why does JS work this way?

Functions are another type of OBJECT in JS.
Functions are values -> Objects are values too

Since Functions are values, what can we do with them?
STORING:

- store FUNCTION in variables
- store FUNCTION in object properties.
  PASSING:
- pass FUNCTION to other FUNCTIONS
  RETURNING:
- return FUNCTION FROM FUNCTIONS
  CALLING METHODS
- call methods on functions (functions called on functions)

const add = (a, b) => a + b;
const counter = {
value: 23,
inc: function(){this.value++;}
}

- pass functions as arguments to other functions

const greet= () => console.log("Hi Lily");
btnClose.addEventListener("click", greet);

- return function from another function
- functions have objects. objects have methods. Like, array methods. There are also FUNCTION METHODS. We can call a method on a function.
  Eg. .bind method

The fact that JS has first class FUNCTIONS --> we can write HIGHER-ORDER FUNCTIONS:

What is a Higher-Order Function?
A function that:

- 1. receives another function as an argument
     && OR
- 2. returns a new function

# 1. - receives another function as an argument

     const greet= () => console.log("Hi Lily");
     btnClose.addEventListener("click", greet);

# .addEventListener HIGHER-ORDER FUNCTION

why? --> recievs another function as an INPUT.
A function that recieves another function as an input is a HIGHER-ORDER function.

# greet CALLBACK FUNCTION

The function passed IN is a callback function. That is because the callback function will be CALLED BACK later by the HIGHER-ORDER FUNCTION.

The HIGHER-ORDER FUNCTION --calls--> CALLBACK FUNCTION

# 2. Function that returns a new function

    function count(){ <------ HIGHER ORDER FUNCTION
        let counter = 0;
        return function(){ <--returned function
            counter;
        };
    }

# What is the difference between FIRST-CLASS FUNCTIONS and HIGHER-ORDER-FUNCTIONS?

CONCEPT: First-class Functions
Just a feature that a programming language has or doesn't have. It means FUNCTIONS == VALUES. - There are no first-class functions in practice. It is just a CONCEPT.
Higher-order-functions
In practice: YES. Possible because a language supports FIRST-CLASS-FUNCTIONS.

======================================================================================================================================

# 130. Function Accepts Callback Functions

# Callback functions

# IMPORTANT !!!!!!

const transformer = function (str, funct) {
console.log(`Original string: ${str}`);
console.log(`Transformed string: ${funct(str)}`); // LATER IS HERE
// functions can have methods and properties.
console.log(`Transformed by: ${funct.name} ==========`); // => returns the name of the generic function. -upperFirstWord
};

transformer('Javascript is great!', upperFirstWord);
transformer('Javascript is great!', oneWord);

# EG

# lower level of abstraction

const high5 = function () {
console.log(`👋`);
};

# higher level of abstraction

document.body.addEventListener('click', high5);

===========================

# 131. Function RETURNING Functions

# 132. Call and Apply Methods

How to manually tell JS explicitly what "this" should be
// there are 3 function methods to do that

METHOD 1

- .call

  arg 1 = what "this" should point to
  arg 2/3/etc = all the other required arguments

  SYNTAX:
  book.call(pointToObject, 23, "Other", "Args")

METHOD 2

- .apply

  Same as .call.
  Difference:
  arg 1 = what "this" should point to
  arg 2 = ["array", 3, "data"]

  SYNTAX:

  - !!!not commonly used in modern javascript
    book.call(pointToObject, [23, "Other", "Args"])

  MODERN SYNTAX
  (preferred method)
  book.call(pointToObject, ...flightData)

METHOD 3

# 133

- .bind
  Set the "this" keyword for any function call.

  SYNTAX
  other arguments passed will be set in stone

Difference:
.bind DOES NOT immediately call the function. Instead, it returns a new function where the "this" keyword is bound. (It is set to whatever value we pass into .bind)

Situations to use .bind:

- Using OBJECTS together with EVENT LISTENERS

Remember: a function is a an object. Objects have methods.

======================================================

# 135 IIFE (Immediately Invoked Function Expressions)

Definition:
A JS function that runs as soon as it is defined.

SYNTAX:
(
function(){}
)();

If we assign an IIFE to a variable, the value of the variable stores the return value of the IIFE, not the function itself.

- The value within an IIFE is encapsulated.

var result = (function(){
var name = "Lily";
return name;
})();

# 136 Closures

Closures are not explicitly created. Happens automatically. Just recognise these situations.
