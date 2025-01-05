"use strict";

const Person = function (firstName, birthYear) {
  console.log(this);
};

const zaka = new Person("Zaka", 1997);
