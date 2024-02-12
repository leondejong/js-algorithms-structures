import { swap } from "../utilities/index.js";

function shellSort(data) {
  const list = data.slice();
  let k = Math.trunc(list.length / 2);
  while (k > 0) {
    for (let i = k; i < list.length; i++) {
      let j = i;
      while (j >= k && list[j] < list[j - k]) {
        swap(list, j, j - k);
        j -= k;
      }
    }
    k = Math.trunc(k / 2);
  }
  return list;
}

export { shellSort };
export default shellSort;
