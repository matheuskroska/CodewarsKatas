function numberOfPairs(gloves) {
  const pairs = {};
  let count = 0;

  for (const glove of gloves) {
    pairs[glove] = (pairs[glove] || 0) + 1;
  }

  for (const color in pairs) {
    count += Math.floor(pairs[color] / 2);
  }

  return count;
}
