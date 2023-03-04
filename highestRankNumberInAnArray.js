function highestRank(arr) {
  const freq = new Map();
  let maxFreq = 0;
  let mostFrequent;

  arr.forEach((num) => {
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);
    if (count > maxFreq || (count === maxFreq && num > mostFrequent)) {
      maxFreq = count;
      mostFrequent = num;
    }
  });

  return mostFrequent;
}
