function duplicateEncode(word) {
  let charCount = {};
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (charCount[char] === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}
