//Create a Function which print the string .

const printString = function (name) {
  for (i = 0; i <= name.length - 1; i++) {
    console.log(name[i]);
  }
  return name;
};
console.log(printString("Zaka"));

//Create a Function and console the string in reverse order

const reverseString = function (name) {
  for (i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
  }
  return name;
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
  return text;
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
  return str2;
};
console.log(checkPalindrome("kayak"));

// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const combinationOfString = function (str) {
  let result = [];

  for (i = 0; i <= str.length; i++) {
    for (j = 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};
console.log(combinationOfString("dog"));

// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const aplaOrder = function (str2) {
  const letter = str2.split("");
  const alpa = letter.sort().join("");
  return alpa;
};
console.log(aplaOrder("webmaster"));

/*5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

/* 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */
