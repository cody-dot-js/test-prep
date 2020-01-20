const { describe } = require("riteway");
const binarySearch2D = require("./binarySearch2D");

describe("binarySearch2D()", async assert => {
  {
    // empty matrix
    const matrix = [[]];
    const key = 1; // arbitrary key
    const result = binarySearch2D(matrix, key);

    assert({
      given: "empty matrix",
      should: "return { row: -1, column: -1, index: -1 }",
      actual: result,
      expected: { row: -1, column: -1, index: -1 }
    });
  }

  {
    // M = 5, N = 4 (20 items), found item 14
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20]
    ];
    const key = 14;
    const result = binarySearch2D(matrix, key);

    assert({
      given: "MxN = 5x4, key = 14",
      should: "return { row: 2, column: 3, index: 13 }",
      actual: result,
      expected: { row: 2, column: 3, index: 13 }
    });
  }

  {
    // M = 5, N = 4 (20 items), not found item 21
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20]
    ];
    const key = 21;
    const result = binarySearch2D(matrix, key);

    assert({
      given: "MxN = 5x4, key = 21",
      should: "return { row: -1, column: -1, index: -1 }",
      actual: result,
      expected: { row: -1, column: -1, index: -1 }
    });
  }
});
