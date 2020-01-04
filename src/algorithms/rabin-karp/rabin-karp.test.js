const { describe } = require("riteway");
const search = require("./rabin-karp");

describe("search()", async assert => {
  assert({
    given: "no arguments",
    should: "return 0",
    actual: search(),
    expected: 0
  });

  assert({
    given: "no pattern",
    should: "return 0",
    actual: search("abcdef", ""),
    expected: 0
  });

  assert({
    given: "text = 'abcdef', pattern = 'cde'",
    should: "return 2",
    actual: search("abcdef", "cde"),
    expected: 2
  });

  assert({
    given: "text = 'this is a test text', pattern = 'test'",
    should: "return 10",
    actual: search("this is a test text", "test"),
    expected: 10
  });

  assert({
    given: "pattern not in text",
    should: "return -1",
    actual: search("this is a test text", "dne"),
    expected: -1
  });
});
