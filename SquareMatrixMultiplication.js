function matrixMultiplication(a, b) {
  var n = a.length;
  var c = [];
  for (var i = 0; i < n; i++) {
    c[i] = [];
    for (var j = 0; j < n; j++) {
      c[i][j] = 0;
      for (var k = 0; k < n; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return c;
}
