const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  get length() {
    return this.list.length;
  }

  push(item) {
    this.list.append(item);

    return this;
  }

  pop() {
    return this.list.removeTail();
  }

  toArray() {
    return this.list.reverseInPlace().toArray();
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

module.exports = Stack;
