class Graph {
  adjacencyList: Map<string, string[]>;
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }
  depthFirstTraversal(startVertex: string): string[] {
    const visited: Set<string> = new Set();
    const result: string[] = [];

    const dfs = (vertex: string): void => {
      visited.add(vertex);
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(startVertex);

    return result;
  }
  breadthFirstTraversal(startVertex: string): string[] {
    const queue: string[] = [startVertex];
    const visited: Set<string> = new Set([startVertex]);
    const result: string[] = [];

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

// Example
const graph = new Graph();

["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");

console.log("DFS:", graph.depthFirstTraversal("A"));
console.log("BFS:", graph.breadthFirstTraversal("A"));
