const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// convert to USD

const euroToUsd = 1.1;
// multiple each element by 1.1
console.log('---More in line with FUNCTIONAL PROGRAMMING--');

const movementsUSD = movements.map(movement =>
  Math.trunc(movement * euroToUsd)
);

console.log(movementsUSD);

/*
[
   220,  495, -440,
  3300, -715, -143,
    77, 1430
]
*/

// forOf version
console.log('----for OF version--');
const movementsUSDFor = [];
for (const movt of movements)
  movementsUSDFor.push(Math.trunc(movt * euroToUsd));
console.log(movementsUSDFor);
/*
[
   220,  495, -440,
  3300, -715, -143,
    77, 1430
]
*/

const movtDescriptions = movements.map(
  (movt, i) =>
    `Transaction # ${i + 1}. You have ${
      movt > 0 ? 'withdrawn' : 'deposited'
    } ${Math.abs(movt)}`
);

console.log(movtDescriptions);

// Note: the .map method calls the callback function.
// forEach method creates SIDE EFFECTS. (Each action visible in the console.)
// no SIDE EFFECTS with .map in each iteration.
// SIDE EFFECTS - (Functional Programming CONCEPT)
