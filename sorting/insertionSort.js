import { swap } from "../utilities/index.js";

function insertionSort(data) {
  const list = data.slice();
  for (let i = 1; i < list.length; i++) {
    let j = i;
    while (j > 0 && list[j] < list[j - 1]) {
      swap(list, j, j - 1);
      j--;
    }
  }
  return list;
}

export { insertionSort };
export default insertionSort;
