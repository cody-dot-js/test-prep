const { describe } = require("riteway");
const sieveOfEratosthenes = require("./sieveOfEratosthenes");

describe("sieveOfEratosthenes()", async assert => {
  {
    const max = 2;
    const result = sieveOfEratosthenes(max);

    assert({
      given: "max = 2",
      should: "return [2]",
      actual: result,
      expected: [2]
    });
  }

  {
    // primes <= 100
    const max = 100;
    const result = sieveOfEratosthenes(max);
    const allPrimesUnder100 = [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97
    ];

    assert({
      given: "max = 100",
      should:
        "return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]",
      actual: result,
      expected: allPrimesUnder100
    });
  }
});
