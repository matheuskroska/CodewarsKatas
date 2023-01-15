function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(
    n.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0)
  );
}