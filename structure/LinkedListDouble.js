import { exists } from "../utilities/index.js";
import Node from "./Node.js";

class LinkedListDouble {
  #head;
  #tail;
  #length = 0;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get length() {
    return this.#length;
  }

  empty() {
    return this.#length === 0;
  }

  add(key, value) {
    this.insertHead(key, value);
    return this;
  }

  insertHead(key, value) {
    const node = new Node(key, value);
    if (this.empty()) {
      this.#head = this.#tail = node;
    } else {
      this.#head.previous = node;
      node.next = this.#head;
      this.#head = node;
    }
    this.#length++;
  }

  insertTail(key, value) {
    const node = new Node(key, value);
    if (this.empty()) {
      this.#head = this.#tail = node;
    } else {
      this.#tail.next = node;
      node.previous = this.#tail;
      this.#tail = node;
    }
    this.#length++;
  }

  insertBetween(key, value, a, b) {
    const node = new Node(key, value);
    if (this.empty()) {
      this.#head = this.#tail = node;
    } else {
      const x = this.find(a);
      const y = this.find(b);
      if (!exists(x) || !exists(y)) return;
      x.next = node;
      y.previous = node;
      node.next = y;
      node.previous = x;
    }
    this.#length++;
  }

  remove(key) {
    if (this.empty()) return this;
    if (this.#head.key === key) {
      if (this.#head?.next?.previous) {
        this.#head.next.previous = undefined;
      }
      this.#head = this.#head.next;
      this.#length--;
      return this;
    }
    if (this.#tail.key === key) {
      if (this.#tail?.previous?.next) {
        this.#tail.previous.next = undefined;
      }
      this.#tail = this.#tail.previous;
      this.#length--;
      return this;
    }
    let node = this.#head.next;
    while (exists(node)) {
      if (node.key === key) {
        node.previous.next = node.next;
        node.next.previous = node.previous;
        this.#length--;
        break;
      }
      node = node.next;
    }
    return this;
  }

  find(key) {
    let node = this.#head;
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
    this.traverseHead(callback);
  }

  traverseHead(callback = console.log) {
    let node = this.#head;
    while (exists(node)) {
      callback(node);
      node = node.next;
    }
  }

  traverseTail(callback = console.log) {
    let node = this.#tail;
    while (exists(node)) {
      callback(node);
      node = node.previous;
    }
  }

  reverse() {
    const head = this.#head;
    let node = this.#head;
    let placeholder;
    while (exists(node)) {
      placeholder = node.previous;
      node.previous = node.next;
      node.next = placeholder;
      node = node.previous;
    }
    if (exists(placeholder)) {
      this.#head = placeholder.previous;
    }
    this.#tail = head;
  }
}

export default LinkedListDouble;
export { LinkedListDouble };
