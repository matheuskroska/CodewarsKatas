function solution(numbers) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = gcd(result, numbers[i]);
  }
  return result * numbers.length;
}
