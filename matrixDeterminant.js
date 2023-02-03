function determinant(m) {
  if (m.length === 1) return m[0][0];

  if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

  let determinante = 0;
  for (let i = 0; i < m.length; i++) {
    let minor = [];
    for (let j = 1; j < m.length; j++) {
      let row = [];
      for (let k = 0; k < m.length; k++) {
        if (k === i) continue;
        row.push(m[j][k]);
      }
      minor.push(row);
    }
    determinante += (i % 2 === 0 ? 1 : -1) * m[0][i] * determinant(minor);
  }
  return determinante;
}
