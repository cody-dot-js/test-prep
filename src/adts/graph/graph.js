const Queue = require("../queue/queue");

function graphOptions(options = {}) {
  return {
    isDirected: !!options.isDirected,
    numVertices: options.numVertices || 0
  };
}

function Edge({ y, weight, next } = {}) {
  return { y: y || null, weight: weight || null, next: next || null };
}

function Graph(options = {}) {
  const { numVertices, isDirected } = graphOptions(options);

  this.edges = {};
  this.degree = {};
  this.numVertices = numVertices;
  this.numEdges = 0;
  this.isDirected = isDirected;

  return {
    insertEdge: (x, y) => {
      function _insertEdge(x, y, isDirected) {
        let newEdge = Edge({ y, next: this.edges[x] });
        this.edges[x] = newEdge;
        this.degree[x] = this.degree[x] > 0 ? this.degree[x] + 1 : 1;

        if (!isDirected) {
          _insertEdge(y, x, true);
        } else {
          this.numEdges += 1;
        }
      }

      _insertEdge(x, y, this.isDirected);
    },

    edgeCount: () => this.numEdges,

    vertexCount: () => this.numVertices,

    degree: vertex => this.degree[vertex],

    bfs: ({
      start,
      onBeforeProcessVertex = () => {},
      onProcessEdge = () => {},
      onAfterProcessVertex = () => {}
    }) => {
      let processed = {};
      let discovered = {};
      let parent = {};
      let q = Queue();

      q.enqueue(start);
      discovered[start] = true;

      while (!q.empty()) {
        const currentVertex = q.dequeue();

        onBeforeProcessVertex(currentVertex);
        processed[currentVertex] = true;

        let edge = this.edges[currentVertex];
        while (edge) {
          const { y: successorVertex } = edge;
          if (!processed[successorVertex] || this.isDirected) {
            onProcessEdge(currentVertex, successorVertex);
          }

          if (!discovered[successorVertex]) {
            q.enqueue(successorVertex);
            discovered[successorVertex] = true;
            parent[successorVertex] = currentVertex;
          }

          edge = edge.next;
        }

        onAfterProcessVertex(currentVertex);
      }
    }
  };
}

module.exports = Graph;
