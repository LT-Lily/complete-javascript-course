// Given: bank account data
// -ve = withdrawals | +ve = deposit
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//.forEach(currentElem, index,)
console.log('--forEach loop version--');
// cannot break out
movements.forEach((movement, i, arr) => {
  movement > 0
    ? console.log(`Transaction #${i + 1}. You have deposited ${movement}`)
    : console.log(`Transaction # ${i + 1}. You have withdrawn ${movement}`);
});

// for of loop
// use if need to BREAK out.
console.log('--for of loop version--');
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  // accessing counter variable
  movement > 0
    ? console.log(`Transaction #${i + 1}. You have deposited ${movement}`)
    : console.log(`Transaction # ${i + 1}. You have withdrawn ${movement}`);
}
