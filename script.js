import initSlideChangeAuto from './js/slideChangeAuto.js';
import initSlideChangeClick from './js/slideChangeClick.js';

(() => {
  initSlideChangeClick({
    whereSelector: '[data-name="btn"]',
  });

  initSlideChangeAuto({
    whereSelector: '[data-name="btn"]',
  });
})();
// JS - JavaScript by Van Nguyen

const btnMoreList = document.querySelectorAll('.more-btn');
const boxDetail = document.getElementById('boxdetail');
const close = document.querySelector('.close');

if (btnMoreList) {
  btnMoreList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      boxDetail.classList.remove('hidden');
    });
  });
}

// Close modal when click X and ESC

close.addEventListener('click', () => {
  // close modal
  boxDetail.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // close modal
    boxDetail.classList.add('hidden');
  }
});


