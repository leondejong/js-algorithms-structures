import { array, matrixToList } from "../utilities/index.js";

function ucycle(graph, node = 0, visited = [], parent = -1) {
  visited[node] = true;
  for (const vertex of graph[node] || []) {
    if (!visited[vertex]) {
      if (ucycle(graph, vertex, visited, node)) return true;
    } else if (parent > -1 && vertex !== parent) {
      return true;
    }
  }
  return false;
}

// Undirected cycle
function undirected(graph) {
  const visited = array(graph.length, false);
  for (let node in graph) {
    node = Number(node);
    if (visited[node]) continue;
    if (ucycle(graph, node, visited, -1)) return true;
  }
  return false;
}

function dcycle(graph, node = 0, stack = [], visited = []) {
  if (stack[node]) return true;
  if (visited[node]) return false;
  stack[node] = visited[node] = true;
  for (const vertex of graph[node] || []) {
    if (dcycle(graph, vertex, stack, visited)) return true;
  }
  stack[node] = false;
  return false;
}

// Directed cycle
function directed(graph) {
  const visited = array(graph.length, false);
  const stack = array(graph.length, false);
  for (const node in graph) {
    if (dcycle(graph, Number(node), stack, visited)) return true;
  }
  return false;
}

export { directed, undirected };
export default undirected;
