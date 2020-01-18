const { describe } = require("riteway");
const sortedMerge = require("./sortedMerge");

describe("sortedMerge()", async assert => {
  {
    // empty A & B
    const A = [];
    const B = [];
    const result = sortedMerge(A, B);

    assert({
      given: "A = [], B = []",
      should: "return []",
      actual: result,
      expected: []
    });
  }

  {
    // A = [1, 2, 3, 4, 5], B = []
    const A = [1, 2, 3, 4, 5];
    const B = [];
    const lastAIndex = 4;
    const result = sortedMerge(A, B, lastAIndex);

    assert({
      given: "A = [1, 2, 3, 4, 5], B = [], lastAIndex = 4",
      should: "return [1, 2, 3, 4, 5]",
      actual: result,
      expected: [1, 2, 3, 4, 5]
    });
  }

  {
    // A = [3, 4, 5, , ], B = [1, 2]
    const A = [3, 4, 5, undefined, undefined];
    const B = [1, 2];
    const lastAIndex = 2;
    const result = sortedMerge(A, B, lastAIndex);

    assert({
      given: "A = [3, 4, 5, undefined, undefined], B = [1, 2], lastAIndex = 2",
      should: "return [1, 2, 3, 4, 5]",
      actual: result,
      expected: [1, 2, 3, 4, 5]
    });
  }

  {
    // A = [1, 2, undefined, undefined, undefined], B = [3, 4, 5]
    const A = [1, 2, undefined, undefined, undefined];
    const B = [3, 4, 5];
    const lastAIndex = 1;
    const result = sortedMerge(A, B, lastAIndex);

    assert({
      given:
        "A = [1, 2, undefined, undefined, undefined], B = [3, 4, 5], lastAIndex = 1",
      should: "return [1, 2, 3, 4, 5]",
      actual: result,
      expected: [1, 2, 3, 4, 5]
    });
  }
});
