const LinkedList = require("../linked-list/linked-list");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  length() {
    return this.list.length;
  }

  enqueue(item) {
    this.list.append(item);

    return this;
  }

  dequeue() {
    return this.list.removeHead();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  toArray() {
    return this.list.toArray();
  }
}

module.exports = Queue;
