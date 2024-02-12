import { swap } from "../utilities/index.js";

function mergeSort(data) {
  const list = data.slice();
  distribute(list, 0, list.length - 1);
  return list;
}

function distribute(list, low, high) {
  if (low >= high) return;
  const middle = Math.trunc((low + high) / 2);
  distribute(list, low, middle);
  distribute(list, middle + 1, high);
  merge(list, low, middle, high);
}

function merge(list, low, mid, high) {
  const initial = list.slice();
  let i = low;
  let j = mid + 1;
  let k = low;
  while (i <= mid && j <= high) {
    if (initial[i] <= initial[j]) {
      list[k++] = initial[i++];
    } else {
      list[k++] = initial[j++];
    }
  }
  while (i <= mid) {
    list[k++] = initial[i++];
  }
  while (j <= high) {
    list[k++] = initial[j++];
  }
}

function mergeAlternative(list, low, mid, high) {
  const left = list.slice(low, mid + 1);
  const right = list.slice(mid + 1, high + 1);
  let i = 0;
  let j = 0;
  let k = low;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      list[k++] = left[i++];
    } else {
      list[k++] = right[j++];
    }
  }
  while (i < left.length) {
    list[k++] = left[i++];
  }
  while (j < right.length) {
    list[k++] = right[j++];
  }
}

export { mergeSort };
export default mergeSort;
