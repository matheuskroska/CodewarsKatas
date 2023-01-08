function primeFactors(n) {
  let result = "";
  let divisor = 2;
  while (n > 1) {
    let exponent = 0;
    while (n % divisor === 0) {
      exponent++;
      n /= divisor;
    }
    if (exponent > 0) {
      result += `(${divisor}`;
      if (exponent > 1) {
        result += `**${exponent}`;
      }
      result += ")";
    }
    divisor++;
  }
  return result;
}
