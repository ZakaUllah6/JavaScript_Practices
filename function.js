// function averageOf4Numbers(nr1, nr2, nr3, nr4) {
//   return (nr1 + nr2 + nr3 + nr4) / 4;
// }

// console.log(averageOf4Numbers(11, 9, 33, 28));

//Write a JavaScript function that reverses a number.
function reverseNumber(num) {
  const reversedString = num.toString().split("").reverse().join("");
  const reverseNumber = parseFloat(reversedString);

  return Math.sign(num) * reverseNumber;
}

console.log(reverseNumber(123456789));
