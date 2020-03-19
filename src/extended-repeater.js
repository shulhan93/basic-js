module.exports = function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
}) {
    let res = ''
    let substr = str;
    for (let i = 0; i < repeatTimes; i++) {
        for (let j = 0; j < additionRepeatTimes; j++) {
            substr = j < additionRepeatTimes - 1 ?
                substr + String(addition) + additionSeparator :
                substr + String(addition)
        }
        res = i < repeatTimes - 1 ?
            substr + separator + res :
            res + substr
        substr = str
    }
    return res
};