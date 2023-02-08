function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const m = num1.length,
    n = num2.length;
  const res = Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = num1[i] * num2[j];
      const p1 = i + j,
        p2 = i + j + 1;
      const sum = mul + res[p2];
      res[p1] += Math.floor(sum / 10);
      res[p2] = sum % 10;
    }
  }
  while (res.length > 1 && res[0] === 0) res.shift();
  return res.join("");
}
