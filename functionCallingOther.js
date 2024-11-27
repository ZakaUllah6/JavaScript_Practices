const cutter = function (fruits) {
  return fruits * 4;
};

const fruitProcessor = function (apple, mango) {
  const appleslices = cutter(apple);
  const mangoslices = cutter(mango);
  return `The juice Contains ${appleslices} Slice of Apple and ${mangoslices} Slices of Mango's`;
};

console.log(fruitProcessor(3, 4));

//Create a Function which print the number in reverse order.
for (const i = 0; i <= 10; i++) {
  console.log(i);
}

const reverseFunction = function () {};
console.log(reverseFunction(1));
