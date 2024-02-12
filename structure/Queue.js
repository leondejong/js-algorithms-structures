import Node from "./Node.js";

class Queue {
  #head;
  #tail;
  #length = 0;

  get length() {
    return this.#length;
  }

  empty() {
    return this.#length === 0;
  }

  enqueue(key) {
    const node = new Node(key);
    if (this.empty()) {
      this.#head = this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#length++;
    return this;
  }

  dequeue() {
    if (this.empty()) return;
    const node = this.#head.key;
    this.#head = this.#head.next;
    this.#length--;
    return node;
  }

  peek() {
    return this.#head.key;
  }
}

export default Queue;
export { Queue };
