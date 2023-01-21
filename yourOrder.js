function order(words) {
  if (!words) return "";
  let result = [];
  words = words.split(" ");
  for (let i = 1; i <= words.length; i++) {
    words
      .filter((word) => word.includes(i))
      .forEach((word) => result.push(word));
  }
  return result.join(" ");
}
