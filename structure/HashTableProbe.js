import { exists, hashCode } from "../utilities/index.js";
import Node from "./Node.js";

class HashTableProbe {
  #capacity;
  #list = [];
  #length = 0;

  constructor(capacity = 4) {
    this.#capacity = capacity;
  }

  get items() {
    return this.#list;
  }

  get length() {
    return this.#length;
  }

  empty() {
    return this.#length === 0;
  }

  add(key, value) {
    if (this.#length >= this.#capacity * 0.75) {
      this.#resize(this.#capacity * 2);
    }
    let index = this.#hash(key);
    while (exists(this.#list[index])) {
      const entry = this.#list[index];
      if (entry.key === key) {
        entry.value = value;
        return this;
      }
      index = this.#next(index);
    }
    this.#list[index] = new Node(key, value);
    this.#length++;
    return this;
  }

  remove(key) {
    let index = this.#hash(key);
    if (!exists(this.#list[index])) return this;
    while (this.#list[index].key !== key) {
      index = this.#next(index);
      if (!exists(this.#list[index])) return this;
    }
    this.#list[index] = undefined;
    this.#length--;
    index = this.#next(index);
    while (exists(this.#list[index])) {
      const entry = this.#list[index];
      this.#list[index] = undefined;
      this.#length--;
      this.add(entry.key, entry.value);
      index = this.#next(index);
    }
    if (this.#length <= this.#capacity * 0.25) {
      this.#resize(this.#capacity / 2);
    }
    return this;
  }

  find(key) {
    let index = this.#hash(key);
    while (exists(this.#list[index])) {
      const entry = this.#list[index];
      if (entry.key === key) {
        return entry.value;
      }
      index = this.#next(index);
    }
  }

  list() {
    return this.#list
      .filter((n) => n)
      .map((node) => ({ key: node.key, value: node.value }));
    return this.#list.filter((n) => n);
  }

  traverse(callback = console.log) {
    this.#list
      .filter((n) => n)
      .forEach((node) => callback({ key: node.key, value: node.value }));
  }

  #resize(capacity) {
    capacity = Math.trunc(capacity);
    const map = new HashTableProbe(capacity);
    for (let i = 0; i < this.#capacity; i++) {
      const entry = this.#list[i];
      if (exists(entry)) {
        map.add(entry.key, entry.value);
      }
    }
    this.#list = map.items;
    this.#capacity = capacity;
  }

  #hash(key) {
    return hashCode(key) % this.#capacity;
  }

  #next(index) {
    return (index + 1) % this.#capacity;
  }
}

export default HashTableProbe;
export { HashTableProbe };
