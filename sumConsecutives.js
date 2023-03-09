function sumConsecutives(arr) {
  return arr.reduce(function (acc, num, index, array) {
    if (num === array[index - 1]) {
      acc[acc.length - 1] += num;
    } else {
      acc.push(num);
    }
    return acc;
  }, []);
}
