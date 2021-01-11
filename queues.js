import { MyNode } from "./linkedList";
class Queue {
  constructor(value = null) {
    this.first = new MyNode(value);
    this.last = this.first;
    this.length = value === null ? 0 : 1;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newLast = new MyNode(value);
    this.last.next = newLast;
    this.last = newLast;
    this.length++;
    return this;
  }
  dequeue() {
    const newFirst = this.first.next;
    this.first = newFirst;
    this.length--;
    return this;
  }
}

const queue = new Queue();
