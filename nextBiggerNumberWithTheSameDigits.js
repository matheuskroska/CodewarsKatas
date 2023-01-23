function nextBigger(n) {
  let num = n.toString().split("");
  for (let i = num.length - 1; i > 0; i--) {
    if (num[i] > num[i - 1]) {
      let j = num.length - 1;
      while (num[j] <= num[i - 1]) {
        j--;
      }
      [num[i - 1], num[j]] = [num[j], num[i - 1]];
      num = num.slice(0, i).concat(num.slice(i).sort());
      return parseInt(num.join(""));
    }
  }
  return -1;
}
