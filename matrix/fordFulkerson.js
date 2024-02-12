import { array } from "../utilities/index.js";

function breadthFirstSearch(matrix, source, sink, parent) {
  const visited = array(matrix.length, false);
  const queue = [source];
  visited[source] = true;
  parent[source] = -1;
  while (queue.length !== 0) {
    const y = queue.shift();
    for (let x = 0; x < matrix[0].length; x++) {
      if (!visited[x] && matrix[y][x] > 0) {
        if (x === sink) {
          parent[x] = y;
          return true;
        }
        queue.push(x);
        parent[x] = y;
        visited[x] = true;
      }
    }
  }
  return false;
}

function fordFulkerson(matrix, source, sink) {
  const residual = matrix.map((l) => l.map((v) => (v === Infinity ? 0 : v)));
  const parent = [];
  let max = 0;
  while (breadthFirstSearch(residual, source, sink, parent)) {
    let flow = Infinity;
    for (let x = sink; x !== source; x = parent[x]) {
      const y = parent[x];
      flow = Math.min(flow, residual[y][x]);
    }
    for (let x = sink; x !== source; x = parent[x]) {
      let y = parent[x];
      residual[y][x] -= flow;
      residual[x][y] += flow;
    }
    max += flow;
  }
  return max;
}

export { fordFulkerson };
export default fordFulkerson;
