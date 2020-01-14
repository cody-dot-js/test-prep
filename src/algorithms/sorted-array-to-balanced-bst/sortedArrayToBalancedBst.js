const BinarySearchTree = require("../../adts/trees/bst/binarySearchTree");

function toBst(bst, sortedArray = [], start = 0, end = sortedArray.length - 1) {
  if (start > end) {
    return;
  }

  const middle = Math.floor(start + (end - start) / 2);
  bst.insert(sortedArray[middle]);

  toBst(bst, sortedArray, start, middle - 1);
  toBst(bst, sortedArray, middle + 1, end);
}

function sortedArrayToBalancedBst(sortedArray = []) {
  const bst = new BinarySearchTree();

  toBst(bst, sortedArray);

  return bst;
}

module.exports = sortedArrayToBalancedBst;
