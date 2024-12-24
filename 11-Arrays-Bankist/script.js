"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// const calcPrintBalance = function (acc) {
//   const balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
//   labelBalance.textContent = `${balance}€`;
// };
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(incomes);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  // console.log(outgoing);
  labelSumOut.textContent = `${outgoing}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((deposit) => deposit > 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcPrintBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

//Event Hanlder

// btnLogin.addEventListener("click", function (e) {
//   e.preventDefault();

//   currentAccount = accounts.find(
//     (acc) => acc.userame === inputLoginUsername.value
//   );
//   console.log(currentAccount);
// });
// //
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;

    //Clear Input field
    inputLoginUsername.value = inputLoginPin.value = " ";
    inputLoginPin.blur();

    // // Display movements
    // displayMovements(currentAccount.movements);
    // // Display balance
    // calcPrintBalance(currentAccount);
    // // Display summary
    // calcDisplaySummary(currentAccount);

    //Update UI
    updateUI(currentAccount);
  }
});
//
//Transfer Money one account to another account

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  // if (
  //   amount > 0 &&
  //   receiverAcc &&
  //   currentAccount >= amount &&
  //   receiverAcc?.username !== currentAccount.username
  // ) {
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     console.log(index);
//   }
// });

// btnLoan.addEventListener("click", function (e) {
//   e.defaultPrevented();

//   const amount = Number(inputLoanAmount.value);

//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov >= amount * 0.1)
//   ) {
//     //pushing the amoun to Array
//     currentAccount.movements.push(accounts);
//     //update the UI
//     updateUI(currentAccount);
//   }
// });

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

const euroToUSD = 1.1;

const totalDepositUsd = account1.movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUSD)
  .reduce((acc, curr) => acc + curr, 0);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter Method
// const withdrawal = account1.movements.filter((mov) => mov < 0);
// console.log(withdrawal);

// // Reduced Method
// const balance = account1.movements.reduce(function (acc, curr, i, arr) {
//   console.log(`the current acc ${acc} and the current value ${curr}`);
//   return acc + curr;
// }, 0);
// console.log(balance);
/* const dogs = [2, 5, 3, 6, 7, 1, 3, 2, 7, 8];

// const dogsAge = function (dogs) {
//   dogs.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(
//         `the dog age ${
//           i + 1
//         }: ${age} years greater or equall to 3 so its will adult`
//       );
//     } else {
//       console.log(`${i + 1}:${age} years old its puppy`);
//     }
//   });
// };
// dogsAge(dogs);

// const movementsToUsd = account1.movements.map((movements) => movements * 1.1);
// console.log(movementsToUsd); */

//Find The maxmium value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log("Creating the functionality ");
// console.log("Banking app ");
// console.log("App");
// console.log("Creating");

//Flat
const arr = [1, 2, [4, 5], 6, 9];
console.log(arr.flat());

const arrDeep = [1, 2, [4, 7, [5, 9, 8]], 6, 9];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const allBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
console.log(allBalance);

const accountMovement = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log(accountMovement);

//sort the strings
const owner = accounts.flatMap((acc) => acc.owner).sort();
console.log(owner);

//Sort the number in the Asceding order

// const number = accounts
//   .flatMap((acc) => acc.movements)
//   .sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   });
// console.log(number);

//Short form of Ascending order
const number = accounts.flatMap((acc) => acc.movements).sort((a, b) => a - b);
console.log(number);
//Sort the number in the Desceding order

// const desNumber = accounts
//   .flatMap((acc) => acc.movements)
//   .sort((a, b) => {
//     if (a < b) return 1;
//     if (a > b) return -1;
//   });

//Short form of Descending order
const desNumber = accounts
  .flatMap((acc) => acc.movements)
  .sort((a, b) => b - a);
console.log(desNumber);
/////////////////////////////////////////////////
