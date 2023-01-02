function findOdd(A) {
  let map = {};
  for (let i = 0; i < A.length; i++) {
    if (map[A[i]]) {
      map[A[i]]++;
    } else {
      map[A[i]] = 1;
    }
  }
  for (let key in map) {
    if (map[key] % 2 === 1) {
      return parseInt(key);
    }
  }
}
