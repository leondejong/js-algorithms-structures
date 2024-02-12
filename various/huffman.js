function sort(nodes = []) {
  return nodes.sort((a, b) => a.frequency - b.frequency);
}

function frequencyMap(string) {
  const map = {};
  for (const character of string) {
    if (map[character]) {
      map[character] += 1;
    } else {
      map[character] = 1;
    }
  }
  return map;
}

function nodeQueue(characters) {
  const nodes = [];
  for (const [key, value] of Object.entries(characters)) {
    const node = {};
    node.character = key;
    node.frequency = value;
    nodes.push(node);
  }
  return sort(nodes);
}

function generateCodes(root, code = "", map = {}) {
  if (!root.left && !root.right) {
    if (root.character) {
      map[root.character] = code;
    }
    return map;
  }
  generateCodes(root.left, `${code}0`, map);
  generateCodes(root.right, `${code}1`, map);
  return map;
}

function generateTree(queue) {
  let root;
  while (queue.length > 1) {
    const node = {};
    node.left = queue.shift();
    node.right = queue.shift();
    node.character = false;
    node.frequency = node.left.frequency + node.right.frequency;
    root = node;
    queue.push(node);
    sort(queue);
  }
  return root;
}

function encode(string, codes) {
  const list = [];
  for (const character of string) {
    list.push(codes[character]);
  }
  return list;
}

function decode(list, root) {
  let string = "";
  for (const code of list) {
    let node = root;
    for (const digit of code) {
      if (digit === "0") {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    string += node.character;
  }
  return string;
}

function huffman(string = "") {
  const frequencies = frequencyMap(string);
  const nodes = nodeQueue(frequencies);
  const root = generateTree(nodes.slice());
  const codes = generateCodes(root);
  return { root, codes, nodes, frequencies };
}

export { huffman, encode as hencode, decode as hdecode };
export default huffman;
