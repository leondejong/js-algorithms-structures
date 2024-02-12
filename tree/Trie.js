import { exists } from "../utilities/index.js";

class Node {
  #character;
  #last = false;
  #descendants = {};

  constructor(character) {
    this.#character = character;
  }

  get character() {
    return this.#character;
  }

  set character(character) {
    this.#character = character;
  }

  get last() {
    return this.#last;
  }

  set last(last) {
    this.#last = last;
  }

  get descendants() {
    return this.#descendants;
  }

  set descendants(descendants) {
    this.#descendants = descendants;
  }
}

class Trie {
  #root;

  constructor() {
    this.#root = new Node("");
  }

  get root() {
    return this.#root;
  }

  empty() {
    return !exists(this.#root);
  }

  add(word) {
    let node = this.#root;
    let descendants = this.#root.descendants;
    for (const character of word) {
      if (exists(descendants?.[character])) {
        node = descendants[character];
      } else {
        node = new Node(character);
        descendants[character] = node;
      }
      descendants = node.descendants;
    }
    node.last = true;
    return this;
  }

  remove(word) {
    const list = [];
    let descendants = this.#root.descendants;
    for (const character of word) {
      if (!exists(descendants?.[character])) break;
      const node = descendants[character];
      descendants = node.descendants;
      list.push(node);
    }
    if (list.length === 0 || list.length !== word.length) return this;
    list[list.length - 1].last = false;
    for (let i = list.length - 1; i > 0; i--) {
      const node = list[i];
      if (node.last) break;
      if (Object.keys(node.descendants).length === 0) {
        delete list[i - 1]?.descendants[node.character];
      }
    }
    return this;
  }

  contains(word) {
    const node = this.#find(word);
    return exists(node) && node.last;
  }

  containsPrefix(prefix) {
    return exists(this.#find(prefix));
  }

  wordsWithPrefix(prefix) {
    const list = [];
    const node = this.#find(prefix);
    if (exists(node)) {
      this.#addWords(node, prefix, list);
    }
    return list;
  }

  #addWords(node, word, list) {
    if (node.last) {
      list.push(word);
    }
    for (const descendant of Object.values(node.descendants)) {
      const character = descendant.character;
      this.#addWords(descendant, word + character, list);
    }
  }

  #find(characters) {
    let node;
    let descendants = this.#root.descendants;
    for (let character of characters) {
      const descendant = descendants[character];
      if (!exists(descendant)) return;
      node = descendant;
      descendants = node.descendants;
    }
    return node;
  }
}

export default Trie;
export { Trie };
