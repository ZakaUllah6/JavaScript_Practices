"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Start Counting!";
// document.querySelector(".number").textContent = 23;
// document.querySelector(".guess").value = 25;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = " ❌ No Number Guessed.";
  }
  // When guess is true
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "The Guessed is correct! 🎉";
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game! 💥";
    }
  }
  //when guess too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game! 💥";
    }
  }
});
