module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var count = arr.reduce(function (sum, el) {
            return Array.isArray(el) ? sum + 1 : sum
        }, 0);
        if (count == 0) {
            return 1
        }
        let max = 0
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                res = 1 + this.calculateDepth(arr[i])
            }
            if (res > max) {
                max = res
            }
        }
        return max
    }
};