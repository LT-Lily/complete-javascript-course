// Reduce: boil down array into 1 single value - str|object|integer|number.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// iterates over arr.
// arg 1: callback fnc, arg 2: initial value of accumulator
const balance = movements.reduce((accumulator, currentValue, i, arr) => {
  console.log(`Iteration #${i}: ${accumulator}`);
  return accumulator + currentValue;
}, 0);

console.log(balance); //

///////////////////////////////////////////////////////
console.log('---for version--');

let balance2 = 0;
for (const movt of movements) balance2 += movt;
console.log(balance2);

// SYNTAX:
/* 
const total = array.reduce((accumulator, currentValue, i, arr) => {
    return accumulator + currentValue;
  }, initialval accumulator); 
  */

// get max value of array
const max = movements.reduce((acc, currentVal, i) => {
  // acc will keep track of max val.
  return acc > currentVal ? acc : currentVal;
}, movements[0]);
console.log(max);
// What is the purpose of accumulator??
