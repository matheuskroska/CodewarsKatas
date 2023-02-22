function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  let diamondStr = "";
  const half = Math.floor(n / 2);

  for (let i = 0; i <= half; i++) {
    let row = " ".repeat(half - i) + "*".repeat(i * 2 + 1) + "\n";
    diamondStr += row;
  }

  for (let i = half - 1; i >= 0; i--) {
    let row = " ".repeat(half - i) + "*".repeat(i * 2 + 1) + "\n";
    diamondStr += row;
  }

  return diamondStr;
}
