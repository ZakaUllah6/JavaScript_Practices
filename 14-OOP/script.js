"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this beacuse its create deplicautes copies
  //   this.calcAge = function () {
  //     console.log(2025 - birthYear);
  //   };
};

const zaka = new Person("Zaka", 1997);
console.log(zaka);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const malidta = new Person("Malidta", 1999);
const jonas = new Person("Jonas ", 1988);

console.log(malidta, jonas);

console.log(jonas instanceof Person);
console.log(malidta instanceof Person);
console.log(zaka instanceof Person);

//Prototypes

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
zaka.calcAge();
jonas.calcAge();
malidta.calcAge();

// console.log(zaka);

//Classes in javaScript

class hello {
  constructor() {
    console.log("This is constructor Methods ");
  }
  message() {
    console.log("Hello World!");
  }
  stay() {
    console.log("try to stay");
  }
}
let a = new hello();
a.message();
a.stay();

// /console.log("Zaka");
