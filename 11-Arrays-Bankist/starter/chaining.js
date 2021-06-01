const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// get a movement DEPOSITS and convert EUR to Dollars

// PIPELINE
const totalInDollars = movements
  .filter(movt => movt > 0)
  .map(movt => movt * eurToUsd)
  .reduce((accumulator, currentVal) => accumulator + currentVal, 0);

console.log(totalInDollars);
