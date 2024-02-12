import {
  exists,
  rangeArray,
  shuffleArray,
  verifyOrder,
  verifyColor,
  verifyBlackNode,
  isBST,
  isRBT,
} from "../utilities/index.js";
import Node from "./Node.js";

class RedBlackTree {
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
    this.#add(this.#root, key, value);
    return this;
  }

  remove(key) {
    this.#remove(this.#root, key);
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

  successor(node) {
    if (!exists(node)) return;
    if (exists(node.right)) {
      return this.#min(node.right);
    }
    let parent = node.parent;
    while (exists(parent) && node === parent.right) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }

  predecessor(node) {
    if (!exists(node)) return;
    if (exists(node.left)) {
      return this.#max(node.left);
    }
    let parent = node.parent;
    while (exists(parent) && node === parent.left) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }

  #add(node, key, value) {
    const entry = new Node(key, value);
    entry.setBlack();
    const parent = this.#insertPoint(node, key);
    if (parent?.key === key) return;
    this.#length++;
    entry.parent = parent;
    if (!exists(parent)) {
      this.#root = entry;
    } else if (entry.key < parent.key) {
      parent.left = entry;
    } else {
      parent.right = entry;
    }
    if (!exists(entry.parent)) {
      return entry.setBlack();
    }
    if (!exists(entry.grand)) {
      return;
    }
    this.#balanceInsert(entry);
  }

  #remove(node, key) {
    if (!exists(node)) return;
    const subject = this.#find(node, key);
    if (!exists(subject)) return;
    this.#length--;
    let descendant;
    let entry = subject;
    let black = entry.black;
    if (!exists(subject.left)) {
      descendant = subject.right;
      this.#transplant(subject, subject.right);
    } else if (!exists(subject.right)) {
      descendant = subject.left;
      this.#transplant(subject, subject.left);
    } else {
      entry = this.#min(subject.right);
      black = entry.black;
      descendant = entry.right;
      if (exists(descendant) && entry.parent === subject) {
        descendant.parent = entry;
      } else {
        this.#transplant(entry, entry.right);
        entry.right = subject.right;
        if (exists(entry.right)) {
          entry.right.parent = entry;
        }
      }
      this.#transplant(subject, entry);
      entry.left = subject.left;
      entry.left.parent = entry;
      entry.black = subject.black;
    }
    if (black === true) {
      this.#balanceDelete(descendant);
    }
  }

  #min(node) {
    while (exists(node.left)) {
      node = node.left;
    }
    return node;
  }

  #max(node) {
    while (exists(node.right)) {
      node = node.right;
    }
    return node;
  }

  #find(node, key) {
    while (exists(node)) {
      if (node.key === key) {
        return node;
      }
      if (node.key > key) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }

  #insertPoint(node, key) {
    let point;
    while (exists(node)) {
      point = node;
      if (node.key > key) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return point;
  }

  #traverseInOrder(node, callback = console.log) {
    if (!exists(node)) return;
    const list = [];
    let entry = node;
    while (exists(entry) || list.length > 0) {
      while (exists(entry)) {
        list.push(entry);
        entry = entry.left;
      }
      entry = list.pop();
      callback(entry);
      entry = entry.right;
    }
  }

  #transplant(node, entry) {
    if (!exists(node)) return;
    if (!exists(node.parent)) {
      this.#root = entry;
    } else if (node.isLeft()) {
      node.parent.left = entry;
    } else {
      node.parent.right = entry;
    }
    if (exists(entry)) {
      entry.parent = node.parent;
    }
  }

  #rotateLeft(node) {
    if (!exists(node?.right)) return;
    const right = node.right;
    node.right = right.left;
    if (exists(right.left)) {
      right.left.parent = node;
    }
    right.parent = node.parent;
    if (!exists(node.parent)) {
      this.#root = right;
    } else if (node.isLeft()) {
      node.parent.left = right;
    } else {
      node.parent.right = right;
    }
    right.left = node;
    node.parent = right;
  }

  #rotateRight(node) {
    if (!exists(node?.left)) return;
    const left = node.left;
    node.left = left.right;
    if (exists(left.right)) {
      left.right.parent = node;
    }
    left.parent = node.parent;
    if (!exists(node.parent)) {
      this.#root = left;
    } else if (node.isLeft()) {
      node.parent.left = left;
    } else {
      node.parent.right = left;
    }
    left.right = node;
    node.parent = left;
  }

  #balanceInsert(node) {
    if (!exists(node)) return;
    while (node.parent?.isRed()) {
      if (node.parent.isLeft()) {
        node = this.#balanceInsertLeft(node);
      } else {
        node = this.#balanceInsertRight(node);
      }
      if (node === this.#root) {
        break;
      }
    }
    this.#root.black = true;
  }

  #balanceDelete(node) {
    if (!exists(node)) return;
    while (node.not(this.#root) && node.isBlack()) {
      if (node.isLeft()) {
        node = this.#balanceDeleteLeft(node);
      } else {
        node = this.#balanceDeleteRight(node);
      }
    }
    node.black = true;
  }

  #balanceInsertLeft(node) {
    if (!exists(node)) return;
    const sibling = node.parent.sibling;
    if (sibling?.isRed()) {
      sibling.setBlack();
      node.parent.setBlack();
      node.grand.setRed();
      node = node.grand;
    } else {
      if (node.isRight()) {
        node = node.parent;
        this.#rotateLeft(node);
      }
      node.parent.setBlack();
      node.grand.setRed();
      this.#rotateRight(node.grand);
    }
    return node;
  }

  #balanceInsertRight(node) {
    if (!exists(node)) return;
    const sibling = node.parent.sibling;
    if (sibling?.isRed()) {
      sibling.setBlack();
      node.parent.setBlack();
      node.grand.setRed();
      node = node.grand;
    } else {
      if (node.isLeft()) {
        node = node.parent;
        this.#rotateRight(node);
      }
      node.parent.setBlack();
      node.grand.setRed();
      this.#rotateLeft(node.grand);
    }
    return node;
  }

  #balanceDeleteLeft(node) {
    if (!exists(node)) return;
    let sibling = node.sibling;
    if (sibling?.isRed()) {
      sibling.setBlack();
      node.parent.setRed();
      this.#rotateLeft(node.parent);
      sibling = node.sibling;
    }
    if (sibling?.left?.isBlack() && sibling?.right?.isBlack()) {
      sibling.setRed();
      node = node.parent;
    } else {
      if (sibling?.right?.isBlack()) {
        sibling?.left?.setBlack();
        sibling.setRed();
        this.#rotateRight(sibling);
        sibling = node.sibling;
      }
      sibling?.setColor(node.parent);
      node.parent.setBlack();
      sibling?.right?.setBlack();
      this.#rotateLeft(node.parent);
      node = this.#root;
    }
    return node;
  }

  #balanceDeleteRight(node) {
    if (!exists(node)) return;
    let sibling = node.sibling;
    if (sibling?.isRed()) {
      sibling.setBlack();
      node.parent.setRed();
      this.#rotateRight(node.parent);
      sibling = node.sibling;
    }
    if (sibling?.left?.isBlack() && sibling?.right?.isBlack()) {
      sibling.setRed();
      node = node.parent;
    } else {
      if (sibling?.left?.isBlack()) {
        sibling?.right?.setBlack();
        sibling.setRed();
        this.#rotateLeft(sibling);
        sibling = node.sibling;
      }
      sibling?.setColor(node.parent);
      node.parent.setBlack();
      sibling?.left?.setBlack();
      this.#rotateRight(node.parent);
      node = this.#root;
    }
    return node;
  }
}

export default RedBlackTree;
export { RedBlackTree };
