const TreeNode = require("./treeNode");

class Tree {
  constructor() {
    this.root = null;
  }

  get size() {
    return this.root ? this.root.size : 0;
  }

  getRandomNode() {
    if (!this.root) {
      return null;
    }

    const i = ~~(this.size * Math.random());
    return this.root.getIthNode(i);
  }

  insertAll(...values) {
    values.map(value => this.insert(value));

    return this;
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.root.insert(value);
    }

    return this;
  }
}

module.exports = Tree;
