import {
  array,
  range,
  sort,
  swap,
  createMatrix,
  updateEdge,
  addEdge,
  removeEdge,
  symmetric,
  d2u,
  u2d,
  matrixToList,
  listToMatrix,
  hashCode,
  shuffleArray,
  removeDuplicates,
  randomNumber,
  randomInteger,
  randomString,
  randomArray,
  rangeArray,
  empty,
  exists,
  isNull,
  isUndefined,
  isBoolean,
  isNumber,
  isString,
  isBigint,
  isSymbol,
  isFunction,
  isArray,
  isObject,
  emptyString,
  emptyArray,
  emptyObject,
  deepEquals,
  balance,
  height,
  verifyNode,
  verifyOrder,
  verifyBalance,
  verifyHeight,
  countBlackNodes,
  verifyBlackNode,
  verifyColor,
  verifyHeap,
  isMaxHeap,
  isBST,
  isAVL,
  isRBT,
} from "./utilities/index.js";

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort,
  mergeSort,
  quickSort,
  heapSort,
  timSort,
  countingSort,
  radixSort,
  bucketSort,
  insertionSortRecursive,
  shellSortRecursive,
  quickSortDoublePivot,
} from "./sorting/index.js";

import {
  dfs,
  bfs,
  directed,
  undirected,
  dijkstra,
  floydWarshall,
  bellmanFord,
  kruskal,
  prim,
  fordFulkerson,
} from "./matrix/index.js";

import {
  dprint,
  fwprint,
  bfprint,
  kprint,
  pprint,
  pcompile,
} from "./matrix/index.js";

import {
  Node,
  Stack,
  Queue,
  LinkedList,
  LinkedListDouble,
  LinkedListRecursive,
  HashTableChain,
  HashTableProbe,
} from "./structure/index.js";

import {
  Node as TreeNode,
  BinarySearchTree,
  AVLTree,
  RedBlackTree,
  Heap,
  SplayTree,
  Trie,
  TernaryTree,
} from "./tree/index.js";

import { Vertex, Edge, Graph } from "./graph/index.js";

import { lcs, huffman, rabinKarp } from "./various/index.js";

import { hencode, hdecode } from "./various/index.js";

import {
  factr,
  factt,
  facti,
  fibr,
  fibm,
  fibt,
  fibi,
  binsr,
  binsi,
} from "./various/index.js";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const deletion = [6, 9, 4, 0, 2];

const ranged = rangeArray(0, 99);
const shuffled = shuffleArray(ranged);

const sparse = [
  ...rangeArray(-9, 10),
  ...rangeArray(14, 50),
  ...rangeArray(54, 90),
  ...rangeArray(94, 109),
];
const removal = shuffleArray(sparse);

const unsorted = randomArray(100, 0, 99);
const reference = sort(unsorted);

const positive = randomArray(100, 0, 99);
const negative = randomArray(100, -99, 0);
const decimal = randomArray(100, 0, 99, randomNumber);

const i = Infinity;

const d1 = [
  [i, 4, 2, i, i, i, i, i, i, i],
  [i, i, i, 8, i, i, i, i, i, i],
  [i, i, i, 6, 5, i, i, i, i, i],
  [i, i, i, i, i, 3, 7, i, i, i],
  [i, i, i, i, i, i, 9, i, i, i],
  [i, i, i, i, i, i, i, i, i, 1],
  [i, i, i, i, i, i, i, 2, 1, i],
  [i, i, i, i, i, i, i, i, i, 3],
  [i, i, i, i, i, i, i, i, i, 4],
  [i, i, i, i, i, i, i, i, i, i],
];

const u1 = [
  [i, 4, 2, i, i, i, i, i, i, i],
  [4, i, i, 8, i, i, i, i, i, i],
  [2, i, i, 6, 5, i, i, i, i, i],
  [i, 8, 6, i, i, 3, 7, i, i, i],
  [i, i, 5, i, i, i, 9, i, i, i],
  [i, i, i, 3, i, i, i, i, i, 1],
  [i, i, i, 7, 9, i, i, 2, 1, i],
  [i, i, i, i, i, i, 2, i, i, 3],
  [i, i, i, i, i, i, 1, i, i, 4],
  [i, i, i, i, i, 1, i, 3, 4, i],
];

