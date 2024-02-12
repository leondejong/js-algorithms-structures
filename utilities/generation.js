// Generate array filled with provided value
const array = (n, v = 0) => Array(n).fill(v);

// Generate array with range from start number to length
const range = (s, l) => [...Array(l)].map((_, i) => s + i);

// Sort array
function sort(list = []) {
  return list.slice().sort((a, b) => a - b);
}

// Exchange array values
function swap(l, x = 0, y = 0) {
  [l[x], l[y]] = [l[y], l[x]];
}

// Create square 2d matrix
function createMatrix(n, v = Infinity) {
  return [...Array(n)].map(() => Array(n).fill(v));
}

// Update matrix edge weight from vertex a to b
function updateEdge(matrix, a, b, v = 1, directed = false) {
  matrix[a][b] = v;
  if (directed) return;
  matrix[b][a] = v;
}

// Add matrix edge connection between vertex a and b
function addEdge(matrix, a, b) {
  updateEdge(matrix, a, b, 1);
}

// Remove matrix edge connection between vertex a and b
function removeEdge(matrix, a, b) {
  updateEdge(matrix, a, b, 0);
}

// Check if matrix is symmetric
function symmetric(matrix) {
  let s = true;
  for (const y in matrix) {
    for (const x in matrix[y]) {
      s = s && matrix[y][x] === matrix[x][y];
    }
  }
  return s;
}

// Directed to undirected matrix
function d2u(matrix) {
  const m = matrix.map((v) => v.slice());
  for (let y = 0; y < m.length; y++) {
    for (let x = y + 1; x < m[y].length; x++) {
      m[x][y] = m[y][x];
    }
  }
  return m;
}

// Undirected to directed matrix
function u2d(matrix, value = Infinity) {
  const m = matrix.map((v) => v.slice());
  for (let y = 0; y < m.length; y++) {
    for (let x = y + 1; x < m[y].length; x++) {
      m[x][y] = value;
    }
  }
  return m;
}

// Matrix to adjacency and edge list
function matrixToList(matrix, value = Infinity) {
  const list = [];
  const edges = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== value) {
        if (!list[i]) {
          list[i] = [];
        }
        list[i].push(j);
        edges.push([i, j, matrix[i][j]]);
      }
    }
  }
  return { adjacency: list, edges };
}

// Edge list to matrix
function listToMatrix(list, dimension, directed = false) {
  const matrix = createMatrix(dimension);
  for (const edge of list) {
    updateEdge(matrix, edge[0], edge[1], edge[2], directed);
  }
  return matrix;
}

// Generate hash code
function hashCode(s) {
  s = typeof s === "string" ? s : JSON.stringify(s);
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}

// Shuffle array
function shuffleArray(list) {
  const l = list.slice();
  for (let i = l.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [l[i], l[j]] = [l[j], l[i]];
  }
  return l;
}

// Remove array duplicates
function removeDuplicates(list) {
  return [...new Set(list)];
}

// Generate random number
function randomNumber(min = 0, max = 9) {
  return Math.random() * (max - min) + min;
}

// Generate random integer
function randomInteger(min = 0, max = 9) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random string
function randomString(length = 32) {
  const max = 8;
  if (length > max) {
    return randomString(max) + randomString(length - max);
  }
  return Math.random().toString(36).substr(2, length);
}

// Generate random array
function randomArray(length = 10, min = 0, max = 9, generator = randomInteger) {
  return array(length).map(() => generator(min, max));
}

// Generate ranged array
function rangeArray(min = 0, max = 9) {
  const list = [];
  let index = min;
  while (index <= max) {
    list.push(index);
    index++;
  }
  return list;
}

export {
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
};
