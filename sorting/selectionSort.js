import { swap } from "../utilities/index.js";

function selectionSort(data) {
  const list = data.slice();
  for (let i = 0; i < list.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[k]) {
        k = j;
      }
    }
    if (i !== k) {
      swap(list, i, k);
    }
  }
  return list;
}

export { selectionSort };
export default selectionSort;
