function print(magnitudes) {
  magnitudes.forEach((e, i) => {
    console.log("vertex:", i, "distance:", e);
  });
}

function printMatrix(magnitudes) {
  for (let y = 0; y < magnitudes.length; ++y) {
    let info = "";
    for (let x = 0; x < magnitudes[0].length; ++x) {
      info += `${magnitudes[y][x] === Infinity ? "∞" : magnitudes[y][x]} `;
    }
    console.log(info);
  }
}

function floydWarshall(matrix) {
  const magnitudes = matrix.map((l) => l.slice());
  const length = matrix.length;
  for (let z = 0; z < length; z++) {
    for (let y = 0; y < length; y++) {
      for (let x = 0; x < length; x++) {
        magnitudes[y][x] = Math.min(
          magnitudes[y][x],
          magnitudes[y][z] + magnitudes[z][x]
        );
      }
    }
  }
  return magnitudes;
}

export { floydWarshall, print as fwprint };
export default floydWarshall;
