function bucketSort(data) {
  if (data.length === 0) return data;
  const list = data.slice();
  const max = Math.max(...list);
  const buckets = new Array(list.length + 1).fill(0).map(() => []);
  for (const item of list) {
    const index = Math.floor((item * list.length) / max);
    buckets[index].push(item);
  }
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }
  return buckets.flat();
}

export { bucketSort };
export default bucketSort;
