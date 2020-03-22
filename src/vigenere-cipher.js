class VigenereCipheringMachine {
    constructor(mod = true) {
        this.mod = mod
        this.arr = []
        for (let i = 0; i < 26; i++) {
            this.arr.push(String.fromCharCode(65 + i))
        }

    }
    encrypt(text, word) {
        if (!(text && word)) {
            throw new Error('Error')
        }

        let str = text.toUpperCase()
        let key = word.toUpperCase()
        let reg = str.match(/[A-Z]/g).join('');
        let res = '';
        let keyConkat = key.repeat(reg.length / key.length) + key.slice(0, reg.length % key.length)
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let indexStr = this.arr.indexOf(str[i], 0);
            let indexKey = this.arr.indexOf(keyConkat[count], 0);
            if ((indexStr >= 0) && (indexKey >= 0)) {
                let sum = indexStr + indexKey;
                sum < 26 ? res += this.arr[sum] : res += this.arr[Math.abs(26 - sum)]
                count++
            } else {
                res += str[i]
            }
        }
        return this.mod ? res : res.split('').reverse().join('')
    }

    decrypt(text, word) {
        if (!(text && word)) {
            throw new Error('Error')
        }
        let str = text.toUpperCase()
        let key = word.toUpperCase()
        let reg = str.match(/[A-Z]/g).join('')
        let res = '';
        let keyConkat = key.repeat(reg.length / key.length) + key.slice(0, reg.length % key.length)
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let indexStr = this.arr.indexOf(str[i], 0);
            let indexKey = this.arr.indexOf(keyConkat[count], 0);
            if ((indexStr >= 0) && (indexKey >= 0)) {
                let sum = indexStr - indexKey;
                sum >= 0 ? res += this.arr[sum] : res += this.arr[Math.abs(indexStr + 26 - indexKey)]
                count++
            } else {
                res += str[i]
            }
        }
        return this.mod ? res : res.split('').reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;