const { describe } = require("riteway");
const generalizedGcd = require("./generalizedGcd");

describe("generalizedGcd()", async assert => {
  {
    // empty list
    const list = [];
    const result = generalizedGcd(list);

    assert({
      given: "empty list",
      should: "return 0",
      actual: result,
      expected: 0
    });
  }

  {
    // list of one
    const list = [10];
    const result = generalizedGcd(list);

    assert({
      given: "[10]",
      should: "return 10",
      actual: result,
      expected: 10
    });
  }

  {
    // [2, 3, 4, 5, 6]
    const list = [2, 3, 4, 5, 6];
    const result = generalizedGcd(list);

    assert({
      given: "[2, 3, 4, 5, 6]",
      should: "return 1",
      actual: result,
      expected: 1
    });
  }

  {
    // [2, 4, 6, 8, 10]
    const list = [2, 4, 6, 8, 10];
    const result = generalizedGcd(list);

    assert({
      given: "[2, 4, 6, 8, 10]",
      should: "return 2",
      actual: result,
      expected: 2
    });
  }
});
