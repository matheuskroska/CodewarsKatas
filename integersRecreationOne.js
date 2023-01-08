function listSquared(m, n) {
  const result = [];
  for (let i = m; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        sum += j ** 2;
      }
    }
    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum]);
    }
  }
  return result;
}
