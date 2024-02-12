import { matrixToList } from "../utilities/index.js";

function dfs(graph, node = 0, list = []) {
  list.push(node);
  for (const vertex of graph[node] || []) {
    if (list.includes(vertex)) continue;
    dfs(graph, vertex, list);
  }
  return list;
}

function bfs(graph, node = 0) {
  const list = [node];
  const queue = [node];
  while (queue.length > 0) {
    for (const vertex of graph[queue.shift()] || []) {
      if (list.includes(vertex)) continue;
      list.push(vertex);
      queue.push(vertex);
    }
  }
  return list;
}

export { dfs, bfs };
export default dfs;
