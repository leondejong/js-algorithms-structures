import { swap } from "../utilities/index.js";

class Heap {
  #list = [];
  #index = -1;

  constructor(heap) {
    if (heap instanceof Heap) {
      this.#list = heap.list;
      this.#index = heap.index;
    }
  }

  get list() {
    return this.#list;
  }

  get index() {
    return this.#index;
  }

  empty() {
    return this.#index === -1;
  }

  length() {
    return this.#index + 1;
  }

  insert(data) {
    this.#list[++this.#index] = data;
    this.#heapifyUp();
    return this;
  }

  extract() {
    if (this.empty()) return;
    const data = this.#list[0];
    this.#list[0] = this.#list[this.#index--];
    delete this.#list[this.#index + 1];
    this.#heapifyDown(this.#index);
    return data;
  }

  sorted() {
    const [list, index] = [this.#list.slice(), this.#index];
    const data = this.#sort();
    [this.#list, this.#index] = [list, index];
    return data;
  }

  #parent(index) {
    return Math.trunc((index - 1) / 2);
  }

  #left(index) {
    return 2 * index + 1;
  }

  #right(index) {
    return 2 * index + 2;
  }

  #sort() {
    for (let i = 0; i <= this.#index; i++) {
      swap(this.#list, 0, this.#index - i);
      this.#heapifyDown(this.#index - i - 1);
    }
    return this.#list;
  }

  #heapifyUp() {
    let index = this.#index;
    let parent = this.#parent(index);
    while (parent > -1 && this.#list[index] > this.#list[parent]) {
      swap(this.#list, index, parent);
      index = parent;
      parent = this.#parent(index);
    }
  }

  #heapifyDown(end) {
    if (end === -1) return;
    let index = 0;
    while (index <= end) {
      const left = this.#left(index);
      const right = this.#right(index);
      if (left > end) break;
      let next;
      if (right > end) {
        next = left;
      } else {
        if (this.#list[left] > this.#list[right]) {
          next = left;
        } else {
          next = right;
        }
      }
      if (this.#list[index] > this.#list[next]) break;
      swap(this.#list, index, next);
      index = next;
    }
  }
}

export default Heap;
export { Heap };
