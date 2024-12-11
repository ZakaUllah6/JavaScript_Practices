"use strict";

const bookings = [];

const createBooking = function (flightNum, numPessenger = 1, price = 199) {
  const booking = {
    flightNum,
    numPessenger,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};
createBooking("Lh123");
