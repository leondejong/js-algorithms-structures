import { array } from "../utilities/index.js";

function print(data) {
  console.log(`edges: ${data[0]}, magnitude: ${data[1]}`);
  data[2].forEach((e) => {
    console.log(`edge ${e[0]}: (${e[1]}, ${e[0]}), magnitude: ${e[2]}`);
  });
}

function min(keys, mst) {
  let min = Infinity;
  let index;
  for (const i in mst) {
    if (!mst[i] && keys[i] < min) {
      min = keys[i];
      index = Number(i);
    }
  }
  return index;
}

function compile(matrix, parent) {
  const data = [];
  let total = 0;
  for (let i = 1; i < parent.length; i++) {
    total += matrix[i][parent[i]];
    data.push([i, parent[i], matrix[i][parent[i]]]);
  }
  data.sort((a, b) => a[2] - b[2]);
  return [data.length, total, data];
}

function prim(matrix) {
  const keys = array(matrix.length, Infinity);
  const mst = array(matrix.length, false);
  const parent = [-1];
  keys[0] = -Infinity;
  for (let i = 0; i < matrix.length - 1; i++) {
    const y = min(keys, mst);
    mst[y] = true;
    for (let x = 0; x < matrix[0].length; x++) {
      if (!mst[x] && matrix[y][x] !== Infinity && matrix[y][x] < keys[x]) {
        parent[x] = y;
        keys[x] = matrix[y][x];
      }
    }
  }
  return parent;
}

export { prim, compile as pcompile, print as pprint };
export default prim;
