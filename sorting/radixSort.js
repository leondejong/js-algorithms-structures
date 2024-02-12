import { swap } from "../utilities/index.js";

function radixSort(data) {
  const list = data.slice();
  const p = list.filter((n) => n >= 0);
  const n = list.filter((n) => n < 0);
  const positive = distribute(p);
  const negative = distribute(n.map(Math.abs));
  return [...negative.map((n) => -n).reverse(), ...positive];
}

function distribute(list) {
  const max = Math.max(...list);
  for (let factor = 1; Math.trunc(max / factor) > 0; factor *= 10) {
    list = countingSort(list, factor);
  }
  return list;
}

function countingSort(data, factor) {
  const list = [];
  const count = new Array(10).fill(0);
  for (const value of data) {
    count[Math.trunc(value / factor) % 10]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  for (let i = data.length - 1; i >= 0; i--) {
    const item = data[i];
    const position = count[Math.trunc(item / factor) % 10] - 1;
    list[position] = item;
    count[Math.trunc(item / factor) % 10]--;
  }
  return list;
}

export { radixSort };
export default radixSort;
