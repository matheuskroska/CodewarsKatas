function hamming(n) {
  let hammingNumbers = [1];
  let i = 0,
    j = 0,
    k = 0;

  while (hammingNumbers.length < n) {
    let nextHammingNumber = Math.min(
      hammingNumbers[i] * 2,
      hammingNumbers[j] * 3,
      hammingNumbers[k] * 5
    );
    hammingNumbers.push(nextHammingNumber);

    if (nextHammingNumber === hammingNumbers[i] * 2) {
      i++;
    }
    if (nextHammingNumber === hammingNumbers[j] * 3) {
      j++;
    }
    if (nextHammingNumber === hammingNumbers[k] * 5) {
      k++;
    }
  }

  return hammingNumbers[n - 1];
}
