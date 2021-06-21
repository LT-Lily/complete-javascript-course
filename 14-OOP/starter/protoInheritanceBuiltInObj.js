// CONSTRUCTOR | PROTOTYPES
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties (each instance created will have these properties):
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this); // Person {}
};

const lily = new Person('Lily', 1995);
const nobu = new Person('Nobu', 1986);
const wasabiChuan = 'wasabi';

console.log(lily);
console.log(lily instanceof Person); //true
console.log(wasabiChuan instanceof Person); //true
console.log(typeof Person.prototype); // object
console.log(Person.prototype); // object

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; // this is set to the object that is calling the method. lily and nobu.

lily.calcAge();
nobu.calcAge();

console.log(lily);

console.log(lily.__proto__); // ⭐get the prototype of the object
console.log(lily.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(lily)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = 'Homosapien';
console.log(lily, nobu);
console.log(lily.hasOwnProperty('firstName')); // ✔true
console.log(lily.hasOwnProperty('species')); // false 🙅‍♀️
