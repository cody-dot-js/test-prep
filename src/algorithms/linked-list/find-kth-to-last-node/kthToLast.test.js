const { describe } = require("riteway");
const kthToLast = require("./kthToLast");
const LinkedList = require("../../../adts/linked-list/linkedList");

describe("LinkedList: kthToLast()", async assert => {
  {
    // no/empty linked list, any positive k
    assert({
      given: "no linked list",
      should: "return null",
      actual: kthToLast(undefined, 1),
      expected: null
    });

    assert({
      given: "empty linked list",
      should: "return null",
      actual: kthToLast(new LinkedList(), 1),
      expected: null
    });
  }

  {
    // negative k
    assert({
      given: "negative k",
      should: "return null",
      actual: kthToLast(new LinkedList(), -1),
      expected: null
    });
  }

  {
    // non-empty linked list length = 10, k = 0
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const result = kthToLast(list, 0);

    assert({
      given: "non-empty length = 10 list, k = 0",
      should: "return the last item",
      actual: result.value,
      expected: 10
    });
  }

  {
    // non-empty linked list length = 10, k = 9
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const result = kthToLast(list, list.length);

    assert({
      given: "non-empty length = 10 list, k = list.length",
      should: "return the first item",
      actual: result.value,
      expected: 1
    });
  }
});
