function prefill(n, v) {
  if (
    isNaN(parseInt(n)) ||
    parseInt(n) < 0 ||
    !Number.isInteger(parseFloat(n))
  ) {
    throw new TypeError(`${n} is invalid`);
  }

  return Array(parseInt(n)).fill(v);
}
