'use strict';

console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2020 - birthYear);
//   console.log(this);
// };
// calcAge(1995);

const calcAge = birthYear => {
  console.log(2020 - birthYear);
  console.log(this);
};
calcAge(1995);
