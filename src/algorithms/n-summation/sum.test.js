const { describe } = require("riteway");
const sum = require("./sum");

describe("sum()", async assert => {
  assert({
    given: "no arguments",
    should: "return 0",
    actual: sum(),
    expected: 0
  });

  assert({
    given: "zero",
    should: "return 0",
    actual: sum(0),
    expected: 0
  });

  assert({
    given: "negatives",
    should: "return NaN",
    actual: Object.is(sum(-1), NaN),
    expected: true
  });

  assert({
    given: "one",
    should: "return 1",
    actual: sum(1),
    expected: 1
  });

  assert({
    given: "ten",
    should: "return 55",
    actual: sum(10),
    expected: 55
  });

  assert({
    given: "one hundred",
    should: "return 5050",
    actual: sum(100),
    expected: 5050
  });
});
