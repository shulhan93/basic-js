module.exports = function getSeason(date = 'undefined') {

  if (date == 'undefined') {
    return 'Unable to determine the time of year!'
  }
  if (!date instanceof Date || date.hasOwnProperty('toString')) throw new Error('Error');

  let month = date.getMonth();

  if ((month <= 1) || month == 11) {
    return 'winter'
  } else if (month >= 2 && month <= 4) {
    return 'spring'
  } else if (month >= 5 && month <= 7) {
    return 'summer'
  } else {
    return 'autumn'
  }

};