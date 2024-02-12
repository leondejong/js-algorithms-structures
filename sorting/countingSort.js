import { swap } from "../utilities/index.js";

function countingSort(data) {
  const list = [];
  const min = Math.min(...data);
  const max = Math.max(...data);
  const count = new Array(max - min + 1).fill(0);
  for (const value of data) {
    count[value - min]++;
  }
  let index = 0;
  for (let i = 0; i <= max - min; i++) {
    while (count[i] > 0) {
      list[index] = i + min;
      count[i]--;
      index++;
    }
  }
  return list;
}

function countingSortAlternative(data) {
  const list = [];
  const min = Math.min(...data);
  const max = Math.max(...data);
  const count = new Array(max - min + 1).fill(0);
  for (const value of data) {
    count[value - min]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  for (let i = data.length - 1; i >= 0; i--) {
    const item = data[i];
    const position = count[item - min] - 1;
    list[position] = item;
    count[item - min]--;
  }
  return list;
}

export { countingSort };
export default countingSort;
