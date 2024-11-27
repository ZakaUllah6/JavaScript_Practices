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

// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const str1 = "Zaka";
// const str2 = str1.split("").reverse().join("");
// console.log(str2);

const checkPalindrome = function (str1) {
  const str2 = str1.split("").reverse().join("");
  console.log(str2);
  if (str1 == str2) {
    console.log("its palindrome");
  } else {
    console.log("its not palindrome");
  }
};
console.log(checkPalindrome("kayak"));
