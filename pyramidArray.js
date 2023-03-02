function pyramid(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    result.push(Array(i).fill(1));
  }
  return result;
}
