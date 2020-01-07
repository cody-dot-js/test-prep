const { describe } = require("riteway");
const Graph = require("./graph");

describe("Graph", async assert => {
  {
    // empty graph
    const graph = Graph();

    assert({
      given: "empty graph, the edge count",
      should: "return 0",
      actual: graph.edgeCount(),
      expected: 0
    });

    assert({
      given: "empty graph, the vertex count",
      should: "return 0",
      actual: graph.vertexCount(),
      expected: 0
    });
  }

  {
    // undirected graph, 6 vertices
    // edges: 1-6, 1-2, 1-5, 2-3, 2-5, 5-4, 3-4
    const graph = Graph({ isDirected: false, numVertices: 6 });
    const edges = [
      [1, 6],
      [1, 2],
      [1, 5],
      [2, 3],
      [2, 5],
      [5, 4],
      [3, 4]
    ];
    edges.forEach(([x, y]) => graph.insertEdge(x, y));
    // graph.insertEdge(1, 6);
    // graph.insertEdge(1, 2);
    // graph.insertEdge(1, 5);
    // graph.insertEdge(2, 3);
    // graph.insertEdge(2, 5);
    // graph.insertEdge(5, 4);
    // graph.insertEdge(3, 4);

    assert({
      given: "Graph({ numVertices: 6 })",
      should: "return 6",
      actual: graph.vertexCount(),
      expected: 6
    });

    assert({
      given: "graph.degree(1)",
      should: "return 3",
      actual: graph.degree(1),
      expected: 3
    });

    assert({
      given: "graph.edgeCount()",
      should: "return 7",
      actual: graph.edgeCount(),
      expected: 7
    });

    let listOfVertices = [];
    let listOfEdges = [];
    graph.bfs({
      start: 1,
      onBeforeProcessVertex: v => listOfVertices.push(v),
      onProcessEdge: (x, y) => listOfEdges.push([x, y])
    });

    assert({
      given: "graph.bfs(1), listOfVertices",
      should: "equal [1, 5, 2, 6, 4, 3]",
      actual: listOfVertices,
      expected: [1, 5, 2, 6, 4, 3]
    });

    assert({
      given: "graph.bfs(1), listOfEdges",
      should: "equal [[1, 5], [1, 2], [1, 6], [5, 4], [5, 2], [2, 3], [4, 3]]",
      actual: listOfEdges,
      expected: [
        [1, 5],
        [1, 2],
        [1, 6],
        [5, 4],
        [5, 2],
        [2, 3],
        [4, 3]
      ]
    });

    let numEdges = 0;
    graph.bfs({
      start: 1,
      onProcessEdge: (x, y) => {
        numEdges += 1;
      }
    });

    assert({
      given: "testing numEdges",
      should: "equal 7",
      actual: numEdges,
      expected: 7
    });
  }
});
