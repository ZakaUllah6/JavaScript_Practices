"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `the order ${this.starterMenu[starterIndex]},
      and ${this.mainMenu[mainIndex]},
      the time of delivery is ${time},
      and the address is ${address}`
    );
  },
};

//Old method to combine two array with each other
const arr = [6, 7, 8];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badArr);

//Using Spread operator and combine two array

const newArr = [1, 2, 3, ...arr];
console.log(newArr);

//Print the array individually
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Biryani"];
console.log(newMenu);

//Copy array with help of spread operator

const newMainMenu = [...restaurant.mainMenu];
console.log(newMainMenu);

// joint 2 array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//For OF Loop

const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of mainMenu) {
  console.log(item);
}

//Print Index with For of Loop

for (const item of mainMenu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Rest Opertor
// rest operator repack the rest element in array
// rest operator

// restaurant.orderDelivery({
//   time: "11:40 am",
//   address: "325 Richardson",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //Array destructuring

// const arr = [2, 5, 7];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// //Array destructuring From Objects
// // Picking first two elements from array in objects

// let [first, second] = restaurant.categories;
// console.log(first, second);

// // Pick two elements from array but we want to skip element number 2 we need only 1 and 3 element.

// const [first1, , third] = restaurant.categories;
// console.log(first1, third);

// //Swiping the values in desturcturing array

// [first, second] = [second, first];
// console.log(first, second);

// // Receving 2 returns values from function
// console.log(restaurant.order(2, 0));
// const [starter, main] = restaurant.order(3, 1);
// console.log(starter, main);

// // How to do the Nested Array Desturcturing
// const arr1 = [2, 4, 6, [(4, 8, 9)]];
// const [a, , , b] = arr1;
// console.log(a, b);

// //Individual Values of Nested Array Destructured

// const arr2 = [5, 6, [4, 3]];
// const [i, , [j, k]] = arr2;
// console.log(i, j, k);

// //Object Distructuring

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //Assiging Name to Object and Distructuring

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values if the objects doesnt have the value

// const { main1 = [], starterMenu: starter1 = [] } = restaurant;
// console.log(main1, starter1);

// // Mutating the values in Objects

// let aa = 112;
// let ba = 120;

// const obj = { aa: 12, ba: 20, ca: 35 };
// ({ aa, ba } = obj);
// console.log(aa, ba);

// //Nesting Distructuring

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
