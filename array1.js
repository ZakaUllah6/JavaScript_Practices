const friends = ["Zaka", "Tayyab,", "Ahmad", "Shan Zeb"];

console.log(friends);

const ot = friends.map((currentElement, index) => currentElement + " " + index);

console.log(ot);

const age = function (years) {
  return 2037 - years;
};

const years = [1999, 1988, 1976, 1966];

console.log(age(years[0]));

// Pushing Array

friends.push("Shahzad");

console.log(friends);

//adding a new element in a array in starting
friends.unshift("Younas");
console.log(friends);

//Remove the element from the array

friends.pop();
console.log(friends);

//Remove the first element of array

friends.shift();
console.log(friends);

//Checking the value index in array

console.log(friends.indexOf("Ahmad"));
console.log(friends.indexOf("Shahzad"));

//checking the value its includes in array

console.log(friends.includes("Ahmad"));
console.log(friends.includes("Zaka"));

if (friends.includes("Ahmad"));
console.log("Yes you can also apply condition with .include function");
