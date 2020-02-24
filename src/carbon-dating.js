const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {
  if( (typeof n) != 'string' || isNaN(n) ) {
    return false
  }
  let rez = (Math.log(MODERN_ACTIVITY / parseFloat(n))) / 1.2094;
  let a = Math.ceil(rez * 10000);
  if (a < 0) {
    return false
  }
  return a;
};

