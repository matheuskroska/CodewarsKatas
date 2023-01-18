function duplicateCount(text) {
  let lowercaseText = text.toLowerCase();
  let counts = {};
  let duplicateCount = 0;
  for (let i = 0; i < lowercaseText.length; i++) {
    counts[lowercaseText[i]] = (counts[lowercaseText[i]] || 0) + 1;
  }
  for (let key in counts) {
    if (counts[key] > 1) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}
