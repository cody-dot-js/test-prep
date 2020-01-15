const { describe } = require("riteway");
const Tree = require("./tree");

describe("tree.getRandomNode()", async assert => {
  {
    // empty tree
    const tree = new Tree();

    assert({
      given: "empty tree: tree.getRandomNode()",
      should: "return null",
      actual: tree.getRandomNode(),
      expected: null
    });
  }

  {
    // one node tree
    const tree = new Tree();
    tree.insertInOrder(1);

    assert({
      given: "one node tree: tree.getRandomNode()",
      should: "return the root",
      actual: tree.getRandomNode(),
      expected: tree.root
    });
  }

  {
    // ten node tree
    const tree = new Tree();
    const list = [20, 10, 30, 5, 15, 35, 33, 3, 7, 17];
    tree.insertAllInOrder(...list);

    const distribution = list.reduce((acc, i) => {
      acc[i] = 0;
      return acc;
    }, {});

    const N = 10000;
    for (let i = 0; i < N; i += 1) {
      const { data } = tree.getRandomNode();
      distribution[data] += 1;
    }

    const distributionPercentages = Object.values(distribution).reduce(
      (acc, count) => {
        const percent = (count / N) * 100;
        acc.push(percent);
        return acc;
      },
      []
    );

    function percentDiff(fromV1, toV2) {
      return ((toV2 - fromV1) / fromV1) * 100;
    }

    const allGoodHomie = distributionPercentages.every(percent => {
      return Math.abs(percentDiff(percent, 10)) <= 10;
    });

    assert({
      given: "allGoodHomie",
      should: "be true",
      actual: allGoodHomie,
      expected: true
    });
  }
});
