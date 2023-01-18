function decomp(n) {
  let primeFactors = {};
  for (let i = 2; i <= n; i++) {
    let temp = i;
    for (let j in primeFactors) {
      while (temp % j === 0) {
        primeFactors[j]++;
        temp = temp / j;
      }
    }
    if (temp > 1) {
      if (!primeFactors[temp]) {
        primeFactors[temp] = 1;
      } else {
        primeFactors[temp]++;
      }
    }
  }
  let result = "";
  for (let key in primeFactors) {
    if (primeFactors[key] === 1) {
      result += key + " * ";
    } else {
      result += key + "^" + primeFactors[key] + " * ";
    }
  }
  return result.slice(0, -3);
}
