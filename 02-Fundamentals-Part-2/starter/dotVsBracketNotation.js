"use-strict";

const lily = {
  firstName: "Lily",
  lastName: "Tan",
  age: 2020 - 1995,
  job: "full stack developer",
  favourites: ["Nobu", "Pug", "Wasabi chuan"],
};

// Scenario:
// Don't know which property to retrieve yet:

// const interestedIn = prompt(
//   "What do you want to know about Lily? Choose from firstName | lastName | age | job favourites"
// );

// console.log(lily[interestedIn]);

// Create new property
lily.location = "Melbourne";
lily["instagram"] = "lt.lily";

console.log(lily);

// Challenge: Write Lily has 3 favourites" dynamically and her all time love is Nobu
console.log(
  `${lily.firstName} is a ${lily.job} and has ${lily["favourites"].length} favourites, but her all time fav is ${lily["favourites"][0]}`
);

// Order Precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