const d2 = [
  [i, 2, i, i, i, i, i, 5, i, i],
  [i, i, 5, i, i, i, i, 8, i, i],
  [i, i, i, 4, i, 2, i, i, 1, 2],
  [i, i, i, i, 6, 9, i, i, i, i],
  [i, i, i, i, i, 7, i, i, i, i],
  [i, i, i, i, i, i, 0, i, i, 3],
  [i, i, i, i, i, i, i, 1, 3, i],
  [i, i, i, i, i, i, i, i, 4, i],
  [i, i, i, i, i, i, i, i, i, 1],
  [i, i, i, i, i, i, i, i, i, i],
];

const u2 = [
  [i, 2, i, i, i, i, i, 5, i, i],
  [2, i, 5, i, i, i, i, 8, i, i],
  [i, 5, i, 4, i, 2, i, i, 1, 2],
  [i, i, 4, i, 6, 9, i, i, i, i],
  [i, i, i, 6, i, 7, i, i, i, i],
  [i, i, 2, 9, 7, i, 0, i, i, 3],
  [i, i, i, i, i, 0, i, 1, 3, i],
  [5, 8, i, i, i, i, 1, i, 4, i],
  [i, i, 1, i, i, i, 3, 4, i, 1],
  [i, i, 2, i, i, 3, i, i, 1, i],
];

const lad1 = matrixToList(d1).adjacency;
const lau1 = matrixToList(u1).adjacency;
const lad2 = matrixToList(d2).adjacency;
const lau2 = matrixToList(u2).adjacency;

const led1 = matrixToList(d1).edges;
const leu1 = matrixToList(u1).edges;
const led2 = matrixToList(d2).edges;
const leu2 = matrixToList(u2).edges;

const n1 = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const n2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const s1 = "hfagdabhbhedfdefcafgcgdaabhaagdf";
const s2 = "cfbefdedbhddbdhhddeegaabhdeeegdb";
const s3 = "efcabaggfbehcgfbaeaabfceghefdega";

const words = [
  "type",
  "software",
  "application",
  "web",
  "app",
  "website",
  "html",
  "css",
  "javascript",
  "typescript",
];

console.log("\nSorting Algorithms\n\n");

console.log("\nUnsorted\n", unsorted);
console.log("\nReference\n", reference);

const sortingAlgorithms = [
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort,
  mergeSort,
  quickSort,
  heapSort,
  timSort,
  countingSort,
  radixSort,
  bucketSort,
  insertionSortRecursive,
  shellSortRecursive,
  quickSortDoublePivot,
];

for (const algorithm of sortingAlgorithms) {
  const sorted = algorithm(unsorted);
  const equals = deepEquals(reference, sorted);
  console.log(`\n${algorithm.name}: ${equals}\n`, sorted);
}

console.log("\nMatrix Algorithms\n\n");

console.log("\nSearch\n\n");

console.log("\nDirected 1\n\n");
console.log("dfs:", dfs(lad1), "bfs:", bfs(lad1));
console.log("\nUndirected 1\n\n");
console.log("dfs:", dfs(lau1), "bfs:", bfs(lau1));
console.log("\nDirected 2\n\n");
console.log("dfs:", dfs(lad2), "bfs:", bfs(lad2));
console.log("\nUndirected 2\n\n");
console.log("dfs:", dfs(lau2), "bfs:", bfs(lau2));

console.log("\nCycle Detection\n\n");

console.log("\nDirected 1\n\n");
console.log("undirected:", undirected(lad1));
console.log("directed:", directed(lad1));
console.log("\nUndirected 1\n\n");
console.log("undirected:", undirected(lau1));
console.log("directed:", directed(lau1));
console.log("\nDirected 2\n\n");
console.log("undirected:", undirected(lad2));
console.log("directed:", directed(lad2));
console.log("\nUndirected 2\n\n");
console.log("undirected:", undirected(lau2));
console.log("directed:", directed(lau2));

