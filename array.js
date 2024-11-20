// const fruits = ["mango", "apple", "banana", "cocount", "watermelon"];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// const name = "Zaka";

// for (let i = 0; i <= name.length - 1; i++) {
//   console.log(name[i]);
// }

// let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
// let myArray = myString.split("+");
// let arrayLength = myArray.length;
// myArray.push("lastItem");
// console.log(myArray);
// -------------------------------------------------

// Arrays 2
// Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
// Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem.

// ------------------------------------------------------

// let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
// let myArray = myString.split("+");
// let arrayLength = myArray.length;
// let final_Array = myArray.push("lastItem");

// for (list of myArray) {
//   console.log(list );
// }

// ----------------------------------------------

// Arrays 3
// For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

// Remove the last item in the array.
// Add two new names to the end of the array.
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
// Finally, join the array items together in a single string called myString, with a separator of "-".

// ---------------------------------------------------------

// let myArray = [
//   "Ryu",
//   "Ken",
//   "Chun-Li",
//   "Cammy",
//   "Guile",
//   "Sakura",
//   "Sagat",
//   "Juri",
// ];
// myArray.pop();
// myArray.pop();
// myArray.push("zaka");
// myArray.push("tayyab");

// for (let i = 0; i <= myArray.length - 1; i++) {
//   console.log(myArray[i] + " " + "(" + `${i}` + ")");
// }

// let myString = myArray.join("-");

// console.log(myString);

// -----------------------------------------------------
// For this array task, we provide you with a starting array listing the names of some birds.

// Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
// Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given Character
// --------------------------------------------------------

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

let number = birds.indexOf("Eagles");
birds.splice(2, 2);

const ebirds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
const finding = ebirds.filter((bird) => bird.startsWith("E"));
console.log(finding);
