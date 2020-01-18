const { describe } = require("riteway");
const countPairs = require("./countPairs");

describe("count pairs with difference of k", async assert => {
  {
    // empty list
    const list = [];
    const k = 1; // any k

    assert({
      given: "countPairs([], any)",
      should: "return 0",
      actual: countPairs(list, k),
      expected: 0
    });
  }

  {
    // no ks in list (sorted)
    const list = [1, 2, 3, 4, 5, 6];
    const k = 10;

    assert({
      given: "countPairs([1, 2, 3, 4, 5, 6], 10)",
      should: "return 0",
      actual: countPairs(list, k),
      expected: 0
    });
  }

  {
    // no ks in list (unsorted)
    const list = [6, 3, 4, 1, 5, 2];
    const k = 10;

    assert({
      given: "countPairs([6, 3, 4, 1, 5, 2], 10)",
      should: "return 0",
      actual: countPairs(list, k),
      expected: 0
    });
  }

  {
    // 4 pairs of k = 2 in list
    const list = [1, 7, 5, 9, 2, 12, 3];
    const k = 2;

    assert({
      given: "countPairs([1, 7, 5, 9, 2, 12, 3], 10)",
      should: "return 0",
      actual: countPairs(list, k),
      expected: 0
    });
  }
});
