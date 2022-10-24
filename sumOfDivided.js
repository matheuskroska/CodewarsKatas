function sumOfDivided(lst) {
  let result = [];
  let max = Math.max(...lst.map(Math.abs));
  let primes = getPrimes(max);
  for (let prime of primes) {
    let sum = 0;
    for (let num of lst) {
      if (num % prime === 0) {
        sum += num;
      }
    }
    if (sum !== 0) {
      result.push([prime, sum]);
    }
  }
  return result;

  function getPrimes(max) {
    let primes = [];
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(
  sumOfDivided([12, 15]) // [[2, 12], [3, 27], [5, 15]]
);

console.log(sumOfDivided([15, 21, 24, 30, 45])); // [ [2, 54], [3, 135], [5, 90], [7, 21] ]
