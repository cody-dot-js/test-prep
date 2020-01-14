// O(log n)
function leftMostChild(treeNode) {
  if (!treeNode) {
    return null;
  }

  let current = treeNode;
  while (current.left) {
    current = current.left;
  }

  return current;
}

function inorderSuccessor(treeNode) {
  if (!treeNode) {
    return null;
  }

  if (treeNode.right) {
    // found right children which means return leftmost node of right subtree
    return leftMostChild(treeNode.right); // O(log n)
  } else {
    let current = treeNode;
    let { parent } = current;

    // go up until we're on the left instead of the right
    while (parent && parent.left !== current) {
      current = parent;
      parent = current.parent;
    }

    return parent;
  }
}

module.exports = inorderSuccessor;
