const { describe } = require("riteway");
const sortedArrayToBalancedBst = require("./sortedArrayToBalancedBst");

describe("sortedArrayToBalancedBst()", async assert => {
  {
    // empty list
    const list = [];
    const bst = sortedArrayToBalancedBst(list);

    assert({
      given: "empty list: bst.size",
      should: "return 0",
      actual: bst.size,
      expected: 0
    });

    assert({
      given: "empty list: bst.isEmpty()",
      should: "return true",
      actual: bst.isEmpty(),
      expected: true
    });

    assert({
      given: "empty list: bst.root",
      should: "return null",
      actual: bst.root,
      expected: null
    });
  }

  {
    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bst = sortedArrayToBalancedBst(list);

    assert({
      given: "[1, 2, 3, 4, 5, 6, 7, 8, 9]: bst.size",
      should: "return 9",
      actual: bst.size,
      expected: 9
    });

    assert({
      given: "[1, 2, 3, 4, 5, 6, 7, 8, 9]: bst.isEmpty()",
      should: "return false",
      actual: bst.isEmpty(),
      expected: false
    });

    assert({
      given: "[1, 2, 3, 4, 5, 6, 7, 8, 9]: bst.root.value",
      should: "return 5",
      actual: bst.root.value,
      expected: 5
    });

    assert({
      given: "[1, 2, 3, 4, 5, 6, 7, 8, 9]: bst.toPreOrderArray()",
      should: "return [5, 2, 1, 3, 4, 7, 6, 8, 9]",
      actual: bst.toPreOrderArray(),
      expected: [5, 2, 1, 3, 4, 7, 6, 8, 9]
    });

    assert({
      given: "[1, 2, 3, 4, 5, 6, 7, 8, 9]: bst.toInOrderArray()",
      should: "return [1, 2, 3, 4, 5, 6, 7, 8, 9]",
      actual: bst.toInOrderArray(),
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
  }
});
