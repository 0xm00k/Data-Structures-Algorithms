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

  getIndex(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.get(i) == value) {
        return i;
      }
    }
  }

  //0 1 2 3 4
  //1 5 9 2 7
  delete(value) {
    //1. get the index of the value
    //2. loop through starting from the index to the end of the array.
    //3. assign new indexes

    const index = this.getIndex(value);

    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;

    return this;
  }
}

module.exports = ArrayImpl;
