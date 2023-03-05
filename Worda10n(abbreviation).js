function abbreviate(str) {
  const words = str.split(/[^a-zA-Z]+/); // split the string into words
  const abbrs = words.map((word) => {
    if (word.length < 4) {
      // ignore short words
      return word;
    } else {
      const first = word[0];
      const last = word[word.length - 1];
      const middle = word.length - 2; // exclude first and last characters
      return `${first}${middle}${last}`;
    }
  });
  let abbrIdx = 0;
  return str.replace(/[a-zA-Z]+/g, (match) => abbrs[abbrIdx++] || match);
}
