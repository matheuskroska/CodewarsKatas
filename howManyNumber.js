function maxSumDig(nMax, maxSum) {
  let count = 0;
  let total = 0;
  for (let i = 1000; i <= nMax; i++) {
    let num = i.toString();
    let flag = true;
    for (let j = 0; j < num.length - 3; j++) {
      if (
        parseInt(num[j]) +
          parseInt(num[j + 1]) +
          parseInt(num[j + 2]) +
          parseInt(num[j + 3]) >
        maxSum
      ) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
      total += i;
    }
  }
  let mean = total / count;
  let closest = 0;
  let diff = Number.MAX_SAFE_INTEGER;
  for (let i = 1000; i <= nMax; i++) {
    let num = i.toString();
    let flag = true;
    for (let j = 0; j < num.length - 3; j++) {
      if (
        parseInt(num[j]) +
          parseInt(num[j + 1]) +
          parseInt(num[j + 2]) +
          parseInt(num[j + 3]) >
        maxSum
      ) {
        flag = false;
        break;
      }
    }
    if (flag) {
      if (Math.abs(mean - i) < diff) {
        closest = i;
        diff = Math.abs(mean - i);
      }
    }
  }
  return [count, closest, total];
}
