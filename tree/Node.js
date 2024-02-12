import { exists } from "../utilities/index.js";

class Node {
  #key;
  #value;
  #left;
  #right;
  #parent;
  #height;
  #black;

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

  get left() {
    return this.#left;
  }

  set left(left) {
    this.#left = left;
  }

  get right() {
    return this.#right;
  }

  set right(right) {
    this.#right = right;
  }

  get parent() {
    return this.#parent;
  }

  set parent(parent) {
    this.#parent = parent;
  }

  get height() {
    return this.#height;
  }

  set height(height) {
    this.#height = height;
  }

  get black() {
    return this.#black;
  }

  set black(black) {
    this.#black = black;
  }

  get grand() {
    return this.#parent?.parent;
  }

  get sibling() {
    if (this.isLeft()) return this.parent?.right;
    return this.parent?.left;
  }

  empty() {
    return !exists(this.#value);
  }

  toggle() {
    this.#black = !this.#black;
  }

  isNode(node) {
    return node instanceof Node;
  }

  is(node) {
    return this === node;
  }

  not(node) {
    return this !== node;
  }

  isLeft() {
    return this === this.#parent?.left;
  }

  isRight() {
    return this === this.#parent?.right;
  }

  isBlack() {
    return this.#black === true;
  }

  isRed() {
    return this.#black === false;
  }

  isColor() {
    return typeof this.#black === "boolean";
  }

  setBlack() {
    this.#black = true;
  }

  setRed() {
    this.#black = false;
  }

  setColor(node) {
    this.#black = node?.black;
  }
}

export default Node;
export { Node };
