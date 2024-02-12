import { swap } from "../utilities/index.js";

function shellSortRecursive(data) {
  return shellRecursive(data.slice(), 1);
}

function shellRecursive(list, k) {
  if (k > list.length) return list;
  shellRecursive(list, (k + 1) * 2 - 1);
  for (let i = k; i < list.length; i++) {
    const item = list[i];
    let j = i;
    while (j >= k && list[j - k] > item) {
      swap(list, j, j - k);
      j -= k;
    }
  }
  return list;
}

export { shellSortRecursive };
export default shellSortRecursive;
