function sortArray(arr) {
  let oddNumbers = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let evenIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = oddNumbers[evenIndex];
      evenIndex++;
    }
  }
  return arr;
}
