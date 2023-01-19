function score(dice) {
  let counts = [0, 0, 0, 0, 0, 0];
  let score = 0;

  // Count the number of occurrences of each number
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i] - 1]++;
  }

  // Check for triplets
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] >= 3) {
      if (i === 0) {
        score += 1000;
      } else {
        score += (i + 1) * 100;
      }
      counts[i] -= 3;
    }
  }

  // Check for single 1s and 5s
  if (counts[0] > 0) {
    score += counts[0] * 100;
  }
  if (counts[4] > 0) {
    score += counts[4] * 50;
  }

  return score;
}