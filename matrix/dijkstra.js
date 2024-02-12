import { array } from "../utilities/index.js";

function print(magnitudes) {
  magnitudes.forEach((e, i) => {
    console.log("vertex:", i, "distance:", e);
  });
}

function min(magnitudes, included) {
  let min = Infinity;
  let index = -1;
  for (const i in magnitudes) {
    if (!included[i] && magnitudes[i] < min) {
      min = magnitudes[i];
      index = Number(i);
    }
  }
  return [index, min];
}

function dijkstra(matrix, source = 0) {
  const magnitudes = array(matrix.length, Infinity);
  const included = array(matrix.length, false);
  magnitudes[source] = 0;
  for (const row of matrix) {
    const [y] = min(magnitudes, included);
    if (y === -1) continue;
    included[y] = true;
    for (const x in row) {
      const magnitude = matrix[y][x] + magnitudes[y];
      if (included[x] || magnitude === Infinity) continue;
      if (magnitude < magnitudes[x]) {
        magnitudes[x] = magnitude;
      }
    }
  }
  return magnitudes;
}

export { dijkstra, print as dprint };
export default dijkstra;
