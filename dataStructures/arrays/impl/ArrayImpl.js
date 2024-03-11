class ArrayImpl {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  append(value) {
    this.data[this.length] = value;
    this.length++;

    return this;
  }
}

module.exports = ArrayImpl;
