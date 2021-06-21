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
const calcDisplayTotalBalance = account => {
  account.balance = account.movements.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    0
  );
  labelBalance.textContent = `${account.balance}`;
};
// Calculate Totals: IN | OUT | INTEREST

const calculateDisplayTotals = account => {
  const ins = account.movements
    .filter(movt => movt > 0)
    .reduce((acc, currentVal) => acc + currentVal, 0);
  labelSumIn.textContent = `💲${ins}`;

  const outs = account.movements
    .filter(movt => movt < 0)
    .reduce((acc, currentVal) => acc + currentVal, 0);
  labelSumOut.textContent = `💲 ${Math.abs(outs)}`;

  // const interest: 1.2% payed each deposit
  // interest payed only if at least $1
  const interest = account.movements
    .filter(movt => movt > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
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
const updateUI = acc => {
  displayMovts(acc.movements);
  calcDisplayTotalBalance(acc);
  calculateDisplayTotals(acc);
};

btnLogin.addEventListener('click', e => {
  e.preventDefault(); // prevent form from submitting

  //Check Username
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

    // Display movements, balance, summary
    updateUI(currentLoggedInUser);
  }
  // Clear login form after submit
  inputLoginUsername.value = inputLoginPin.value = '';
  // Remove form keyboard focus()
  inputLoginPin.blur();
});

/*--FEATURE: Transfers--*/
// inputTransferTo
// inputTransferAmount
// btnTransfer

// create event listener on btnTransfer -
// get inputTransferTo.value, find user with matching name
// deposit inputTransferAmount.value to user.movements
//
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const userToBeTransfered = accounts.find(
    account => account.username === inputTransferTo.value
  );
  const amountToTransfer = Number(inputTransferAmount.value);
  console.log(userToBeTransfered);
  console.log(`Transferring to ${userToBeTransfered.username}`);
  console.log(`Amount to be transfered ${amountToTransfer}`);
  console.log(`Current logged in user ${currentLoggedInUser.username}`);

  // check username
  // if userToBeTransfered exists, -from current account, + to userToBeTransfered.
  // clear form after submit
  // amountToTransfer must be >0 && > currentUser balance
  // cannot transfer money to own account
  if (
    amountToTransfer > 0 &&
    currentLoggedInUser.balance >= amountToTransfer &&
    userToBeTransfered.username !== currentLoggedInUser.username &&
    userToBeTransfered?.username === userToBeTransfered.username
  ) {
    console.log('valid transfer');
    currentLoggedInUser.movements.push(-amountToTransfer);
    userToBeTransfered.movements.push(amountToTransfer);
    console.log(currentLoggedInUser.movements);
    currentLoggedInUser.balance = -amountToTransfer;
    calcDisplayTotalBalance();
    // render the new balance
    updateUI(currentLoggedInUser);

    console.log(currentLoggedInUser.balance);
    // console.log(currentLoggedInUser.movements);
  } else {
    alert('Invalid transfer.');
  }

  // clear form and remove focus()
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
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
