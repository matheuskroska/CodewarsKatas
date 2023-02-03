function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let currentEnd = -Infinity;

  for (let interval of intervals) {
    if (interval[0] > currentEnd) {
      sum += interval[1] - interval[0];
      currentEnd = interval[1];
    } else {
      sum += Math.max(0, interval[1] - currentEnd);
      currentEnd = Math.max(currentEnd, interval[1]);
    }
  }

  return sum;
}
