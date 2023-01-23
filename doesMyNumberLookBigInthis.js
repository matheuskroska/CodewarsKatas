function narcissistic(value) {
  let numArr = value.toString().split("").map(Number);
  let numLen = numArr.length;
  let sum = 0;
  numArr.forEach((num) => {
    sum += Math.pow(num, numLen);
  });
  return sum === value;
}
