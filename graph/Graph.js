import { exists } from "../utilities/index.js";
import Vertex from "./Vertex.js";

class Graph {
  #root;

  constructor(root) {
    this.#root = root;
  }

  get root() {
    return this.#root;
  }

  set root(root) {
    this.#root = root;
  }

  empty() {
    return !exists(this.#root);
  }

  find(key) {
    const result = this.#find(this.#root, key);
    this.#reset();
    return result;
  }

  list() {
    const list = [];
    this.traverse((vertex) => list.push(vertex), false);
    return list;
  }

  traverse(callback = console.log, depth) {
    if (typeof depth === "boolean") {
      this.#traverse(this.#root, callback, depth);
    } else {
      this.#traverseRecursive(this.#root, callback);
    }
    this.#reset();
  }

  cyclic(directed = false, vertices = [this.#root]) {
    const check = directed
      ? this.#directed.bind(this)
      : this.#undirected.bind(this);
    for (const vertex of vertices) {
      const cycle = check(vertex);
      this.#reset(vertex);
      if (!vertex.done && cycle) {
        return true;
      }
    }
    return false;
  }

  #find(vertex, key) {
    if (!exists(vertex) || vertex.done) return;
    if (key === vertex.key) return vertex;
    vertex.done = true;
    if (exists(vertex.list)) {
      const vertices = vertex.list.filter((v) => !v.done);
      for (const node of vertices) {
        const result = this.#find(node, key);
        if (result instanceof Vertex) return result;
      }
    }
  }

  #traverse(vertex = this.#root, callback = console.log, depth = false) {
    const list = [];
    list.push(this.#root);
    while (list.length > 0) {
      const vertex = depth ? list.pop() : list.shift();
      if (!vertex.done) {
        callback(vertex);
        vertex.done = true;
        if (exists(vertex.list)) {
          if (depth) vertex.list.reverse();
          list.push(...vertex.list);
        }
      }
    }
  }

  #traverseRecursive(vertex = this.#root, callback = console.log) {
    if (!exists(vertex) || vertex.done) return;
    callback(vertex);
    vertex.done = true;
    if (exists(vertex.list)) {
      const vertices = vertex.list.filter((v) => !v.done);
      for (const node of vertices) {
        this.#traverseRecursive(node, callback);
      }
    }
  }

  #directed(source) {
    source.active = true;
    for (const vertex of source.list) {
      if (vertex.active || (!vertex.done && this.#directed(vertex))) {
        return true;
      }
    }
    source.active = false;
    source.done = true;
    return false;
  }

  #undirected(source, vertex) {
    source.done = true;
    for (const node of source.list) {
      if (node.done) {
        if (node !== source || node !== vertex) {
          return true;
        }
      } else if (this.#undirected(node, source)) {
        return true;
      }
    }
    return false;
  }

  #reset(vertex = this.#root) {
    if (!vertex.active && !vertex.done) return;
    vertex.active = vertex.done = false;
    if (!exists(vertex?.list)) return;
    for (const node of vertex.list) {
      this.#reset(node);
    }
  }

  #resetAll(vertex = this.#root, list = []) {
    if (list.includes(vertex)) return;
    list.push(vertex);
    vertex.active = vertex.done = false;
    if (!exists(vertex?.list)) return;
    for (const node of vertex.list) {
      this.#resetAll(node, list);
    }
  }
}

export default Graph;
export { Graph };
