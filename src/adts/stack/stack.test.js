const { describe } = require("riteway");
const Stack = require("./stack");

describe("Stack", async assert => {
  {
    // push nothing
    const stack = Stack();
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
    const stack = Stack();
    const result = stack.pop();

    assert({
      given: "empty Stack",
      should: "pop",
      actual: result,
      expected: undefined
    });
  }

  {
    // toArray on empty Stack
    const stack = Stack();
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
    const stack = Stack();
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
    const stack = Stack();
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
    const stack = Stack();
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
