import { swap } from "../utilities/index.js";

function timSort(data, size = 8) {
  const list = data.slice();
  for (let start = 0; start < list.length; start += size) {
    const end = Math.min(start + size, list.length) - 1;
    insert(list, start, end);
  }
  for (let run = size; run < list.length; run *= 2) {
    for (let left = 0; left < list.length; left += run * 2) {
      const mid = left + run - 1;
      const right = Math.min(left + run * 2, list.length) - 1;
      if (mid < right) {
        merge(list, left, mid, right);
      }
    }
  }
  return list;
}

function insert(list, start, end) {
  for (let i = start; i <= end; i++) {
    let j = i;
    while (j > 0 && list[j] < list[j - 1]) {
      swap(list, j, j - 1);
      j--;
    }
  }
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

export { timSort };
export default timSort;
