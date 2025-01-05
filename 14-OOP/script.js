"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const zaka = new Person("Zaka", 1997);
console.log(zaka);

const malidta = new Person("Malidta", 2999);
const jonas = new Person("Jonas ", 1988);

console.log(malidta, jonas);
