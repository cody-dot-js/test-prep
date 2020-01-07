function Queue() {
  this.q = [];

  return {
    enqueue: item => this.q.push(item),
    length: () => this.q.length,
    dequeue: () => this.q.shift(),
    toArray: () => [...this.q]
  };
}

module.exports = Queue;
