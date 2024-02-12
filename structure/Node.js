import { exists } from "../utilities/index.js";

class Node {
  #key;
  #value;
  #next;
  #previous;

  constructor(key, value) {
    this.#key = key;
    this.#value = value;
  }

  get key() {
    return this.#key;
  }

  set key(key) {
    this.#key = key;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
  }

  get previous() {
    return this.#previous;
  }

  set previous(previous) {
    this.#previous = previous;
  }

  empty() {
    return !exists(this.#value);
  }
}

export default Node;
export { Node };
