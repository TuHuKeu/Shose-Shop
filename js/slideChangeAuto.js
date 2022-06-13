import { interval } from './common/functions/interval.js';

function initSlideChangeAuto({ whereSelector }) {
  interval(2000, whereSelector);
}

export default initSlideChangeAuto;
