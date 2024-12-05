'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); // Fixed class name
const btnOpenModal = document.querySelectorAll('.show-modal');
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || ('esc' && !modal.classList.contains('hidden'))) {
    closeModal();
  }
  console.log(e);
});
