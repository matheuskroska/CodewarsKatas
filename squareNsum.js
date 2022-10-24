function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(squareSum([1, 2]));
