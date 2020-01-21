const { describe } = require("riteway");
const Queue = require("./queue");

describe("Queue", async assert => {
  {
    // empty on creation
    const q = new Queue();

    assert({
      given: "empty queue",
      should: "return true",
      actual: q.isEmpty(),
      expected: true
    });
  }

  {
    // dequeue nothing
    const q = new Queue();
    const result = q.dequeue();

    assert({
      given: "empty queue",
      should: "dequeue null",
      actual: result,
      expected: null
    });
  }

  {
    // toArray on empty queue
    const q = new Queue();
    const result = q.toArray();

    assert({
      given: "empty queue, queue.toArray()",
      should: "return []",
      actual: result,
      expected: []
    });
  }

  {
    // toArray returns a _new_ array
    const q = new Queue();
    const first = q.toArray();
    const second = q.toArray();

    assert({
      given: "two queue.toArray()s",
      should: "not be equal refs",
      actual: first === second,
      expected: false
    });
  }

  {
    // enqueue each [1, 2, 3], dequeue returns 1
    const q = new Queue();
    [1, 2, 3].forEach(i => q.enqueue(i));
    const result = q.dequeue();

    assert({
      given: "queue = [1, 2, 3]",
      should: "return 1",
      actual: result,
      expected: 1
    });

    assert({
      given: "queue.length",
      should: "return 2",
      actual: q.length,
      expected: 2
    });
  }

  {
    // enqueue and dequeue N things
    const q = new Queue();
    const list = [1, 2, 3, 4, 5];
    list.forEach(i => q.enqueue(i));
    list.forEach(() => q.dequeue());
    const result = q.toArray();

    assert({
      given: "enqueue 5 things, dequeue 5 things, q.toArray",
      should: "return []",
      actual: result,
      expected: []
    });
  }
});
