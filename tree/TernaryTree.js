import { exists } from "../utilities/index.js";

class Node {
  #character;
  #value;
  #left;
  #mid;
  #right;

  constructor(character) {
    this.#character = character;
  }

  get character() {
    return this.#character;
  }

  set character(character) {
    this.#character = character;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  get left() {
    return this.#left;
  }

  set left(left) {
    this.#left = left;
  }

  get mid() {
    return this.#mid;
  }

  set mid(mid) {
    this.#mid = mid;
  }

  get right() {
    return this.#right;
  }

  set right(right) {
    this.#right = right;
  }

  last() {
    return exists(this.#value);
  }
}

class TernaryTree {
  #root;

  get root() {
    return this.#root;
  }

  empty() {
    return !exists(this.#root);
  }

  add(word, value) {
    this.#root = this.#add(this.#root, word, value, 0);
    return this;
  }

  remove(word) {
    this.#remove(this.#root, word, 0);
    return this;
  }

  contains(word) {
    const node = this.#find(this.#root, word, 0);
    return exists(node) && node.last();
  }

  get(word) {
    const node = this.#find(this.#root, word, 0);
    return node?.value;
  }

  #add(node, word, value, index) {
    const character = word[index];
    if (!exists(node)) {
      node = new Node(character);
    }
    if (character < node.character) {
      node.left = this.#add(node.left, word, value, index);
    } else if (character > node.character) {
      node.right = this.#add(node.right, word, value, index);
    } else if (index < word.length - 1) {
      node.mid = this.#add(node.mid, word, value, index + 1);
    } else {
      node.value = value;
    }
    return node;
  }

  // Soft delete
  #remove(node, word, index) {
    if (!exists(node)) return;
    const character = word[index];
    if (character < node.character) {
      this.#remove(node.left, word, index);
    } else if (character > node.character) {
      this.#remove(node.right, word, index);
    } else if (index < word.length - 1) {
      this.#remove(node.mid, word, index + 1);
    } else if (index === word.length - 1 && node.last()) {
      node.value = undefined;
    }
  }

  #find(node, word, index) {
    if (!exists(node)) return;
    const character = word[index];
    if (character < node.character) {
      return this.#find(node.left, word, index);
    } else if (character > node.character) {
      return this.#find(node.right, word, index);
    } else if (index < word.length - 1) {
      return this.#find(node.mid, word, index + 1);
    }
    return node;
  }
}

export default TernaryTree;
export { TernaryTree };
