class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const size = this.length - 1;
    const lastItem = this.data[size];
    if (lastItem) {
        delete this.data[size];
        this.length--;
    }
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    if (item) {
        this.shiftIndex(index);
    }
    return item;
  }

  shiftIndex(index){
    this.length--;
    for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length];
  }
}

const array = new MyArray();
