function persistence(num) {
  let persistenceCount = 0;
  while (num > 9) {
    let numArr = num.toString().split("").map(Number);
    num = numArr.reduce((a, b) => a * b);
    persistenceCount++;
  }
  return persistenceCount;
}
