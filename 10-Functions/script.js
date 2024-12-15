"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPessenger = 1,
  price = 199 * numPessenger
) {
  const booking = {
    flightNum,
    numPessenger,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};
createBooking("Lh1231", "1");
createBooking("Bus1232", "2");
createBooking("Air1235", "5");

//

const flight = "LH123";
const zaka = {
  name: "Zaka khan",
  passport: 123456789,
};

const checkInn = function (flightNum, passenger) {
  flightNum = "LH789";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 123456789) {
    alert("Your Checked In ");
  } else {
    alert("Your not Checking In");
  }
};
// console.log(flight, zaka);
// console.log(flight);
// console.log(zaka);

const newPassoport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000000);

  console.log(person.passport);
};

console.log(newPassoport(zaka));
console.log(flight, zaka);

//Let's Try High Order Function
//Hello Java Script
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const firstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//A Function that receives another function as an argument, that returns a  new function, or Both
//This is High Order Function

const transfomer = function (str, fn) {
  console.log(`This is original string : ${str}`);
  console.log(`This is transfomer string: ${fn(str)}`);
  console.log(`The Function name is ${fn.name}`);
};

console.log(transfomer("hello This is JavaScript", oneWord));
console.log(transfomer("hello This is JavaScript", firstWord));

// Function Return Function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet("Hey");
greeter("Zaka");
greeter("Anis");

//Function return function through arrow function

const greeting = (greetings) => {
  return function (names) {
    console.log(`${greetings} ${names} `);
  };
};

const trying = greeting("Bye");
trying("Tayyab");
trying("Sheraz");

//
const greetArr = (greeting) => (name) => console.log(`${greetings} ${names} `);
greeter("Zaka");
// greeter("kHan");
// greeter("ali");
// greeter("Khzaifa");
// greeter("Afxal");
// greeter("Khaqan");
// greeter("jamal");
// greeter("faraz");
// greeter("lol");
// greeter("qurshi");
// greeter("Fa");
// greeter("niaz m");
// greeter("Khaqan");
