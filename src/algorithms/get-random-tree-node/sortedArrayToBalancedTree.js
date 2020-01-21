function sortedArrayToBalancedTree(
  tree,
  sortedArray = [],
  start = 0,
  end = sortedArray.length - 1
) {
  if (start > end) {
    return;
  }

  const middle = Math.floor(start + (end - start) / 2);
  tree.insert(sortedArray[middle]);

  sortedArrayToBalancedTree(tree, sortedArray, start, middle - 1);
  sortedArrayToBalancedTree(tree, sortedArray, middle + 1, end);
}

module.exports = sortedArrayToBalancedTree;
