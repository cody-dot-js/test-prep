function checkHeight(root) {
  if (!root) {
    return -1;
  }

  const leftHeight = checkHeight(root.left);
  if (leftHeight === -Infinity) {
    return -Infinity;
  }

  const rightHeight = checkHeight(root.right);
  if (rightHeight === -Infinity) {
    return -Infinity;
  }

  const heightDifference = leftHeight - rightHeight;
  if (Math.abs(heightDifference) > 1) {
    return -Infinity;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(binaryTreeRoot) {
  return checkHeight(binaryTreeRoot) !== -Infinity;
}

module.exports = isBalanced;
