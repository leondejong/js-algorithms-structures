import { swap } from "../utilities/index.js";

function insertionSortRecursive(data) {
  return insertionRecursive(data.slice(), data.length);
}

function insertionRecursive(list, k) {
  if (k < 2) return list;
  insertionRecursive(list, k - 1);
  const item = list[k - 1];
  let i = k - 2;
  while (i >= 0 && list[i] > item) {
    swap(list, i, i + 1);
    i--;
  }
  return list;
}

export { insertionSortRecursive };
export default insertionSortRecursive;
