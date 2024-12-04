"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Start Counting!";
// document.querySelector(".number").textContent = 23;
// document.querySelector(".guess").value = 25;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// document.querySelector(".number").textContent = secretNumber;

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
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
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

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start Guesing....";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
