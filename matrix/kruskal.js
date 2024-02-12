import { array, range, matrixToList } from "../utilities/index.js";

function print(data) {
  const { total, magnitude, vertices } = data;
  console.log(`edges: ${total}, magnitude: ${magnitude}`);
  vertices.forEach((e) => {
    console.log(
      `edge ${e.edge}: (${e.source}, ${e.destination}), magnitude: ${e.magnitude}`
    );
  });
}

function find(index, parent) {
  while (parent[index] !== index) {
    index = parent[index];
  }
  return index;
}

function union(a, b, parent, rank) {
  a = find(a, parent);
  b = find(b, parent);
  if (rank[a] < rank[b]) {
    parent[a] = b;
  } else if (rank[a] > rank[b]) {
    parent[b] = a;
  } else {
    parent[b] = a;
    rank[a] += 1;
  }
}

function kruskal(list) {
  const parent = range(0, list.length);
  const rank = array(list.length, 0);
  const vertices = [];
  let magnitude = 0;
  let total = 0;
  list.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < list.length; i++) {
    const [a, b, m] = list[i];
    const x = find(a, parent);
    const y = find(b, parent);
    if (x !== y) {
      union(x, y, parent, rank);
      magnitude += m;
      total++;
      vertices.push({ edge: total, source: a, destination: b, magnitude: m });
    }
  }
  return { total, magnitude, vertices };
}

export { kruskal, print as kprint };
export default kruskal;
