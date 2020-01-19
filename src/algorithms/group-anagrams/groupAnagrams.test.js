const { describe } = require("riteway");
const groupAnagrams = require("./groupAnagrams");

describe("groupAnagrams()", async assert => {
  {
    // empty list
    const list = [];
    const result = groupAnagrams(list);

    assert({
      given: "empty list",
      should: "return []",
      actual: result,
      expected: []
    });
  }

  {
    // list of anagrams
    const list = [
      "tar",
      "astronomer",
      "bad credit",
      "cat",
      "brag",
      "voices rant on",
      "arc",
      "the classroom",
      "rat",
      "act",
      "grab",
      "conversation",
      "school master",
      "debit card",
      "moon starer",
      "save"
    ];
    const expected = [
      "tar",
      "rat",
      "astronomer",
      "moon starer",
      "bad credit",
      "debit card",
      "cat",
      "act",
      "brag",
      "grab",
      "voices rant on",
      "conversation",
      "arc",
      "the classroom",
      "school master",
      "save"
    ];
    const result = groupAnagrams(list);

    assert({
      given: "list of anagrams",
      should: "return []",
      actual: result,
      expected: expected
    });
  }
});
