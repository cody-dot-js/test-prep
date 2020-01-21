const { describe } = require("riteway");
const Stack = require("./stack");

describe("Stack", async assert => {
  {
    // empty on creation
    const stack = new Stack();

    assert({
      given: "new stack",
      should: "be empty",
      actual: stack.isEmpty(),
      expected: true
    });

    assert({
      given: "stack.length",
      should: "is 0",
      actual: stack.length,
      expected: 0
    });
  }

  {
    // push nothing
    const stack = new Stack();
    stack.push();

    assert({
      given: "nothing",
      should: "push `undefined`",
      actual: stack.toArray(),
      expected: [undefined]
    });
  }

  {
    // pop nothing
    const stack = new Stack();
    const result = stack.pop();

    assert({
      given: "empty Stack",
      should: "pop",
      actual: result,
      expected: null
    });
  }

  {
    // toArray on empty Stack
    const stack = new Stack();
    const result = stack.toArray();

    assert({
      given: "empty Stack, Stack.toArray()",
      should: "return []",
      actual: result,
      expected: []
    });
  }

  {
    // toArray returns a _new_ array
    const stack = new Stack();
    const first = stack.toArray();
    const second = stack.toArray();

    assert({
      given: "two Stack.toArray()s",
      should: "not be equal refs",
      actual: first === second,
      expected: false
    });
  }

  {
    // push each [1, 2, 3], pop returns 3
    const stack = new Stack();
    [1, 2, 3].forEach(i => stack.push(i));
    const result = stack.pop();

    assert({
      given: "Stack = [1, 2, 3]",
      should: "return 3",
      actual: result,
      expected: 3
    });
  }

  {
    // push and pop N things
    const stack = new Stack();
    const list = [1, 2, 3, 4, 5];
    list.forEach(i => stack.push(i));
    list.forEach(() => stack.pop());
    const result = stack.toArray();

    assert({
      given: "push 5 things, pop 5 things, stack.toArray",
      should: "return []",
      actual: result,
      expected: []
    });
  }
});
