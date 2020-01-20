const { describe } = require("riteway");
const isAPrimeNaive = require("./isAPrimeNaive");

describe("isAPrimeNaive()", async assert => {
  {
    const num = 2;
    const result = isAPrimeNaive(num);

    assert({
      given: "num = 2",
      should: "return true",
      actual: result,
      expected: true
    });
  }

  {
    const notAPrime = 10;
    const result = isAPrimeNaive(notAPrime);

    assert({
      given: "num = 10",
      should: "return false",
      actual: result,
      expected: false
    });
  }

  {
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
    const result = allPrimesUnder100.every(num => isAPrimeNaive(num));

    assert({
      given: "all primes under 100",
      should: "return true",
      actual: result,
      expected: true
    });
  }
});
