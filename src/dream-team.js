module.exports = function createDreamTeam(arr) {
    if(Array.isArray(arr)) {
      let filter = arr.filter(cur => (typeof cur) =='string')
      .map(cur => cur.trim().toUpperCase()).sort()
      .reduce((sum, current) => {
      return  sum + current[0]
    }, '')
    return filter
    } else {
      return false
    }
};
