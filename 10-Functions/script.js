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
