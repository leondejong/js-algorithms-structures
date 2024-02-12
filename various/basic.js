// Recursive factorial
function factr(n) {
  if (n < 0) return; // not defined
  if (n < 2) return 1;
  return n * factr(n - 1);
}

// Tail recursive factorial
function factt(n, a = 1) {
  if (n < 0) return; // not defined
  if (n === 0) return a;
  return factt(n - 1, n * a);
}

// Iterative factorial
function facti(n) {
  if (n < 0) return; // not defined
  let f = 1;
  while (n > 1) {
    f = f * n;
    n = n - 1;
  }
  return f;
}

// Recursive fibonacci
function fibr(n) {
  if (n < 0) return; // only positive
  if (n < 2) return n;
  return fibr(n - 1) + fibr(n - 2);
}

// Memoized fibonacci (dynamic)
function fibm(n, l = []) {
  if (n < 0) return; // only positive
  if (n < 2) return n;
  if (!l[n]) {
    l[n] = fibm(n - 1, l) + fibm(n - 2, l);
  }
  return l[n];
}

// Tabulated fibonacci (dynamic)
function fibt(n) {
  if (n < 0) return; // only positive
  const l = [0, 1];
  for (let i = 2; i <= n; i++) {
    l[i] = l[i - 1] + l[i - 2];
  }
  return l[n];
}

// Iterative fibonacci
function fibi(n) {
  if (n < 0) return; // only positive
  let a = 1;
  let b = 0;
  [...Array(n)].map(() => {
    [a, b] = [b, a + b];
  });
  return b;
}

// Recursive binary search
function binsr(a, n, l = 0, r = a.length - 1) {
  if (r < l) return -1;
  const m = l + Math.trunc((r - l) / 2);
  if (n > a[m]) return binsr(a, n, m + 1, r);
  if (n < a[m]) return binsr(a, n, l, m - 1);
  return m;
}

// Iterative binary search
function binsi(a, n) {
  let l = 0;
  let r = a.length - 1;
  while (r >= l) {
    let m = l + Math.trunc((r - l) / 2);
    if (n === a[m]) return m;
    if (n > a[m]) l = m + 1;
    else r = m - 1;
  }
  return -1;
}

export { factr, factt, facti, fibr, fibm, fibt, fibi, binsr, binsi };
