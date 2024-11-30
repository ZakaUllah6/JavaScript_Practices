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
