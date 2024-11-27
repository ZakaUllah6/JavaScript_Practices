//Create a Function which print the string .

const printString = function (name) {
  for (i = 0; i <= name.length - 1; i++) {
    console.log(name[i]);
  }
};
console.log(printString("Zaka"));

//Create a Function and console the string in reverse order

const reverseString = function (name) {
  for (i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
  }
};
console.log(reverseString("Khan"));

// create a function which print the numbers
// let p = 23423423;
// console.log(p);

// let number = 123456789;
// let text = number.toString().split(",").join("");
// console.log(typeof text);

// for (i = text.length - 1; i >= 0; i--) {
//   console.log(text[i]);
// }

// let number = 123456789;
const reverseNumber = function (number) {
  let text = number.toString().split(",").join("");
  for (i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
  }
};
console.log(reverseNumber(12345678999));
