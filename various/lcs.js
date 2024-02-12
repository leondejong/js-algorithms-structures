import { array } from "../utilities/index.js";

function pattern(matrix, a, b, x = a.length, y = b.length) {
  const list = [];
  let index = matrix[x][y];
  let i = x;
  let j = y;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      list[index - 1] = a[i - 1];
      index -= 1;
      i -= 1;
      j -= 1;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      i -= 1;
    } else {
      j -= 1;
    }
  }
  return list.join("");
}

function lcs(a, b, x = a.length, y = b.length) {
  const matrix = array(x + 1).map(() => array(y + 1, 0));
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      } else if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  return { lcs: pattern(matrix, a, b), length: matrix[x][y], matrix };
}

export { lcs };
export default lcs;
