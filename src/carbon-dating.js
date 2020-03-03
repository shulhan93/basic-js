const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(n) {
  if ((typeof n) != 'string' || isNaN(parseFloat(n)) || (+n > 15) || (+n <= 0)) {
    return false
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let rez = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(n))) / k);
  if (rez < 0) {
    return false
  }
  return rez;
};