"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Event listener for the "Check" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = " ❌ No Number Guessed.";
    displayMessage(" ❌ No Number Guessed.");
  }
  // When the player guesses correctly
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent =
    displayMessage("The Guessed number is correct! 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // Update the highscore if the current score is greater
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "You Lost The Game! 💥";
      displayMessage("You Lost The Game! 💥");
    }
  }
});

//   // When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too High";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Lost The Game! 💥";
//     }
//   }
//   //when guess too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉Too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Lost The Game! 💥";
//     }
//   }
// });

// Event listener for the "Again!" button to reset the game
document.querySelector(".again").addEventListener("click", function () {
  // Reset the secret number and score
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  // Reset UI elements
  //   document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
