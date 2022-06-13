import { slideShowBtn, imgList } from '../variable/common-variable.js';

export function slideChange(count, selector) {
  const slideShowBtn = document.querySelectorAll(selector);
  slideShowBtn.forEach((btn, index) => {
    count ? btn.click() : null;

    btn.addEventListener('click', (e) => {
      const img = document.querySelector('#img');
      img.src = imgList[count ? count : index];
    });
  });
}
