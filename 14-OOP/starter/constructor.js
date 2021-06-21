// CONSTRUCTOR | PROTOTYPES
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties (each instance created will have these properties):
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this); // Person {}

  // ❌👎Never create a method inside a constructor function. Each instance created would need to carry this function.
  // 👉Solution: USE 👥PROTOTYPAL INHERITANCE instead. - Person.prototype.calcAge
  /* ❌this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }; ❌*/
};

const lily = new Person('Lily', 1995);
const nobu = new Person('Nobu', 1986);
const wasabiChuan = 'wasabi';

console.log(lily);
console.log(lily instanceof Person); //true
console.log(wasabiChuan instanceof Person); //true
// Person { firstName: 'Lily', birthYear: 1995 }

// 🆕 new calls Person function
// 4 Steps behind the scenes when calling with "new"
// 1. ➡ new {} is created
// 2. ➡ function is called 📞. "this" is set to newly created {object}. (in the execution c. of the Person function "this" -points to-> new {object})
// 3. ➡ new {} created is  🔗linked to prototype.
// Where does .__proto__ come from? HERE! (#3) Step 3 creates __proto__
// 4. ➡ the {object}(function) created in the beginning is automatically returned↩  from the constructor function. (function automatically return {})

// Use a constructor function to build an OBJECT using a FUNCTION
// A constructor func() is a normal function
// diff b/w  normal function vs constructor function : constructor function called with "new" operator
// can then use constructor function to create as many objectobjects with this function.
// an () => { } DOES NOT WORK AS A FUNCTION CONSTRUCTOR. It does not have own "this" k.w. we need "this."

// JS does not have Classes. Constructor functions have been used since the beginning to "simulate" classes to create objects..
// Constructor functions are not a feature of JS. It is a PATTERN ♒created by users.

///////////////
// PROTOTYPES
// Prototypal inheritance and delegations (see prev lectures): In summary:
/* 
  Each and every function in JS has a property called PROTOTYPE. This includes constructor functions.
  every OBJECT created by a certain CONSTRUCTOR function will get access to all the methods and properties that we define on the prototype property.
*/
//Syntax: Constructorfunction.property
// Person.prototype; <-- this is an object
// All OBJECTS created by constructor function will INHERIT(HAVE ACCESS) to all the methods that are defined on this prototype property.
console.log(typeof Person.prototype); // object
console.log(Person.prototype); // object
/* 
{constructor: ƒ}
calcAge: ƒ () <--!!!
constructor: ƒ (firstName, birthYear)
__proto__: Object */

// ✔👍
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; // this is set to the object that is calling the method. lily and nobu.

lily.calcAge();
nobu.calcAge();

// Why does this work?
// Any object always has access to properties and methods from its. The prototype of lily and nobu is Person.prototype.

// Check what is the prototype of an object:
// object.__proto__

// __proto__ property is created (in step 3 of "new") and set to the value of prototype property of the function that is being called.
// This is how JS knows internally that "lily" OBJECT is connected to Person.prototype.

// IMPORTANT ❗ Understand What is __proto__, prototype of the constructor, how they are all linked
console.log(lily);
/* 
Person {firstName: "Lily", birthYear: 1995}
birthYear: 1995
firstName: "Lily"
__proto__: <------------SEE HERE 👀
calcAge: ƒ ()                        ⭐
constructor: ƒ (firstName, birthYear)⭐
__proto__: Object                    ⭐
 */

console.log(lily.__proto__); // ⭐get the prototype of the object
console.log(lily.__proto__ === Person.prototype); //true
/* 📤 OUTPUT: the prototype of the lily OBJECT is ⭐the prototype property of the constructor function.⭐
{calcAge: ƒ, constructor: ƒ}
calcAge: ƒ ()
constructor: ƒ (firstName, birthYear)
__proto__: Object 
*/

// Confusing: ⁉❔❗❗❓
/*  Person.prototype ❌is not the PROTOTYPE of PERSON */
/*  Person.prototype ⭕is used AS the PROTOTYPE for all the OBJECTS that are created with the Person constructor function */

