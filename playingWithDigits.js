function digPow(n, p) {
  const digits = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), p + i);
  }

  const k = sum / n;

  return Number.isInteger(k) ? k : -1;
}
