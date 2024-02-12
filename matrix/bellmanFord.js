import { array, matrixToList } from "../utilities/index.js";

function print(magnitudes) {
  magnitudes.forEach((e, i) => {
    console.log("vertex:", i, "distance:", e);
  });
}

function bellmanFord(list, length, source = 0) {
  const magnitudes = array(length, Infinity);
  magnitudes[source] = 0;
  for (let i = 0; i < length - 1; i++) {
    for (const [a, b, m] of list) {
      if (magnitudes[a] !== Infinity && magnitudes[a] + m < magnitudes[b]) {
        magnitudes[b] = magnitudes[a] + m;
      }
    }
  }
  for (const [a, b, m] of list) {
    if (magnitudes[a] !== Infinity && magnitudes[a] + m < magnitudes[b]) {
      magnitudes = [-1];
    }
  }
  return magnitudes;
}

export { bellmanFord, print as bfprint };
export default bellmanFord;
