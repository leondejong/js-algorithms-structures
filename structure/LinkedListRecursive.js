import { exists } from "../utilities/index.js";
import Node from "./Node.js";

class LinkedListRecursive {
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
    if (this.#root.key === key) {
      this.#root = this.#root.next;
      this.#length--;
      return this;
    }
    return this.#remove(key, this.#root, this.#root.next);
  }

  find(key) {
    return this.#find(this.#root, key);
  }

  list() {
    const list = [];
    this.traverse((node) => list.push(node));
    return list;
  }

  traverse(callback = console.log) {
    this.#traverse(this.#root, callback);
  }

  sort() {
    if (this.empty() || this.#length < 2) return this;
    let tail = this.#root;
    while (exists(tail.next)) {
      tail = tail.next;
    }
    this.#sort(this.#root, tail);
  }

  reverse() {
    if (this.empty() || this.#length < 2) return this;
    this.#root = this.#reverse(this.#root);
    return this;
  }

  #find(node, key) {
    if (!exists(node)) return;
    if (key === node.key) {
      return node;
    }
    return this.#find(node.next, key);
  }

  #remove(key, previous, current) {
    if (!exists(current)) return;
    if (current.key === key) {
      previous.next = current.next;
      this.#length--;
      return this;
    }
    return this.#remove(key, current, current.next);
  }

  #traverse(node, callback = console.log) {
    if (!exists(node)) return;
    callback(node);
    this.#traverse(node.next, callback);
  }

  #reverse(current, previous, next) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    if (!exists(current)) return previous;
    return this.#reverse(current, previous, next);
  }

  // Quicksort
  #sort(left, right) {
    if (!exists(left) || !exists(right)) return;
    if (left === right || left === right?.next) return;
    const pivot = this.#partition(left, right);
    this.#sort(left, pivot);
    if (pivot === left) {
      this.#sort(pivot.next, right);
    } else if (exists(pivot?.next)) {
      this.#sort(pivot.next.next, right);
    }
  }

  #partition(left, right) {
    if (left === right) return left;
    let pivot = left;
    let node = left;
    while (left !== right) {
      if (left.key < right.key) {
        pivot = node;
        this.#swap(node, left);
        node = node.next;
      }
      left = left.next;
    }
    this.#swap(node, right);
    return pivot;
  }

  #swap(a, b) {
    const node = { key: a.key, value: b.value };
    [a.key, a.value] = [b.key, b.value];
    [b.key, b.value] = [node.key, node.value];
  }
}

export default LinkedListRecursive;
export { LinkedListRecursive };
