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
  passport: "123456789",
};

const checkInn = function (flightNum, passenger) {
  flightNum = "LH789";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 123456789) {
    alert("Your CheckIn");
  } else alert("wrong passport");
};
console.log(flight, zaka);
console.log(flight);
console.log(zaka);
