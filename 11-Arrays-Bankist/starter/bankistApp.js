'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Lily Tan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovts = movements => {
  containerMovements.innerHTML = '';
  // create row in each iteration
  movements.forEach((movement, i) => {
    const transactionType = movement > 0 ? 'deposit' : 'withdrawal';
    const movementRowHTML = `
    <div class="movements__row">
      <div class="movements__type movements__type--${transactionType}">${
      i + 1
    }${transactionType}</div>
          <div class="movements__value">${movement}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', movementRowHTML);
  });
};
// philosophy: each function should receive the data that it should work with instead of using a global variable
const createUsername = accounts => {
  // map or forEach?just modify objects that already exists.
  accounts.forEach(acc => {
    // forEach - produce SIDEEFFECT w/out returning anything.
    acc.username = acc.owner // new property created
      .toLowerCase()
      .split(' ') // ["lily", "tan"]
      .map(userN => userN[0])
      .join('')
      .toUpperCase();
  });
};
createUsername(accounts);

// Did not do like tutor!
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplayTotalBalance = account => {
  account.balance = account.movements.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    0
  );
  labelBalance.textContent = `${account.balance}`;
};
// Calculate Totals: IN | OUT | INTEREST

const calculateDisplayTotals = movements => {
  const ins = movements
    .filter(movt => movt > 0)
    .reduce((acc, currentVal) => acc + currentVal, 0);
  labelSumIn.textContent = `💲${ins}`;

  const outs = movements
    .filter(movt => movt < 0)
    .reduce((acc, currentVal) => acc + currentVal, 0);
  labelSumOut.textContent = `💲 ${Math.abs(outs)}`;

  // const interest: 1.2% payed each deposit
  // interest payed only if at least $1
  const interest = movements
    .filter(movt => movt > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((interest, i, arr) => {
      console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = interest;
};

//--FEATURE: Login--

// Event Handlers
let currentLoggedInUser;
// Hide Pin when typing
// after logged in emply loginForm.value
btnLogin.addEventListener('click', e => {
  e.preventDefault(); // prevent form from submitting
  //Check Username
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  currentLoggedInUser = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  console.log(currentLoggedInUser);
  //Check Pin
  // console.log(typeof inputLoginPin.value); ==> STRING. convert to Number()
  // OPTIONAL CHAINING - ?.   .pin will only be read if currentLoggedInUser exists.

  if (currentLoggedInUser?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message of CURRENTUSER
    // replace textContent in labelWelcome
    labelWelcome.textContent = `Welcome back ${
      currentLoggedInUser.owner.split(' ')[0]
    }.`;
    containerApp.style.opacity = 100;
    // display movements, balance, summary
    displayMovts(currentLoggedInUser.movements);
    calcDisplayTotalBalance(currentLoggedInUser);
    calculateDisplayTotals(currentLoggedInUser.movements);
  }
});

// computer for each account holder.
// Get Initials for username
/* const user = 'Lily Tan';
const userName = user
  .toLowerCase()
  .split(' ') // ["lily", "tan"]
  .map(userN => userN[0])
  .join('')
  .toUpperCase();
console.log(userName);
 */
// userName.forEach(userN => {
//   const splitted = userN.split('');
//   const initial = splitted[0].toUpperCase();
//   console.log(initial.concat('', initial));
// });

// Notes:
// innerHTML or textContent?
//textContent prevents XSS attacks and has better performance - no need to parse HTML.
// BAD PRACTICE: to chain methods that mutate original array. Eg. SPLICE. Avoid mutating arrays.
