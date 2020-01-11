const { describe } = require("riteway");
const LinkedList = require("./linked-list");

describe("LinkedList", async assert => {
  {
    // empty() on creation
    const list = new LinkedList();

    assert({
      given: "empty list",
      should: "return true",
      actual: list.empty(),
      expected: true
    });
  }

  {
    // appending 3 items
    const list = new LinkedList();
    list
      .append(1)
      .append(2)
      .append(3);

    assert({
      given: "list.length",
      should: "return 3",
      actual: list.length,
      expected: 3
    });

    assert({
      given: "list.empty()",
      should: "return false",
      actual: list.empty(),
      expected: false
    });

    assert({
      given: "list.toArray()",
      should: "return [1, 2, 3]",
      actual: list.toArray(),
      expected: [1, 2, 3]
    });
  }

  {
    // prepending 3 items
    const list = new LinkedList();
    list
      .prepend(1)
      .prepend(2)
      .prepend(3);

    assert({
      given: "list.length",
      should: "return 3",
      actual: list.length,
      expected: 3
    });

    assert({
      given: "list.empty()",
      should: "return false",
      actual: list.empty(),
      expected: false
    });

    assert({
      given: "list.toArray()",
      should: "return [3, 2, 1]",
      actual: list.toArray(),
      expected: [3, 2, 1]
    });
  }

  {
    // append 2 items, prepend 1
    const list = new LinkedList();
    list
      .append(1)
      .append(2)
      .prepend(3);

    assert({
      given: "list.length",
      should: "return 3",
      actual: list.length,
      expected: 3
    });

    assert({
      given: "list.empty()",
      should: "return false",
      actual: list.empty(),
      expected: false
    });

    assert({
      given: "list.toArray()",
      should: "return [3, 1, 2]",
      actual: list.toArray(),
      expected: [3, 1, 2]
    });
  }

  {
    // forEach()
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    let newList = [];
    list.forEach(item => newList.push(item));

    assert({
      given: "newList",
      should: "return [1, 2, 3, 4, 5]",
      actual: newList,
      expected: [1, 2, 3, 4, 5]
    });
  }

  {
    // find()
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    // find an item that exists in the linked list
    assert({
      given: "list.find(5)",
      should: "return 5",
      actual: list.find(5),
      expected: 5
    });

    // find an item that does not exist in the linked list
    assert({
      given: "list.find(-1)",
      should: "return null",
      actual: list.find(-1),
      expected: null
    });
  }

  {
    // prependAll()
    const list = new LinkedList();
    list.prependAll(1, 2, 3, 4, 5);

    assert({
      given: "list.length",
      should: "return 5",
      actual: list.length,
      expected: 5
    });

    assert({
      given: "list.toArray()",
      should: "return [5, 4, 3, 2, 1]",
      actual: list.toArray(),
      expected: [5, 4, 3, 2, 1]
    });
  }

  {
    // reverse()
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    const reversed = list.reverse();

    assert({
      given: "reversed.toArray()",
      should: "return [5, 4, 3, 2, 1]",
      actual: reversed.toArray(),
      expected: [5, 4, 3, 2, 1]
    });

    assert({
      given: "reversed === list",
      should: "be different objects",
      actual: reversed === list,
      expected: false
    });
  }

  {
    // reverseInPlace()
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    const reversed = list.reverseInPlace();

    assert({
      given: "reversed.toArray()",
      should: "return [5, 4, 3, 2, 1]",
      actual: reversed.toArray(),
      expected: [5, 4, 3, 2, 1]
    });

    assert({
      given: "reversed === list",
      should: "be the same object",
      actual: reversed === list,
      expected: true
    });
  }

  {
    // remove() the head
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    const removed = list.remove(1);

    assert({
      given: "removed",
      should: "be 1",
      actual: removed,
      expected: 1
    });

    assert({
      given: "list.length",
      should: "be 4",
      actual: list.length,
      expected: 4
    });

    assert({
      given: "list.toArray()",
      should: "be [2, 3, 4, 5]",
      actual: list.toArray(),
      expected: [2, 3, 4, 5]
    });
  }

  {
    // remove() the tail
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    const removed = list.remove(5);

    assert({
      given: "removed",
      should: "be 5",
      actual: removed,
      expected: 5
    });

    assert({
      given: "list.length",
      should: "be 4",
      actual: list.length,
      expected: 4
    });

    assert({
      given: "list.toArray()",
      should: "be [1, 2, 3, 4]",
      actual: list.toArray(),
      expected: [1, 2, 3, 4]
    });
  }

  {
    // remove() the middle
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    const removed = list.remove(3);

    assert({
      given: "removed",
      should: "be 3",
      actual: removed,
      expected: 3
    });

    assert({
      given: "list.length",
      should: "be 4",
      actual: list.length,
      expected: 4
    });

    assert({
      given: "list.toArray()",
      should: "be [1, 2, 4, 5]",
      actual: list.toArray(),
      expected: [1, 2, 4, 5]
    });
  }

  {
    // remove() something that ain't in the list
    const list = new LinkedList();
    list.appendAll(1, 2, 3, 4, 5);

    const removed = list.remove(-1);

    assert({
      given: "removed",
      should: "be null",
      actual: removed,
      expected: null
    });

    assert({
      given: "list.length",
      should: "be 5",
      actual: list.length,
      expected: 5
    });

    assert({
      given: "list.toArray()",
      should: "be [1, 2, 3, 4, 5]",
      actual: list.toArray(),
      expected: [1, 2, 3, 4, 5]
    });
  }

  {
    // remove()s the first duplicate only
    const list = new LinkedList();
    list.appendAll(1, 2, 2, 3);

    const removed = list.remove(2);

    assert({
      given: "removed",
      should: "be 2",
      actual: removed,
      expected: 2
    });

    assert({
      given: "list.length",
      should: "be 3",
      actual: list.length,
      expected: 3
    });

    assert({
      given: "list.toArray()",
      should: "be [1, 2, 3]",
      actual: list.toArray(),
      expected: [1, 2, 3]
    });
  }

  {
    // removeHead()
    const list = new LinkedList();
    const emptyHead = list.removeHead();

    list.appendAll(1, 2, 3, 4, 5);
    const head = list.removeHead();

    assert({
      given: "emptyHead",
      should: "be null",
      actual: emptyHead,
      expected: null
    });

    assert({
      given: "list.length",
      should: "return 4",
      actual: list.length,
      expected: 4
    });

    assert({
      given: "list.toArray()",
      should: "return [2, 3, 4, 5]",
      actual: list.toArray(),
      expected: [2, 3, 4, 5]
    });

    assert({
      given: "head",
      should: "be 1",
      actual: head,
      expected: 1
    });
  }

  {
    // removeTail()
    const list = new LinkedList();
    const emptyTail = list.removeTail();

    list.appendAll(1, 2, 3, 4, 5);
    const tail = list.removeTail();

    assert({
      given: "emptyTail",
      should: "be null",
      actual: emptyTail,
      expected: null
    });

    assert({
      given: "list.length",
      should: "return 4",
      actual: list.length,
      expected: 4
    });

    assert({
      given: "list.toArray()",
      should: "return [1, 2, 3, 4]",
      actual: list.toArray(),
      expected: [1, 2, 3, 4]
    });

    assert({
      given: "tail",
      should: "be 5",
      actual: tail,
      expected: 5
    });
  }
});
