import Node from "./Node.js";

class Stack {
  #root;
  #length = 0;

  get length() {
    return this.#length;
  }

  empty() {
    return this.#length === 0;
  }

  push(key) {
    const node = new Node(key);
    if (!this.empty()) {
      node.next = this.#root;
    }
    this.#root = node;
    this.#length++;
    return this;
  }

  pop() {
    if (this.empty()) return;
    const node = this.#root.key;
    this.#root = this.#root.next;
    this.#length--;
    return node;
  }

  peek() {
    return this.#root.key;
  }
}

export default Stack;
export { Stack };
