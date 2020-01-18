const { describe } = require("riteway");
const { mergeSortInPlace } = require("./mergeSort");

describe("mergeSortInPlace()", async assert => {
  {
    // sort: empty list
    const list = [];

    assert({
      given: "empty list",
      should: "return empty list",
      actual: mergeSortInPlace(list),
      expected: list
    });
  }

  {
    // sort: sorted list
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sorted = list.slice().sort((l, r) => l - r);
    const result = mergeSortInPlace(list);

    assert({
      given: "sorted list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      should: "return sorted list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      actual: result,
      expected: sorted
    });

    assert({
      given: "sorted list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      should: "return a reference to the same list",
      actual: result == list,
      expected: true
    });
  }

  {
    // sort: reverse sorted list
    const list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sorted = list.slice().sort((l, r) => l - r);

    assert({
      given: "sorted list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
      should: "return sorted list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      actual: mergeSortInPlace(list),
      expected: sorted
    });
  }

  {
    // sort: large random list
    const N = 10000;
    const list = [...new Array(N)].map(
      (_, i) => Math.round(N * Math.random()) + 1
    );
    const sorted = list.slice().sort((l, r) => l - r);

    assert({
      given: "large random list",
      should: "return the sorted list",
      actual: mergeSortInPlace(list),
      expected: sorted
    });
  }
});
