"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Start Counting!";
// document.querySelector(".number").textContent = 23;
// document.querySelector(".guess").value = 25;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = " ❌ No Number Guessed.";
  }
});
