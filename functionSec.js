//its called function declarations

// function logger() {
//   console.log("My Name is Zaka");
// }

// //calling function //invoking Function //Running Function
// logger();

//Function Declaration
// Starting of function pass the value its call paramaters
// function fruitProcessor(mango, banana) {
//   console.log(mango, banana);
//   const juice = `The is Juice Contains ${mango} Mango's and ${banana} banana's `;
//   return juice;
// }
//when we calling the function or invoking the function at that time we pass the value its call arguments
// const mixJuice = fruitProcessor(4, 5);
// console.log(mixJuice);

// console.log(fruitProcessor(6, 8));

//Function declaration

function calculationAge(birthYear) {
  return 2025 - birthYear;
}

//Function Expression

const calculatioAge2 = function (birthYear) {
  return 2025 - birthYear;
};

console.log(calculationAge(1999));

const age = calculatioAge2(1997);
console.log(age);

//Arrow Functions

const daystoretirment = (birthYear) => {
  countYears = birthYear - 65;
  left = countYears * 365;
  return `You Have left to Retirment ${left} days`;
};

const days = daystoretirment(1999);
console.log(days);
