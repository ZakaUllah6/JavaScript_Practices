'use strict';
//Selecting the element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.getElementById('btn--new');
const btnRoll = document.getElementById('btn--roll');
const btnHold = document.getElementById('btn--hold');
//starting Condition

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//Start Rolling Dice Functionality
btnRoll = document.addEventListener('click', function () {
  //Generated The Random Roll dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    console.log(currentScore);
    current0El.textContent = currentScore;
  }
});
