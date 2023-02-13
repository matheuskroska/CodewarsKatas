function josephusSurvivor(n, k) {
  let survivors = [];
  for (let i = 1; i <= n; i++) {
    survivors.push(i);
  }

  let index = 0;
  while (survivors.length > 1) {
    index = (index + k - 1) % survivors.length;
    survivors.splice(index, 1);
  }

  return survivors[0];
}
