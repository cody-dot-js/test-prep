const { describe } = require("riteway");
const inorderSuccessor = require("./inorderSuccessor");
const BinarySearchTree = require("../../adts/trees/bst/binarySearchTree")

describe("inorderSuccessor()", async assert => {
  {
    // empty tree
    const bst = new BinarySearchTree();

    assert({
      given: "empty tree",
      should: "return null",
      actual: inorderSuccessor(bst.root),
      expected: null
    });
  }

  {
    // one node tree
    const bst = new BinarySearchTree();
    bst.insertAll(1)

    assert({
      given: "one node tree: the root",
      should: "return null",
      actual: inorderSuccessor(bst.root),
      expected: null
    });
  }

  {
    // two node tree
    const bst = new BinarySearchTree();
    bst.insertAll(1, 2)

    assert({
      given: "two node tree: passed the greater number",
      should: "return null",
      actual: inorderSuccessor(bst.root.right),
      expected: null
    });

    assert({
      given: "two node tree: passed the lower number",
      should: "return the higher number",
      actual: inorderSuccessor(bst.root),
      expected: bst.root.right
    });
  }

  {
    // three node tree, linked list (increasing)
    const bst = new BinarySearchTree();
    bst.insertAll(1, 2, 3)

    assert({
      given: "three node tree, linked list (increasing): the root",
      should: "return 2",
      actual: inorderSuccessor(bst.root).value,
      expected: 2
    });

    assert({
      given: "three node tree, linked list (increasing): root's right child",
      should: "return 3",
      actual: inorderSuccessor(bst.root.right).value,
      expected: 3
    });

    assert({
      given: "three node tree, linked list (increasing): root's highest child",
      should: "return null",
      actual: inorderSuccessor(bst.root.right.right),
      expected: null
    });
  }

  {
    // three node tree, linked list (decreasing)
    const bst = new BinarySearchTree();
    bst.insertAll(3, 2, 1)

    assert({
      given: "three node tree, linked list (decreasing): the root",
      should: "return null",
      actual: inorderSuccessor(bst.root),
      expected: null
    });

    assert({
      given: "three node tree, linked list (decreasing): root's left child",
      should: "return 3",
      actual: inorderSuccessor(bst.root.left).value,
      expected: 3
    });

    assert({
      given: "three node tree, linked list (decreasing): root's lowest child",
      should: "return 2",
      actual: inorderSuccessor(bst.root.left.left).value,
      expected: 2
    });
  }

  {
    // three node tree, balanced
    const bst = new BinarySearchTree();
    bst.insertAll(2, 3, 1)

    assert({
      given: "three node tree, balanced: the root",
      should: "return root's right child",
      actual: inorderSuccessor(bst.root),
      expected: bst.root.right
    });

    assert({
      given: "three node tree, balanced: root's left child",
      should: "return root",
      actual: inorderSuccessor(bst.root.left),
      expected: bst.root
    });

    assert({
      given: "three node tree, balanced: root's right child",
      should: "return null",
      actual: inorderSuccessor(bst.root.right),
      expected: null
    });
  }
});
