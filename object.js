const zaka = {
  firstName: "Zaka",
  lastName: "Khan",
  year: 2025 - 1995,
  friends: ["Ahmad", "Sheraz", "Tayyab"],
};
console.log(zaka);
// Accessing object through dot notation we cant accessing compute variable for compute we should use object expression
console.log(zaka.firstName);
console.log(zaka.friends);

// trying to accessing the object through object Expression method
console.log(zaka["lastName"]);
const nameKey = "Name";

console.log(zaka["first" + nameKey]);
console.log(zaka["last" + nameKey]);
