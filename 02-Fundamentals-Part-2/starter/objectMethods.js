"use-strict";

const lily = {
  firstName: "Lily",
  lastName: "Tan",
  birthYear: 1995,
  job: "full stack developer",
  favourites: ["Nobu", "Pug", "Wasabi chuan"],
  hasDriversLicense: true,
  // An FUNCTION attached to an OBJECT is a METHOD
  // IF A FUNCTION IS A VALUE IT CAN ALSO BE A PROPERTY

  //   calcAge: function (birthYear) {
  //     return 2020 - birthYear;
  //   }

  // Read the birth year directly from the object
  // The "this" keyword/variable is equal to the object on which the method is called (it is equal to the OBJECT calling the method). Who is calling the method?
  //   calcAge: function () {
  //     console.log(this);
  //     return 2020 - this.birthYear;
  //   },

  // Use "this" to CREATE a new property
  calcAge: function () {
    this.age = 2020 - this.birthYear;
    return this.age; //optional
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
console.log(lily.calcAge());
console.log(lily.age);
console.log(lily.age);
console.log(lily.age);
console.log(lily.getSummary());

// Return: Lily is a 26 year old fullstack dev with a driver's license

// Who is calling the method? The object that is calling the method is lily. Therefore "this"--> points to lily
// console.log(lily["calcAge"](1995));

// Function expression
// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
//   }

// Function declaration - WOULD NOT WORK IN AN OBJECT
// function calcAge(birthYear){

//}

// Need to call multiple times -->
// calculate once, store in object. Retrieve when needed.
