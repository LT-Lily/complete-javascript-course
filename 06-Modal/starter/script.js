'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

const modalBtns = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

modalBtns.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < modalBtns.length; i++) {
//   modalBtns[i].addEventListener('click', openModal);
// }

// Press "X" to close
closeModalBtn.addEventListener('click', closeModal);
// do not use () after callBack func. It will be IMMEDIATLY executed.

// Click outside modal to close
overlay.addEventListener('click', closeModal);

// Press ESC on the window to close the modal
document.addEventListener('keydown', event => {
  // only close when Modal is open. Check if Modal has hidden class
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// Keyboard events: 1. keydown | keypress | keyup
// keypress is fired continuously as pressed
// keydown is fired as soon as key is pressed.

// How to know which key was pressed?
// info is stored in event

// Generally: when an even happens Javascript generates an object that. We can have access info about that event.
