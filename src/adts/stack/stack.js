const LinkedList = require("../linked-list/linked-list");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  length() {
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
