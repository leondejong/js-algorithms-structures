import { exists } from "../utilities/index.js";

class Vertex {
  #key;
  #value;
  #list = [];
  #done = false;
  #active = false;

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

  get list() {
    return this.#list;
  }

  set list(list) {
    this.#list = [...new Set([...list])];
  }

  get done() {
    return this.#done;
  }

  set done(done) {
    this.#done = done;
  }

  get active() {
    return this.#active;
  }

  set active(active) {
    this.#active = active;
  }

  length() {
    return this.#list.length;
  }

  empty() {
    return !exists(this.#value);
  }

  add(vertex) {
    this.#list = [...new Set([...this.#list, vertex])];
    return this;
  }

  remove(vertex) {
    this.#list = this.#list.filter((v) => v !== vertex);
    return this;
  }
}

export default Vertex;
export { Vertex };
