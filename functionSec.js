// function logger() {
//   console.log("My Name is Zaka");
// }

// //calling function //invoking Function //Running Function
// logger();

function fruitProcessor(mango, banana) {
  console.log(mango, banana);
  const juice = `The is Juice Contains ${mango} Mango's and ${banana} banana's `;
  return juice;
}

const mixJuice = fruitProcessor(4, 5);
console.log(mixJuice);
