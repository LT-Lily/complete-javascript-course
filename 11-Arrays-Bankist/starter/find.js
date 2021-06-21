const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// TEST DATA
const account1 = {
  owner: 'Lily Tan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Nobuyuki Ueno',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Wasabi Ueno',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Pug Ueno',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// returns 1st element in array that satisfies condition

const firstWithdrawal = movements.find(movt => movt < 0);
console.log(firstWithdrawal);
// -400

// .filter
// returns all elements that match condition [ARRAY]

// find
// returns first element that matches (ELEMENT ITSELF)
// USE FOR LOGIN FUNCTION
// Get acc where owner is Lily
const account = accounts.find(acc => acc.owner === 'Lily Tan');
console.log(account);
/* {
    owner: 'Lily Tan',
    movements: [
       200,  450, -400,
      3000, -650, -130,
        70, 1300
    ],
    interestRate: 1.2,
    pin: 1111
  } */
