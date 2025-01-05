"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const zaka = new Person("Zaka", 1997);
console.log(zaka);

// 1. New f} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const malidta = new Person("Malidta", 2999);
const jonas = new Person("Jonas ", 1988);

console.log(malidta, jonas);

console.log(jonas instanceof Person);
console.log(malidta instanceof Person);
console.log(zaka instanceof Person);
