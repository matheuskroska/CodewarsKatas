function firstNonRepeatingLetter(str) {
  // create an object to store the count of each character
  const charCount = {};

  // iterate through the string and count the occurrences of each character
  for (let ch of str) {
    ch = ch.toLowerCase();
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  // iterate through the string and return the first character that has a count of 1
  for (const ch of str) {
    if (charCount[ch.toLowerCase()] === 1) return ch;
  }

  // if no non-repeating characters are found, return an empty string
  return "";
}
