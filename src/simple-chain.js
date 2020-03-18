const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length
  },
  addLink(value = '') {
    this.mas.push(value)
    return this
  },
  removeLink(position) {
    if (this.mas[position - 1] == undefined) {
      this.mas = []
      throw new Error()
    } else {
      this.mas.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.mas.reverse()
    return this
  },
  finishChain() {
    let result = this.mas.map((el, i) => {
      return i == this.mas.length - 1 ? `( ${el} )` : `( ${el} )~~`
    }).join('')
    this.mas = []
    return result
  }
};

module.exports = chainMaker;