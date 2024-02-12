import { swap } from "../utilities/index.js";

function bubbleSort(data) {
  const list = data.slice();
  for (let i = 0; i < list.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return list;
}

export { bubbleSort };
export default bubbleSort;
