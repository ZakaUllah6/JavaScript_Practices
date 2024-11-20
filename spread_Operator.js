//Find the maxmium number through use spread operator

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let unpack = Math.max(...number);
console.log(unpack);

//Find the minimum number

let number1 = [12, 34, 245, 345, 234, 1, 25, 2345, 234, 1234];
let min = Math.min(...number1);
console.log(min);

//concat two array

let fruits = ["apple", "mango", "banana", "stawberry"];
let vegatables = ["Lady Finger", "salad", "potato"];

let max = [...fruits, ...vegatables].join(",").toUpperCase();

console.log(max);