console.log("\nDijkstra\n\n");

console.log("\nDirected 1\n\n");
dprint(dijkstra(d1));
console.log("\nUndirected 1\n\n");
dprint(dijkstra(u1));
console.log("\nDirected 2\n\n");
dprint(dijkstra(d2));
console.log("\nUndirected 2\n\n");
dprint(dijkstra(u2));

console.log("\nFloyd Warshall\n\n");

console.log("\nDirected 1\n\n");
fwprint(floydWarshall(d1)[0]);
console.log("\nUndirected 1\n\n");
fwprint(floydWarshall(u1)[0]);
console.log("\nDirected 2\n\n");
fwprint(floydWarshall(d2)[0]);
console.log("\nUndirected 2\n\n");
fwprint(floydWarshall(u2)[0]);

console.log("\nBellman Ford\n\n");

console.log("\nDirected 1\n\n");
bfprint(bellmanFord(led1, d1.length));
console.log("\nUndirected 1\n\n");
bfprint(bellmanFord(leu1, u1.length));
console.log("\nDirected 2\n\n");
bfprint(bellmanFord(led2, d2.length));
console.log("\nUndirected 2\n\n");
bfprint(bellmanFord(leu2, u2.length));

console.log("\nKruskal\n\n");

console.log("\nDirected 1\n\n");
kprint(kruskal(led1, d1.length));
console.log("\nUndirected 1\n\n");
kprint(kruskal(leu1, u1.length));
console.log("\nDirected 2\n\n");
kprint(kruskal(led2, d2.length));
console.log("\nUndirected 2\n\n");
kprint(kruskal(leu2, u2.length));

console.log("\nPrim\n\n");

console.log("\nUndirected 1\n\n");
pprint(pcompile(u1, prim(u1)));
console.log("\nUndirected 2\n\n");
pprint(pcompile(u2, prim(u2)));

console.log("\nFord Fulkerson\n\n");

console.log("\nDirected 1\n\n");
console.log("max flow:", fordFulkerson(d1, 0, 9));
console.log("\nUndirected 1\n\n");
console.log("max flow:", fordFulkerson(u1, 0, 9));
console.log("\nDirected 2\n\n");
console.log("max flow:", fordFulkerson(d2, 0, 9));
console.log("\nUndirected 2\n\n");
console.log("max flow:", fordFulkerson(u2, 0, 9));

console.log("\nData Structures\n\n");

const stack = new Stack();
const queue = new Queue();

const stackList = [];
const queueList = [];

for (const entry of data) {
  stack.push(entry);
  queue.enqueue(entry);
}

console.log("\nStack\n\n", stack);
console.log(
  "length:",
  stack.length,
  "empty:",
  stack.empty(),
  "peek:",
  stack.peek()
);

while (!stack.empty()) {
  stackList.push(stack.pop());
}

console.log(stackList);

console.log("\nQueue\n\n", queue);
console.log(
  "length:",
  queue.length,
  "empty:",
  queue.empty(),
  "peek:",
  queue.peek()
);

while (!queue.empty()) {
  queueList.push(queue.dequeue());
}

console.log(queueList);

const lists = [LinkedList, LinkedListDouble, LinkedListRecursive];

for (const Linked of lists) {
  const linked = new Linked();
  const list = [];

  for (const entry of data) {
    linked.add(entry, String(entry));
  }

  for (const entry of deletion) {
    linked.remove(entry);
  }

  linked.traverse((node) => list.push(node.key));

  console.log(`\n${Linked.name}\n\n`, `Entries:`, list);
  console.log(linked);
  console.log(linked.list());
  console.log(
    "length:",
    linked.length,
    "empty:",
    linked.empty(),
    "find 3:",
    linked.find(3)?.key === 3,
    "find 4:",
    linked.find(4)?.key === 4
  );

  if (typeof linked.reverse === "function") {
    linked.reverse();
    list.length = 0;
    linked.traverse((node) => list.push(node.key));
    console.log("reverse:", list);
  }
}

const maps = [HashTableChain, HashTableProbe];

