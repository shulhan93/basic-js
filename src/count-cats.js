module.exports = function countCats(arr) {
  var count = 0;
 arr.forEach(el => {
    el.forEach(elem => {
      if (elem == '^^') {
        count++
      }
    })
  })
  return count 
};
