import { slideChange } from './slideChange.js';

let count = 1;
export function interval(ml, selector) {
  setInterval(() => {
    slideChange(count, selector);
    count++;

    if (count === 5) {
      count = 0;
    }
  }, ml);
}
