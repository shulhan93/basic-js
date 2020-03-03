 module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Error'
    }
    let rez = arr.reduce((sum, cur, i) => {

        if (cur == '--double-next') {
            if (arr[i + 1] == undefined) {
                return sum
            }
            cur = arr[i + 1]
        } else if (cur == '--double-prev') {
            if (arr[i - 1] == undefined) {
                return sum
            }
            cur = arr[i - 1]
        } else if (cur == '--discard-prev') {
            if (arr[i - 1] == undefined) {
                return sum
            }
            sum.splice(sum.length - 1, 1)
            return sum
        } else if (cur == '--discard-next') {
            if (arr[i + 1] == undefined) {
                return sum
            }
            arr.splice(i, 1)
            return sum
        }
        sum.push(cur)
        return sum
    }, [])
    return rez
}; 