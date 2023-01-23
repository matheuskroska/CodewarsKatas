function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      result.push(str.substring(i, i + 2));
    } else {
      result.push(str.substring(i) + "_");
    }
  }
  return result;
}