for (const HashTable of maps) {
  const map = new HashTable();
  const list = [];

  for (const entry of data) {
    map.add(entry, String(entry));
  }

  for (const entry of deletion) {
    map.remove(entry);
  }

  map.traverse((node) => list.push(node.key));

  console.log(`\n${HashTable.name}\n\n`, `Entries:`, list);
  console.log(map);
  console.log(map.list());
  console.log(
    "length:",
    map.length,
    "empty:",
    map.empty(),
    "find 3:",
    map.find(3)?.key === 3,
    "find 4:",
    map.find(4)?.key === 4
  );
}

console.log("\nTree Structures\n\n");

const trees = [BinarySearchTree, AVLTree, RedBlackTree];

for (const Tree of trees) {
  const tree = new Tree();
  const list = [];

  for (const entry of shuffled) {
    tree.add(entry, String(entry));
  }

  for (const entry of removal) {
    tree.remove(entry);
  }

  tree.traverse((node) => list.push(node.key));

  console.log(`\n${Tree.name}\n\n`, `entries:`, list);
  console.log(tree);
  console.log(tree.list());
  console.log(
    "length:",
    tree.length,
    "empty:",
    tree.empty(),
    "min:",
    tree.min()?.key,
    "max:",
    tree.max()?.key,
    "predecessor 52:",
    tree.predecessor(tree.find(52))?.key,
    "successor 52:",
    tree.successor(tree.find(52))?.key,
    "find 53:",
    tree.find(53)?.key === 53,
    "find 54:",
    tree.find(54)?.key === 54
  );
  console.log(
    "bst:",
    isBST(tree.root),
    "avl:",
    isAVL(tree.root),
    "rbt:",
    // After trying at least 3 implementations and settling on the implementation
    // described in Thomas H. Cormen's Introduction to Algorithms
    // the black-depth property is still violated
    isRBT(tree.root)
  );
  console.log(tree.root);
}

console.log("\nHeap\n\n");

const heap = new Heap();

for (const entry of shuffled) {
  heap.insert(entry);
}

console.log("empty:", heap.empty());
console.log("length:", heap.length());
console.log("max heap:", isMaxHeap(heap.list));
console.log("list:", heap.list);
console.log("sort:", heap.sorted());

const removed = [];

while (!heap.empty()) {
  removed.push(heap.extract());
}

console.log("removed:", removed);
console.log("empty:", heap.empty());
console.log("length:", heap.length());
console.log("max heap:", isMaxHeap(heap.list));
console.log("list:", heap.list);
console.log("sort:", heap.sorted());

console.log("\nSplay Tree\n\n");

const splay = new SplayTree();

for (const entry of shuffled) {
  splay.add(entry, String(entry));
}

for (const entry of removal) {
  splay.remove(entry);
}

console.log("empty:", splay.empty());
console.log("length:", splay.length);
console.log("min:", splay.min()?.value);
console.log("max:", splay.max()?.value);
console.log("find 50:", splay.find(50)?.value);
console.log("find 51:", splay.find(51)?.value);
console.log("list:", splay.list());
console.log("traverse:");
splay.traverse();

console.log("\nTrie\n\n");

const trie = new Trie();

for (const entry of words) {
  trie.add(entry);
}

// for (const entry of ["app", "website"]) {
//   trie.remove(entry);
// }

console.log(
  trie.contains("app"),
  trie.containsPrefix("app"),
  trie.wordsWithPrefix("app"),
  trie.contains("application"),
  trie.containsPrefix("application"),
  trie.wordsWithPrefix("application")
);

console.log(
  trie.contains("web"),
  trie.containsPrefix("web"),
  trie.wordsWithPrefix("web"),
  trie.contains("website"),
  trie.containsPrefix("website"),
  trie.wordsWithPrefix("website")
);

console.log("\nTernary Tree\n\n");

const ternary = new TernaryTree();

for (const entry of words) {
  ternary.add(entry, entry);
}

// for (const entry of ["app", "website"]) {
//   ternary.remove(entry);
// }

console.log(
  ternary.contains("app"),
  ternary.get("app"),
  ternary.contains("application"),
  ternary.get("application"),
  ternary.contains("web"),
  ternary.get("web"),
  ternary.contains("website"),
  ternary.get("website")
);

