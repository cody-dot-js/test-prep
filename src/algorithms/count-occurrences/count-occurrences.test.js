const { describe } = require("riteway");
const countOccurrences = require("./count-occurrences");

describe("countOccurrences()", async assert => {
  assert({
    given: "sortedList = [2,3,4], key = 1",
    should: "return 0",
    actual: countOccurrences([2, 3, 4], 1),
    expected: 0
  });

  assert({
    given: "sortedList = [1], key = 1",
    should: "return 1",
    actual: countOccurrences([1], 1),
    expected: 1
  });

  assert({
    given: "sortedList = [1, 2, 3], key = 3",
    should: "return 1",
    actual: countOccurrences([1, 2, 3], 3),
    expected: 1
  });

  assert({
    given: "sortedList = [1,1,1,1], key = 1",
    should: "return 4",
    actual: countOccurrences([1, 1, 1, 1], 1),
    expected: 4
  });
});
