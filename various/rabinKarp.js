function rabinKarp(text, pattern, q = 13) {
  const m = pattern.length;
  const n = text.length;
  const d = 10;
  let p = 0;
  let t = 0;
  let h = 1;
  let r = -1;
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }
  for (let i = 0; i < m; i++) {
    p = (d * p + pattern[i].charCodeAt()) % q;
    t = (d * t + text[i].charCodeAt()) % q;
  }
  for (let i = 0; i < n - m + 1; i++) {
    if (p === t) {
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) break;
        if (j + 1 === m) {
          r = i;
        }
      }
    }
    if (i < n - m) {
      t = (d * (t - text[i].charCodeAt() * h) + text[i + m].charCodeAt()) % q;
      if (t < 0) {
        t = t + q;
      }
    }
  }
  return r;
}

export { rabinKarp };
export default rabinKarp;
