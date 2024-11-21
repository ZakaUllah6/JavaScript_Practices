var sum = [0, 1, 2, 3, 4];

const result = sum.reduce((prevVal, currentVal, index, array) => {
  return prevVal + currentVal;
});
console.log(result);
