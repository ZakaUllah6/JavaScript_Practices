const cutter = function (fruits) {
  return fruits * 4;
};

const fruitProcessor = function (apple, mango) {
  const appleslices = cutter(apple);
  const mangoslices = cutter(mango);
  return `The juice Contains ${appleslices} Slice of Apple and ${mangoslices} Slices of Mango's`;
};

console.log(fruitProcessor(3, 4));
