function towerBuilder(n) {
  let tower = [];
  for (let i = 0; i < n; i++) {
    let floor =
      " ".repeat(n - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(n - i - 1);
    tower.push(floor);
  }
  return tower;
}
