const LinkedListNode = require("./linked-list-node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  appendAll(...values) {
    values.forEach(value => this.append(value));

    return this;
  }

  prependAll(...values) {
    values.forEach(value => this.prepend(value));

    return this;
  }

  forEach(callback) {
    if (!callback) {
      return;
    }

    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  find(value, equality) {
    if (this.length === 0) {
      return null;
    }

    let current = this.head;
    while (current) {
      if (equality && equality(current.value, value)) {
        return value;
      }

      if (Object.is(current.value, value)) {
        return value;
      }

      current = current.next;
    }

    return null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    this.length += 1;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;
    this.length += 1;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  remove(value) {
    if (this.length === 0) {
      return null;
    }

    let removed;

    if (Object.is(this.head.value, value)) {
      return this.removeHead();
    } else {
      let current = this.head;

      while (current.next) {
        if (removed === undefined && Object.is(current.next.value, value)) {
          removed = current.next;
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }

      if (Object.is(this.tail.value, value)) {
        this.tail = current;
      }
    }

    if (removed !== undefined) {
      this.length -= 1;
      return removed.value;
    } else {
      return null;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    }

    const removedHead = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length -= 1;

    return removedHead;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }

    const removedTail = this.tail.value;

    if (this.length === 1) {
      this.head = null;
      this.tails = null;
    } else {
      let current = this.head;
      while (current.next) {
        if (!current.next.next) {
          current.next = null;
        } else {
          current = current.next;
        }
      }

      this.tail = current;
    }

    this.length -= 1;

    return removedTail;
  }

  toArray() {
    let list = new Array(this.length);
    let current = this.head;

    for (let i = 0; i < this.length; ++i) {
      list[i] = current.value;
      current = current.next;
    }

    return list;
  }

  reverseInPlace() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
      next = current.next;

      current.next = previous;

      previous = current;
      current = next;
    }

    this.tail = this.head;
    this.head = previous;

    return this;
  }

  reverse() {
    const newLinkedList = new LinkedList();

    return newLinkedList.prependAll(...this.toArray());
  }
}

module.exports = LinkedList;
