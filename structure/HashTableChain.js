import { exists, hashCode } from "../utilities/index.js";
import Node from "./Node.js";

class HashTableChain {
  #capacity;
  #list = [];
  #length = 0;

  constructor(capacity = 4) {
    this.#capacity = capacity;
  }

  get length() {
    return this.#length;
  }

  empty() {
    return this.#length === 0;
  }

  add(key, value) {
    const index = this.#hash(key);
    let entry = this.#list[index];
    while (exists(entry)) {
      if (entry.key === key) {
        entry.value = value;
        return this;
      }
      entry = entry.next;
    }
    const node = new Node(key, value);
    node.next = this.#list[index];
    this.#list[index] = node;
    this.#length++;
    return this;
  }

  remove(key) {
    const index = this.#hash(key);
    let entry = this.#list[index];
    let previous;
    while (exists(entry)) {
      if (entry.key === key) break;
      previous = entry;
      entry = entry.next;
    }
    if (!exists(entry)) return this;
    if (!exists(previous)) {
      this.#list[index] = entry.next;
    } else {
      previous.next = entry.next;
    }
    this.#length--;
    return this;
  }

  find(key) {
    const index = this.#hash(key);
    let entry = this.#list[index];
    while (exists(entry)) {
      if (entry.key === key) {
        return entry.value;
      }
      entry = entry.next;
    }
  }

  list() {
    const list = [];
    this.traverse((node) => list.push(node));
    return list;
  }

  traverse(callback = console.log) {
    for (let node of this.#list) {
      while (exists(node)) {
        callback({ key: node.key, value: node.value });
        node = node.next;
      }
    }
  }

  #hash(key) {
    return hashCode(key) % this.#capacity;
  }
}

export default HashTableChain;
export { HashTableChain };
