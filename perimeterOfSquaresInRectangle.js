function perimeter(n) {
  let a = 1;
  let b = 1;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += a * 4;
    [a, b] = [b, a + b];
  }
  return sum;
}
