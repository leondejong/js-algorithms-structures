import { exists } from "../utilities/index.js";
import Node from "./Node.js";

class LinkedList {
  #root;
  #length = 0;

  get root() {
    return this.#root;
  }

  get length() {
    return this.#length;
  }

  empty() {
    return this.#length === 0;
  }

  add(key, value) {
    const node = new Node(key, value);
    node.next = this.#root;
    this.#root = node;
    this.#length++;
    return this;
  }

  remove(key) {
    if (this.empty()) return this;
    if (this.#root.key === key) {
      this.#root = this.#root.next;
      this.#length--;
    } else {
      let previous = this.#root;
      let node = this.#root.next;
      while (exists(node)) {
        if (node.key === key) {
          previous.next = node.next;
          this.#length--;
          break;
        }
        previous = node;
        node = node.next;
      }
    }
    return this;
  }

  find(key) {
    let node = this.#root;
    while (exists(node)) {
      if (node.key === key) {
        return node;
      }
      node = node.next;
    }
  }

  list() {
    const list = [];
    this.traverse((node) => list.push(node));
    return list;
  }

  traverse(callback = console.log) {
    let node = this.#root;
    while (exists(node)) {
      callback(node);
      node = node.next;
    }
  }

  reverse() {
    if (this.empty() || this.#length < 2) return this;
    let next;
    let previous;
    let current = this.#root;
    while (exists(current)) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.#root = previous;
    return this;
  }

  // Naive bubble sort
  sort() {
    if (this.empty() || this.#length < 2) return this;
    let node;
    let swapped;
    do {
      node = this.#root;
      swapped = false;
      while (exists(node.next)) {
        if (node.key > node.next.key) {
          this.#swap(node, node.next);
          swapped = true;
        }
        node = node.next;
      }
    } while (swapped);
  }

  #swap(a, b) {
    const node = { key: a.key, value: b.value };
    [a.key, a.value] = [b.key, b.value];
    [b.key, b.value] = [node.key, node.value];
  }
}

export default LinkedList;
export { LinkedList };
