import { swap } from "../utilities/index.js";

function quickSortDoublePivot(data) {
  const list = data.slice();
  distribute(list, 0, list.length - 1);
  return list;
}

function distribute(list, low, high) {
  if (low >= high) {
    return;
  }
  const [left, right] = partition(list, low, high);
  distribute(list, low, left - 1);
  distribute(list, left + 1, right - 1);
  distribute(list, right + 1, high);
}

function partition(list, low, high) {
  if (list[low] > list[high]) {
    swap(list, low, high);
  }
  let left = low + 1;
  let right = high - 1;
  let index = left;
  while (index <= right) {
    if (list[index] < list[low]) {
      swap(list, index++, left++);
    } else if (list[index] > list[high]) {
      swap(list, index, right--);
    } else {
      index++;
    }
  }
  swap(list, low, --left);
  swap(list, high, ++right);
  return [left, right];
}

export { quickSortDoublePivot };
export default quickSortDoublePivot;
