function partsSums(ls) {
  const result = [];
  let sum = 0;

  for (let i = ls.length - 1; i >= 0; i--) {
    sum += ls[i];
    result[i] = sum;
  }

  result.push(0);
  return result;
}
