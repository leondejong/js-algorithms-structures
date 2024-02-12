import {
  exists,
  rangeArray,
  shuffleArray,
  verifyOrder,
  verifyBalance,
  verifyHeight,
  isAVL,
} from "../utilities/index.js";
import Node from "./Node.js";

class AVLTree {
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

  add(key, value) {
    this.#root = this.#add(this.#root, key, value);
    return this;
  }

  remove(key) {
    this.#root = this.#remove(this.#root, key);
    return this;
  }

  find(key) {
    return this.#find(this.#root, key);
  }

  min() {
    if (this.empty()) return;
    return this.#min(this.#root);
  }

  max() {
    if (this.empty()) return;
    return this.#max(this.#root);
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

  successor(node, r) {
    if (exists(node.right) && !r) {
      return this.#min(node.right);
    }
    const parent = node.parent;
    if (exists(parent) && parent.right === node) {
      return this.successor(parent, true);
    }
    return parent;
  }

  predecessor(node, r) {
    if (exists(node.left) && !r) {
      return this.#max(node.left);
    }
    const parent = node.parent;
    if (exists(parent) && parent.left === node) {
      return this.predecessor(parent, true);
    }
    return parent;
  }

  #add(node, key, value) {
    if (!exists(node)) {
      const node = new Node(key, value);
      node.height = 1;
      this.#length++;
      return node;
    }
    if (key < node.key) {
      node.left = this.#add(node.left, key, value);
      this.#updateParent(node.left, node);
    } else if (key > node.key) {
      node.right = this.#add(node.right, key, value);
      this.#updateParent(node.right, node);
    } else {
      return node;
    }
    return this.#balance(node);
  }

  #remove(node, key) {
    if (!exists(node)) return;
    if (key < node.key) {
      node.left = this.#remove(node.left, key);
      this.#updateParent(node.left, node);
    } else if (key > node.key) {
      node.right = this.#remove(node.right, key);
      this.#updateParent(node.right, node);
    } else {
      if (!exists(node.right)) {
        this.#length--;
        return node.left;
      }
      if (!exists(node.left)) {
        this.#length--;
        return node.right;
      }
      const max = this.#max(node.left);
      node.key = max.key;
      node.value = max.value;
      node.left = this.#remove(node.left, node.key);
      this.#updateParent(node.left, node);
    }
    return this.#balance(node);
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

  #find(node, key) {
    if (!exists(node)) return;
    if (key === node.key) {
      return node;
    }
    const next = key < node.key ? node.left : node.right;
    return this.#find(next, key);
  }

  #traverseInOrder(node, callback = console.log) {
    if (!exists(node)) return;
    this.#traverseInOrder(node.left, callback);
    callback(node);
    this.#traverseInOrder(node.right, callback);
  }

  #balance(node) {
    this.#updateHeight(node);
    const balance = this.#getBalance(node);
    if (balance > 1) {
      if (this.#getBalance(node.left) < 0) {
        node.left = this.#rotateLeft(node.left);
        this.#updateParent(node.left, node);
      }
      return this.#rotateRight(node);
    }
    if (balance < -1) {
      if (this.#getBalance(node.right) > 0) {
        node.right = this.#rotateRight(node.right);
        this.#updateParent(node.right, node);
      }
      return this.#rotateLeft(node);
    }
    return node;
  }

  #rotateLeft(node) {
    const right = node.right;
    const mid = right.left;
    right.left = node;
    node.right = mid;
    this.#updateNode(node.right, node);
    this.#updateNode(right.left, right);
    return right;
  }

  #rotateRight(node) {
    const left = node.left;
    const mid = left.right;
    left.right = node;
    node.left = mid;
    this.#updateNode(node.left, node);
    this.#updateNode(left.right, left);
    return left;
  }

  #getHeight(node) {
    return exists(node) ? node.height : 0;
  }

  #getBalance(node) {
    if (exists(node)) {
      return this.#getHeight(node.left) - this.#getHeight(node.right);
    }
    return 0;
  }

  #updateNode(node, parent) {
    this.#updateParent(node, parent);
    this.#updateHeight(parent);
  }

  #updateParent(node, parent) {
    if (exists(node) && node !== this.#root) {
      node.parent = parent;
    }
  }

  #updateHeight(node) {
    const max = Math.max(
      this.#getHeight(node.left),
      this.#getHeight(node.right)
    );
    return (node.height = max + 1);
  }
}

export default AVLTree;
export { AVLTree };
