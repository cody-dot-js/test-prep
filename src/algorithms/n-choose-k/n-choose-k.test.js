const { describe } = require("riteway");
const { chooseIterative, chooseRecursive } = require("./n-choose-k");

describe("chooseIterative()", async assert => {
  assert({
    given: "no arguments",
    should: "return 1",
    actual: chooseIterative(),
    expected: 1
  });

  assert({
    given: "negative n",
    should: "return NaN",
    actual: Object.is(chooseIterative(-1, 0), NaN),
    expected: true
  });

  assert({
    given: "negative k",
    should: "return NaN",
    actual: Object.is(chooseIterative(0, -1), NaN),
    expected: true
  });

  assert({
    given: "negative n and k",
    should: "return NaN",
    actual: Object.is(chooseIterative(-1, -1), NaN),
    expected: true
  });

  assert({
    given: "n = 9, k = 4",
    should: "return 126",
    actual: chooseIterative(9, 4),
    expected: 126
  });

  assert({
    given: "n = 0, k = 0",
    should: "return 1",
    actual: chooseIterative(0, 0),
    expected: 1
  });

  assert({
    given: "n = 1, k = 0",
    should: "return 1",
    actual: chooseIterative(1, 0),
    expected: 1
  });

  assert({
    given: "n = 10, k = 0",
    should: "return 1",
    actual: chooseIterative(10, 0),
    expected: 1
  });

  assert({
    given: "n = 10, k = 10",
    should: "return 1",
    actual: chooseIterative(10, 10),
    expected: 1
  });

  assert({
    given: "n = 10, k = 1",
    should: "return 10",
    actual: chooseIterative(10, 1),
    expected: 10
  });

  assert({
    given: "n = 100, k = 7",
    should: "return 16007560800",
    actual: chooseIterative(100, 7),
    expected: 16007560800
  });
});

describe("chooseRecursive()", async assert => {
  assert({
    given: "no arguments",
    should: "return 1",
    actual: chooseRecursive(),
    expected: 1
  });

  assert({
    given: "negative n",
    should: "return NaN",
    actual: Object.is(chooseRecursive(-1, 0), NaN),
    expected: true
  });

  assert({
    given: "negative k",
    should: "return NaN",
    actual: Object.is(chooseRecursive(0, -1), NaN),
    expected: true
  });

  assert({
    given: "negative n and k",
    should: "return NaN",
    actual: Object.is(chooseRecursive(-1, -1), NaN),
    expected: true
  });

  assert({
    given: "n = 9, k = 4",
    should: "return 126",
    actual: chooseRecursive(9, 4),
    expected: 126
  });

  assert({
    given: "n = 0, k = 0",
    should: "return 1",
    actual: chooseRecursive(0, 0),
    expected: 1
  });

  assert({
    given: "n = 1, k = 0",
    should: "return 1",
    actual: chooseRecursive(1, 0),
    expected: 1
  });

  assert({
    given: "n = 10, k = 0",
    should: "return 1",
    actual: chooseRecursive(10, 0),
    expected: 1
  });

  assert({
    given: "n = 10, k = 10",
    should: "return 1",
    actual: chooseRecursive(10, 10),
    expected: 1
  });

  assert({
    given: "n = 10, k = 1",
    should: "return 10",
    actual: chooseRecursive(10, 1),
    expected: 10
  });

  assert({
    given: "n = 100, k = 7",
    should: "return 16007560800",
    actual: chooseRecursive(100, 7),
    expected: 16007560800
  });
});
