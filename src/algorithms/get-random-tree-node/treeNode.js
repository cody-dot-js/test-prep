class TreeNode {
  constructor(data) {
    this.data = data;
    this.size = 1;
    this.left = null;
    this.right = null;
  }

  insertInOrder(data) {
    if (data <= this.data) {
      if (!this.left) {
        this.left = new TreeNode(data);
      } else {
        this.left.insertInOrder(data);
      }
    } else {
      if (!this.right) {
        this.right = new TreeNode(data);
      } else {
        this.right.insertInOrder(data);
      }
    }
    this.size += 1;
  }

  find(data) {
    if (Object.is(data, this.data)) {
      return this;
    } else if (data <= this.data) {
      return this.left ? this.left.find(data) : null;
    } else if (data > this.data) {
      return this.right ? this.right.find(data) : null;
    }

    return null;
  }

  getIthNode(i) {
    const leftSize = this.left ? this.left.size : 0;

    if (i < leftSize) {
      return this.left.getIthNode(i);
    } else if (i === leftSize) {
      return this;
    } else {
      // skip over leftSize + 1 nodes, subtract them from count
      const rightCount = i - (leftSize + 1);

      return this.right.getIthNode(rightCount);
    }
  }
}

module.exports = TreeNode;
