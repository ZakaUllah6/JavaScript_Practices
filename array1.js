const friends = ["Zaka", "Tayyab,", "Ahmad", "Shan Zeb"];

console.log(friends);

const ot = friends.map((currentElement, index) => currentElement + " " + index);

console.log(ot);

const age = function (years) {
  return 2037 - years;
};

const years = [1999, 1988, 1976, 1966];

console.log(age(years[0]));
