const { describe } = require("riteway");
const Tree = require("./tree");
// const sortedArrayToBalancedTree = require("./sortedArrayToBalancedTree");

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
    tree.insert(1);

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
    tree.insertAll(...list);

    const distribution = list.reduce((acc, i) => {
      acc[i] = 0;
      return acc;
    }, {});

    const N = 10000;
    for (let i = 0; i < N; i += 1) {
      const { data } = tree.getRandomNode();
      distribution[data] += 1;
    }

    const distributionPercentages = Object.values(distribution).map(
      count => (count / N) * 100
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

  // {
  //   // 1M node tree
  //   const tree = new Tree();
  //   const N = 1000;
  //   let list = Array(N);
  //   for (let i = 0; i < N; i += 1) {
  //     list[i] = i;
  //   }
  //   sortedArrayToBalancedTree(tree, list);
  //   // tree.insertAll(...list);

  //   const distribution = list.reduce((acc, i) => {
  //     acc[i] = 0;
  //     return acc;
  //   }, {});

  //   let M = 100000;
  //   for (let i = 0; i < M; i += 1) {
  //     const { data } = tree.getRandomNode();
  //     distribution[data] += 1;
  //   }

  //   const distributionPercentages = Object.values(distribution).map(
  //     count => (count / M) * N * 100
  //   );

  //   function percentDiff(fromV1, toV2) {
  //     return ((toV2 - fromV1) / fromV1) * 100;
  //   }

  //   const allGoodHomie = distributionPercentages.every(percent => {
  //     return Math.abs(percentDiff(percent, 10)) <= 10;
  //   });

  //   assert({
  //     given: "allGoodHomie",
  //     should: "be true",
  //     actual: allGoodHomie,
  //     expected: true
  //   });
  // }
});
