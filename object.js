const zaka = {
  firstName: "Zaka",
  lastName: "Khan",
  year: 2025 - 1995,
  friends: ["Ahmad", "Sheraz", "Tayyab"],
};
console.log(zaka);
// Accessing object through dot notation we cant accessing compute variable for compute we should use object bracket notation
console.log(zaka.firstName);
console.log(zaka.friends);

// trying to accessing the object through Bracket notation
console.log(zaka["lastName"]);
const nameKey = "Name";

console.log(zaka["first" + nameKey]);
console.log(zaka["last" + nameKey]);

// How to add new objects in object through dot notation

zaka.location = "USA";
console.log(zaka);

//How to add new objects in object with the of bracket notation

zaka["job"] = "Software Engineering";

console.log(zaka);

console.log(
  `${zaka.firstName} Has ${zaka.friends.length} friends and has best friend is ${zaka.friends[2]}`
);

const ahmad = {
  firstName: "Ahmad",
  lastName: "Khan",
  height: 5.8,
  weight: 98,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

ahmad.calcBMI();

console.log("the ahmad BMI is = " + ahmad.bmi);

const khan = {
  firstName: "Zaka",
  lastName: "Khan",
  age: 2025 - 1997,
  weight: 87,
  height: 5.8,
  calcBMI: function () {
    const bmi = this.weight / this.height ** 2;
    return bmi;
  },
};
console.log("The khan BMi Is " + khan.calcBMI());

//for loops

for (let rep = 1; rep <= 10; rep++) {
  console.log(`weight lifting count ${rep} `);
}

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = 0; i <= jonasArray.length - 1; i++) {
  console.log(jonasArray[i]);
}
