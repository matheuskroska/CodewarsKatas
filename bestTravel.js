function chooseBestSum(t, k, ls) {
  if (k > ls.length) return null;

  ls.sort((a, b) => a - b);

  let bestSum = -1;
  let currSum = 0;

  function dfs(startIndex, townsVisited) {
    if (townsVisited === k) {
      bestSum = Math.max(bestSum, currSum);
      return;
    }

    for (let i = startIndex; i < ls.length; i++) {
      if (currSum + ls[i] <= t) {
        currSum += ls[i];
        dfs(i + 1, townsVisited + 1);
        currSum -= ls[i];
      }
    }
  }

  dfs(0, 0);

  return bestSum === -1 ? null : bestSum;
}
