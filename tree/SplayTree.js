import { exists, rangeArray, shuffleArray } from "../utilities/index.js";
import Node from "./Node.js";

class SplayTree {
  #root;
  #length = 0;

  get root() {
    return this.#root;
  }

  get length() {
    return this.#length;
  }

  empty() {
    return !exists(this.#root);
  }

  min() {
    if (this.empty()) return;
    return this.#min(this.#root);
  }

  max() {
    if (this.empty()) return;
    return this.#max(this.#root);
  }

  add(key, value) {
    const node = new Node(key, value);
    this.#root = this.#add(this.#root, node);
    return this;
  }

  remove(key) {
    this.#root = this.#remove(this.#root, key);
    return this;
  }

  find(key) {
    return this.#find(this.#root, key);
  }

  traverse(callback = console.log) {
    this.#traverseInOrder(this.#root, callback);
    return this;
  }

  list() {
    const list = [];
    this.traverse((node) => {
      list.push(node);
    });
    return list;
  }

  #min(node) {
    if (exists(node.left)) {
      return this.#min(node.left);
    }
    return node;
  }

  #max(node) {
    if (exists(node.right)) {
      return this.#max(node.right);
    }
    return node;
  }

  #add(node, value) {
    if (!exists(node)) {
      this.#length++;
      return value;
    }
    if (value.key < node.key) {
      node.left = this.#add(node.left, value);
      node.left.parent = node;
    } else if (value.key > node.key) {
      node.right = this.#add(node.right, value);
      node.right.parent = node;
    }
    return node;
  }

  #remove(node, key) {
    if (!exists(node)) return;
    if (key < node.key) {
      node.left = this.#remove(node.left, key);
      if (exists(node.left)) {
        node.left.parent = node;
      }
    } else if (key > node.key) {
      node.right = this.#remove(node.right, key);
      if (exists(node.right)) {
        node.right.parent = node;
      }
    } else {
      if (!exists(node.left)) {
        this.#length--;
        return node.right;
      }
      if (!exists(node.right)) {
        this.#length--;
        return node.left;
      }
      const max = this.#max(node.left);
      node.key = max.key;
      node.value = max.value;
      node.left = this.#remove(node.left, node.key);
      if (exists(node.left)) {
        node.left.parent = node;
      }
    }
    return node;
  }

  #find(node, key) {
    if (exists(node)) {
      if (key === node.key) {
        this.#splay(node);
        return node;
      }
      const next = key < node.key ? node.left : node.right;
      return this.#find(next, key);
    }
  }

  #traverseInOrder(node, callback = console.log) {
    if (!exists(node)) return;
    this.#traverseInOrder(node.left, callback);
    callback(node);
    this.#traverseInOrder(node.right, callback);
  }

  #splay(node) {
    while (node !== this.#root) {
      const parent = node.parent;
      const grand = parent.parent;
      if (!exists(grand)) {
        if (node.isLeft()) {
          this.#rotateRight(parent);
        } else {
          this.#rotateLeft(parent);
        }
      } else if (node.isLeft() && parent.isLeft()) {
        this.#rotateRight(grand);
        this.#rotateRight(parent);
      } else if (node.isRight() && parent.isRight()) {
        this.#rotateLeft(grand);
        this.#rotateLeft(parent);
      } else if (node.isLeft() && parent.isRight()) {
        this.#rotateRight(parent);
        this.#rotateLeft(parent);
      } else {
        this.#rotateLeft(parent);
        this.#rotateRight(parent);
      }
    }
  }

  #rotateLeft(node) {
    const right = node.right;
    node.right = right?.left;
    if (exists(node.right)) {
      node.right.parent = node;
    }
    this.#updateSiblings(node, right);
    if (exists(right)) {
      right.parent = node.parent;
      right.left = node;
    }
    node.parent = right;
  }

  #rotateRight(node) {
    const left = node.left;
    node.left = left?.right;
    if (exists(node.left)) {
      node.left.parent = node;
    }
    this.#updateSiblings(node, left);
    if (exists(left)) {
      left.parent = node.parent;
      left.right = node;
    }
    node.parent = left;
  }

  #updateSiblings(node, value) {
    if (!exists(node.parent)) {
      this.#root = value;
    } else if (node.isLeft()) {
      node.parent.left = value;
    } else {
      node.parent.right = value;
    }
  }
}

export default SplayTree;
export { SplayTree };
