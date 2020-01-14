const { describe } = require("riteway");
const isBalanced = require("./isBalanced");
const BinarySearchTree = require("../../adts/trees/bst/binarySearchTree")

describe("isBalanced()", async assert => {
  {
    // empty tree
    const bst = new BinarySearchTree();

    assert({
      given: "empty tree",
      should: "return true",
      actual: isBalanced(bst.root),
      expected: true
    });
  }

  {
    // single node tree
    const bst = new BinarySearchTree();
    bst.insert(1)

    assert({
      given: "single node tree",
      should: "return true",
      actual: isBalanced(bst.root),
      expected: true
    });
  }

  {
    // two node balanced tree
    const bst = new BinarySearchTree();
    bst.insertAll(5, 1)

    assert({
      given: "two node tree",
      should: "return true",
      actual: isBalanced(bst.root),
      expected: true
    });
  }

  {
    // three node balanced tree
    const bst = new BinarySearchTree();
    bst.insertAll(5, 1, 6)

    assert({
      given: "three node balanced tree",
      should: "return true",
      actual: isBalanced(bst.root),
      expected: true
    });
  }

  {
    // three node unbalanced tree
    const bst = new BinarySearchTree();
    bst.insertAll(1, 5, 6)

    assert({
      given: "three node unbalanced tree",
      should: "return false",
      actual: isBalanced(bst.root),
      expected: false
    });
  }

  {
    // ten node unbalanced tree
    const bst = new BinarySearchTree();
    bst.insertAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    assert({
      given: "ten node unbalanced tree",
      should: "return false",
      actual: isBalanced(bst.root),
      expected: false
    });
  }

  {
    // ten node balanced tree
    const bst = new BinarySearchTree();
    bst.insertAll(6, 2, 3, 1, 8, 7, 6, 9, 10)

    assert({
      given: "ten node balanced tree",
      should: "return true",
      actual: isBalanced(bst.root),
      expected: true
    });
  }
});
