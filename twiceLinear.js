function dblLinear(n) {
  let u = [1];
  let i = 0,
    j = 0;

  while (u.length < n + 1) {
    let x = 2 * u[i] + 1,
      y = 3 * u[j] + 1;
    if (x < y) {
      u.push(x);
      i++;
    } else if (x > y) {
      u.push(y);
      j++;
    } else {
      u.push(x);
      i++;
      j++;
    }
  }
  return u[n];
}