console.log("\nGraph\n\n");

const graph = new Graph();

const v0 = new Vertex(0, "zero");
const v1 = new Vertex(1, "one");
const v2 = new Vertex(2, "two");
const v3 = new Vertex(3, "three");
const v4 = new Vertex(4, "four");
const v5 = new Vertex(5, "five");
const v6 = new Vertex(6, "six");
const v7 = new Vertex(7, "seven");
const v8 = new Vertex(8, "eight");
const v9 = new Vertex(9, "nine");

v0.list = [v1, v2, v3];
v1.list = [v4, v5];
v2.list = [v6];
v4.list = [v7, v8, v9];

graph.root = v0;

console.log("empty", graph.empty());
console.log("find 6:", graph.find(6)?.value);
console.log("find 12:", graph.find(12)?.value);

console.log("undirected cycle:", graph.cyclic());
console.log("directed cycle:", graph.cyclic(true));

console.log("add v0 to v9 and add v9 to v0");

v9.add(v0);
v0.add(v9);

console.log("undirected cycle:", graph.cyclic());
console.log("directed cycle:", graph.cyclic(true));

console.log("remove v0 from v9");

v9.remove(v0);

console.log("undirected cycle:", graph.cyclic());
console.log("directed cycle:", graph.cyclic(true));

console.log("remove v9 from v0");

v0.remove(v9);

console.log("undirected cycle:", graph.cyclic());
console.log("directed cycle:", graph.cyclic(true));

console.log("list:", graph.list());

console.log("traverse:");

graph.traverse();

console.log("\nVarious\n\n");

console.log("\nLongest Common Subsequence\n\n");

console.log(lcs(s1, s2));

console.log("\nHuffman\n\n");

const info = huffman(s3);
const encoded = hencode(s3, info.codes);
const decoded = hdecode(encoded, info.root);

console.log(data, encoded, decoded, decoded === s3);

console.log("\nRabin Karp\n\n");

console.log(rabinKarp(s3, s3));
console.log(rabinKarp(s3, ""));
console.log(rabinKarp(s3, "xyz"));
console.log(rabinKarp(s3, "bag"));
console.log(rabinKarp(s3, "ceg"));
console.log(rabinKarp(s3, "deg"));

console.log("\nBasic\n\n");

console.log("\nFactorial\n\n");

for (const n of n1) {
  console.log(
    "recursive:",
    factr(n),
    "tail:",
    factt(n),
    "iterative:",
    facti(n)
  );
}

console.log("\nFibonacci\n\n");

for (const n of n1) {
  console.log(
    "recursive:",
    fibr(n),
    "memoized:",
    fibm(n),
    "tabulated:",
    fibt(n),
    "iterative:",
    fibi(n)
  );
}

console.log("\nBinary Search\n\n");

for (const n of [7, 8, 13, 21, 37]) {
  console.log("recursive:", binsr(n2, n), "iterative:", binsi(n2, n));
}

console.log("\nDeep Equals\n\n");

const o1 = {
  boolean: true,
  number: 1,
  string: "string",
  identity: function (x) {
    return x;
  },
  array: [1, 3, 7],
  object: {
    boolean: false,
    number: 0,
    string: "",
    array: [0, 1, 2],
    identity: (x) => x,
  },
  global: Window,
};

const o2 = {
  boolean: true,
  number: 1,
  string: "string",
  identity: function (x) {
    return x;
  },
  array: [1, 3, 7],
  object: {
    boolean: false,
    number: 0,
    string: "",
    array: [0, 1, 2],
    identity: (x) => x,
  },
  global: Window,
};

const o3 = {
  boolean: true,
  number: 1,
  string: "string",
  identity: function (x) {
    return x;
  },
  array: [1, 3, 7],
  object: {
    boolean: false,
    number: 0,
    string: "",
    array: [0, 1, 2, 3],
    identity: (x) => x,
  },
  global: Window,
};

console.log(deepEquals(o1, o2));
console.log(deepEquals(o1, o3));
