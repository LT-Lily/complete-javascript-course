const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// create an array of deposits.
console.log('---filter---');

const deposits = movements.filter(movt => movt > 0);
console.log(deposits); //[ 200, 450, 3000, 70, 1300 ]

// forOf version
console.log('---forOf version---');
const depositsFor = [];
for (const movt of movements) if (movt > 0) depositsFor.push(movt);
console.log(depositsFor);

// create an array of withdrawals

const withdrawals = movements.filter(movt => movt < 0);
console.log(withdrawals);
