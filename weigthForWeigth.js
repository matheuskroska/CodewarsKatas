function orderWeight(str) {
  return str
    .split(" ")
    .map((num) => [num, num.split("").reduce((acc, digit) => acc + +digit, 0)])
    .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0].localeCompare(b[0])))
    .map((num) => num[0])
    .join(" ");
}
