function deleteNth(arr, n) {
  let count = {};
  return arr.filter(function (num) {
    count[num] = count[num] ? count[num] + 1 : 1;
    return count[num] <= n;
  });
}
