'use strict';
//Elements from html get their own var here.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//e = event
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //check if element has certain class so escape key will close modal && //if modal class does not contain the hidden class then close modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
