class StaticArray {
  constructor(length) {
    this.length = 0;
    this.data = {};
  }

  //0(n)
  get(element) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == element) {
        return i;
      }
    }
  }

  //0(1)
  push(element) {
    if (element) {
      this.data[this.length] = element;
      this.length++;
    }
    return this;
  }

  //0(n)
  delete(element) {
    //1.Get the index of the element
    const deletedIndex = this.get(element);

    for (let i = deletedIndex; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return this;
  }
  //0(1)
  pop() {
    delete this.data[this.length];
    this.length--;
    return this;
  }
}

module.exports = StaticArray;
