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