// Is this a prototype of another object?
// Understand what is the PROTOTYPE of WHAT OBJECT
console.log(Person.prototype.isPrototypeOf(lily)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
// think of .prototype as .prototypeOfLinkedObjects instead

// 👉👉👉 207. 2️⃣0️⃣7️⃣Set PROPERTIES 🏠 on a PROTOTYPE
Person.prototype.species = 'Homosapien';
console.log(lily, nobu);
// Not the OBJECT's (lily and nobu's) OWN properties. INHERITED.
console.log(lily.hasOwnProperty('firstName')); // ✔true
console.log(lily.hasOwnProperty('species')); // false 🙅‍♀️ <-- not inside lily OBJ. simply inherited (has access because of its PROTOTYPE).
/*
 Person {firstName: "Lily", birthYear: 1995}
birthYear: 1995
firstName: "Lily"
__proto__: ⭐
calcAge: ƒ ()
species: "Homosapien" 👈👈👈👈👀🆕🏠
constructor: ƒ (firstName, birthYear)
__proto__: Object 
*/
/* 
Person {firstName: "Nobu", birthYear: 1986}
birthYear: 1986
firstName: "Nobu"
__proto__:⭐
calcAge: ƒ ()
species: "Homosapien" 👈👈👈👈👀🆕🏠
constructor: ƒ (firstName, birthYear)
__proto__: Object 
*/

// 👉👉👉 2️⃣0️⃣8️⃣ PROTOTYPAL INHERITANCE / DELEGATION
/* 
If a function cannot be found in an OBJECT itself, JS will look into the __proto__
lily.calcAge() <- the lily OBJECT inherited the calcAge method from its PROTOTYPE /
it delegated the functionality --> to its prototype.
➕Advanages: 
 🚅⏲👍 Many objects can be created. The function is only created ONCE.


 lily.calcAge () 

 lily is connected to a prototype. 
 🦸‍♀️🦾The ability of 👀looking up methods and properties in a prototype = PROTOTYPE CHAIN ⛓🔗🔗🔗

 lily 📦OBJ 🔗 PROTOTYPE ==> PROTOTYPE CHAIN 
 */

//  THE PROTOTYPE CHAIN ⛓🔗🔗🔗
// Series of links between objects, linked through PROTOTYPES. (Similar to the SCOPE chain)
/* 
❗ EVERY OBJ📦 in JS HAS A PROTOTYPE.
Person.prototype is an OBJ📦 
👉 Person.prototype HAS A PROTOTYPE.
What is the PROTOTYPE of Person.prototype?
 ⭐Object.prototype
 (SYNTAX reminder -CONSTRUCTOR👷‍♂️function.property)
  👉 CONSTRUCTOR FUNCTION = Object (* Usually the TOP 🗻of chain🔗 --> PROTOTYPE of OBJ📦 = NULL⛔ --> 🔚END of PROTOTYPE CHAIN ⛓🔗 )
  logic 🧠: lily is built with Person()👷‍♂️  👉 👷‍♂️() = Person
 Why?
 Person.prototype is just a simple object. It was built by the BUILT IN🔧 CONSTRUCTOR👷‍♂️function. 
 The Constructor function is the function called behind the scenes 🎭 when creating an object literal: 🥓 {...}🥓 === new Object(.....)
 🥓{} 🥓curly braces are a shortcut to writing a new object

*/

/* 
  The Prototype Chain is similar to the Scope chain -

SCOPE chain = whenever JS can find a certian variable in a certain scope ---> looks up  NEXT ⏭ VAR in the scope chain 🔗🔭👀🔍
 -> works with scopes

PROTOTYPE CHAIN - whenever JS can find a certain PROPERTY or METHOD in an OBJECT --> 🔭👀🔍 looks up NEXT ⏭ prototype in the PROTOTYPE🔗 to see if it can find it there 🔍
 -> properties, methods, objects
*/

// Method lookup 🔭👀🔍
// lily.hasOwnProperty("name")
// JS will find called method on the method itself.
// .hasOwnProperty <- is it in the lily object?
// No --> is it in lily's __proto__? --> NO --> ⬆👆↗ moves up PROTOTYPE CHAIN.
// NEXT ⏭: What is the PROTOTYPE of Person.prototype? Object.prototype
// Object has .hasOwnProperty
// * Notes object is INHERITED from Object.prototype through the PROTOTYPE CHAIN

// Gets interested when adding INHERITANCE OBJ<-inherits->OBJ
// Eg. Student<-inherits from Person
