const { describe } = require("riteway");
const binarySearch = require("./binarySearchIterative");

describe("binarySearchIterative()", async assert => {
  assert({
    given: "empty list",
    should: "return -1",
    actual: binarySearch([], 1),
    expected: -1
  });

  assert({
    given: "sortedList = [1, 2, 3, 4, 5], key = 4",
    should: "return 3",
    actual: binarySearch([1, 2, 3, 4, 5], 4),
    expected: 3
  });

  assert({
    given: "sortedList = [1, 2, 3, 4, 4, 5], key = 4",
    should: "return 3",
    actual: binarySearch([1, 2, 3, 4, 4, 5], 4),
    expected: 3
  });

  assert({
    given: "sortedList = [1, 2, 3, 4, 5], key = 6",
    should: "return -1",
    actual: binarySearch([1, 2, 3, 4, 5], 6),
    expected: -1
  });
});
