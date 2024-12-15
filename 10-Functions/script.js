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

//The Call and Apply Methods

// const lufthansa = {
//   airline: "Lufthansa",
//   iatacode: "LH",
//   booking: [],
//   book(flightNum, name) {
//     console.log(`The Flight Number is ${flightNum} and the passenger name is ${name}
//       The airline is ${this.airline} the iatacode is ${this.iatacode}`);
//     this.booking.push({
//       flight: `the flight Number is ${flightNum} and ${name}`,
//     });
//   },
// };
// lufthansa.book("LH230", "Zaka");

const Lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      ` ${name} book a seat on ${this.airline} flight Nmber ${this.iatacode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iatacode} ${flightNum}`,
      name,
    });
  },
};
const book = Lufthansa.book;

const pIA = {
  airline: "PIA",
  iatacode: "PA",
  bookings: [],
};

const airBlue = {
  airline: "AirBlue",
  iatacode: "AB",
  bookings: [],
};

//Call Method

Lufthansa.book("LH230", "Zaka");
book.call(pIA, "236", "Tayyab Khan");
book.call(airBlue, "999", "Sheraz");
// console.log(pIA);
// console.log(airBlue);

//We can also use apply method instead using call methods
//but the apply can take only array
//But apply method is old methods mostly people dnt use it
const flighData = ["583", "Cooper Mary"];
book.apply(airBlue, flighData);

//Instead Apply we will use spread operator the spread other pull up the data

book.call(airBlue, ...flighData);
console.log(airBlue);
console.log(Lufthansa);

//Blind Method

const bookPIA = book.bind(pIA);
const bookAB = book.bind(airBlue);
const bookLH = book.bind(Lufthansa);

bookPIA("29", "Nawaz Sharif");

//Specify For Flight

const bookPIA23 = book.bind(pIA, 786);
bookPIA23("Asif Ali Zardari");
bookPIA23("Bilal");
bookPIA23("Maryam Nawaz");

//Immediately Invoked Function Expression IIFE

(function () {
  console.log("This Function will be never Run again ");
})();

// Arrow Immediately Invoked Function Expression

(() => {
  console.log("This Function also Run again");
})();
