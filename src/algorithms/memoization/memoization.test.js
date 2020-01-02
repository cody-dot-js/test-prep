const { describe } = require("riteway");
const { allFibonacci, memoizedAllFibonacci } = require("./memoization");

describe("allFibonacci()", async assert => {
  assert({
    given: "no arguments",
    should: "return the expected list",
    actual: allFibonacci(),
    expected: [0]
  });

  assert({
    given: "zero",
    should: "return the expected list",
    actual: allFibonacci(0),
    expected: [0]
  });

  assert({
    given: "negative",
    should: "return the expected list",
    actual: allFibonacci(-1),
    expected: [0]
  });

  assert({
    given: "one",
    should: "return the expected list",
    actual: allFibonacci(1),
    expected: [0, 1]
  });

  assert({
    given: "two",
    should: "return the expected list",
    actual: allFibonacci(2),
    expected: [0, 1, 1]
  });

  assert({
    given: "three",
    should: "return the expected list",
    actual: allFibonacci(3),
    expected: [0, 1, 1, 2]
  });

  assert({
    given: "ten",
    should: "return the expected list",
    actual: allFibonacci(10),
    expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  });
});

describe("memoizedAllFibonacci()", async assert => {
  assert({
    given: "no arguments",
    should: "return the expected list",
    actual: memoizedAllFibonacci(),
    expected: [0]
  });

  assert({
    given: "zero",
    should: "return the expected list",
    actual: memoizedAllFibonacci(0),
    expected: [0]
  });

  assert({
    given: "negative",
    should: "return the expected list",
    actual: memoizedAllFibonacci(-1),
    expected: [0]
  });

  assert({
    given: "one",
    should: "return the expected list",
    actual: memoizedAllFibonacci(1),
    expected: [0, 1]
  });

  assert({
    given: "two",
    should: "return the expected list",
    actual: memoizedAllFibonacci(2),
    expected: [0, 1, 1]
  });

  assert({
    given: "three",
    should: "return the expected list",
    actual: memoizedAllFibonacci(3),
    expected: [0, 1, 1, 2]
  });

  assert({
    given: "ten",
    should: "return the expected list",
    actual: memoizedAllFibonacci(10),
    expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  });
});
