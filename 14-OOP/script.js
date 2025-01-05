"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const zaka = new Person("Zaka", 1997);
console.log(zaka);
