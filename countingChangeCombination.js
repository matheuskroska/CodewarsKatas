function countChange(amount, denominations) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of denominations) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}
