// The filter function returns only those elements of the array that meet a passed condition parameter.
// again, this does not change the original array

let array1 = [10, 20, 30, 40, 50, -7, 60, 70, 80, 90, -1, -3, 5];

const filteredArray = array1.filter((value) => {
  return value >= 0;
});
console.log(filteredArray);

let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const filteredArray2 = array2.filter((value) => {
  return value > 50;
});
console.log(filteredArray2);
