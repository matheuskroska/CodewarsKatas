function permutations(string) {
  let results = new Set();
  function permute(str, current) {
    if (str.length === 0) {
      results.add(current);
    } else {
      for (let i = 0; i < str.length; i++) {
        permute(str.slice(0, i) + str.slice(i + 1), current + str[i]);
      }
    }
  }
  permute(string, "");
  return [...results];
}
