import { swap } from "../utilities/index.js";

function heapSort(data) {
  const list = data.slice();
  const length = list.length;
  for (let i = Math.trunc(length / 2) - 1; i > -1; i--) {
    heapify(list, i, length);
  }
  for (let i = length - 1; i > 0; i--) {
    swap(list, 0, i);
    heapify(list, 0, i);
  }
  return list;
}

function heapify(list, index, length) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let max = index;
  if (left < length && list[left] > list[max]) {
    max = left;
  }
  if (right < length && list[right] > list[max]) {
    max = right;
  }
  if (max != index) {
    swap(list, max, index);
    heapify(list, max, length);
  }
}

export { heapSort };
export default heapSort;
