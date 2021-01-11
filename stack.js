import { MyNode } from "./linkedList";

class Stack {
  constructor(value = null) {
    this.top = new MyNode(value);
    this.bottom = this.top;
    this.length = value === null ? 0 : 1;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new MyNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
    return this;
  }
}

const stack = new Stack();
