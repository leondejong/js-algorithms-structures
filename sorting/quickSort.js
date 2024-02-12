import { swap } from "../utilities/index.js";

function quickSort(data) {
  const list = data.slice();
  distribute(list, 0, list.length - 1);
  return list;
}

function distribute(list, low, high) {
  if (low >= high) return;
  const pivot = partition(list, low, high);
  distribute(list, low, pivot - 1);
  distribute(list, pivot + 1, high);
}

function partition(list, low, high) {
  const mid = Math.trunc((low + high) / 2);
  let pivot = low;
  swap(list, mid, high);
  for (let i = low; i < high; i++) {
    if (list[i] <= list[high]) {
      swap(list, pivot++, i);
    }
  }
  swap(list, pivot, high);
  return pivot;
}

export { quickSort };
export default quickSort;
