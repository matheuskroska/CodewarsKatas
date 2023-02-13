function sumPairs(ints, s) {
  let seen = new Set();

  for (let i = 0; i < ints.length; i++) {
    if (seen.has(s - ints[i])) {
      return [s - ints[i], ints[i]];
    }
    seen.add(ints[i]);
  }

  return undefined;
}
