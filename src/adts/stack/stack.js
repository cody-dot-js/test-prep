function Stack() {
  this.stack = [];

  return {
    push: item => this.stack.push(item),
    length: () => this.stack.length,
    pop: () => this.stack.pop(),
    toArray: () => [...this.stack]
  };
}

module.exports = Stack;
