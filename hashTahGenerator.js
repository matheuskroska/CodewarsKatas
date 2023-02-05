function generateHashtag(str) {
  if (!str || !str.trim().length) {
    return false;
  }

  const words = str.split(" ").filter((word) => word.trim().length > 0);
  const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  const hashtag = "#" + capitalizedWords.join("");

  return hashtag.length > 140 ? false : hashtag;
}
