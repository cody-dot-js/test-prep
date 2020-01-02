const { describe } = require("riteway");
const { fibonacci, memoizedFibonacci } = require("./fibonacci");

describe("fibonacci()", async assert => {
  assert({
    given: "no arguments",
    should: "return 0",
    actual: fibonacci(),
    expected: 0
  });

  assert({
    given: "zero",
    should: "return 0",
    actual: fibonacci(0),
    expected: 0
  });

  assert({
    given: "negative",
    should: "return 0",
    actual: fibonacci(-1),
    expected: 0
  });

  assert({
    given: "one",
    should: "return 1",
    actual: fibonacci(1),
    expected: 1
  });

  assert({
    given: "two",
    should: "return 1",
    actual: fibonacci(2),
    expected: 1
  });

  assert({
    given: "three",
    should: "return 2",
    actual: fibonacci(3),
    expected: 2
  });

  assert({
    given: "ten",
    should: "return 55",
    actual: fibonacci(10),
    expected: 55
  });

  // Don't run this 👇, it won't finish
  // assert({
  //   given: "one hundred",
  //   should: "return 354224848179262000000",
  //   actual: fibonacci(100),
  //   expected: 354224848179262000000
  // });
});

describe("memoizedFibonacci()", async assert => {
  assert({
    given: "no arguments",
    should: "return 0",
    actual: memoizedFibonacci(),
    expected: 0
  });

  assert({
    given: "zero",
    should: "return 0",
    actual: memoizedFibonacci(0, {}),
    expected: 0
  });

  assert({
    given: "negative",
    should: "return 0",
    actual: memoizedFibonacci(-1, {}),
    expected: 0
  });

  assert({
    given: "one",
    should: "return 1",
    actual: memoizedFibonacci(1, {}),
    expected: 1
  });

  assert({
    given: "two",
    should: "return 1",
    actual: memoizedFibonacci(2, {}),
    expected: 1
  });

  assert({
    given: "three",
    should: "return 2",
    actual: memoizedFibonacci(3, {}),
    expected: 2
  });

  assert({
    given: "ten",
    should: "return 55",
    actual: memoizedFibonacci(10, {}),
    expected: 55
  });

  assert({
    given: "one hundred",
    should: "return 354224848179262000000",
    actual: memoizedFibonacci(100, {}),
    expected: 354224848179262000000
  });
});
