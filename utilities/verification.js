import { exists } from "./confirmation.js";

// Check tree balance
function balance(node) {
  if (exists(node)) {
    return node.left.height || 0 - node.right.height || 0;
  }
  return 0;
}

// Get tree height
function height(node) {
  if (!exists(node)) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}

// Check tree node properties
function verifyNode(node) {
  if (!exists(node.parent)) return true;
  const leftKey = exists(node.left) ? node.left.key < node.key : true;
  const rightKey = exists(node.right) ? node.right.key > node.key : true;
  const leftParent = exists(node.left) ? node.left.parent === node : true;
  const rightParent = exists(node.right) ? node.right.parent === node : true;
  return leftKey && rightKey && leftParent && rightParent;
}

// Check tree properties
function verifyOrder(node) {
  if (!exists(node)) return true;
  return verifyNode(node) && verifyOrder(node.left) && verifyOrder(node.right);
}

// Check tree balance
function verifyBalance(node) {
  if (!exists(node)) return true;
  const left = height(node.left);
  const right = height(node.right);
  // Appropriate values for (left - right) are 1, -1 and 0
  if (
    Math.abs(left - right) <= 1 &&
    verifyBalance(node.left) == true &&
    verifyBalance(node.right) == true
  ) {
    return true;
  }
  return false;
}

// Check tree height property
function verifyHeight(node) {
  if (!exists(node)) return true;
  return (
    height(node) === node.height &&
    verifyHeight(node.left) &&
    verifyHeight(node.right)
  );
}

// Count tree black node height
function countBlackNodes(node) {
  if (!exists(node)) return 0;
  const left = countBlackNodes(node.left);
  const right = countBlackNodes(node.right);
  if (left !== right || left === -1) {
    return -1;
  }
  if (node.black) return left + 1;
  return left;
}

// Check node color properties
function verifyBlackNode(node) {
  if (!exists(node.parent) && !node.black) return false;
  if (node.black) return true;
  if (exists(node.parent) && !node.parent.black) return false;
  if (exists(node.left) && !node.left.black) return false;
  if (exists(node.right) && !node.right.black) return false;
  return true;
}

// Check red black tree color properties
function verifyColor(node) {
  if (!exists(node)) return true;
  return (
    verifyBlackNode(node) && verifyColor(node.left) && verifyColor(node.right)
  );
}

// Check if heap data is consistent
function verifyHeap(a, i, n) {
  if (i >= Math.trunc((n - 1) / 2)) return true;
  if (
    a[i] >= a[2 * i + 1] &&
    a[i] >= a[2 * i + 2] &&
    verifyHeap(a, 2 * i + 1, n) &&
    verifyHeap(a, 2 * i + 2, n)
  ) {
    return true;
  }
  return false;
}

// Check if max heap
function isMaxHeap(list) {
  return verifyHeap(list, 0, list.length);
}

// Check if binary search tree
function isBST(node) {
  if (!exists(node)) return false;
  return verifyOrder(node);
}

// Check if avl tree
function isAVL(node) {
  if (!exists(node)) return false;
  return verifyOrder(node) && verifyBalance(node) && verifyHeight(node);
}

// Check if red black tree
function isRBT(node) {
  if (!exists(node)) return false;
  return verifyOrder(node) && verifyColor(node) && countBlackNodes(node) !== -1;
}

export {
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
};
