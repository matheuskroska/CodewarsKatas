function high(str) {
  let words = str.split(" ");
  let highestScore = 0;
  let highestWord = "";

  for (let i = 0; i < words.length; i++) {
    let score = 0;
    for (let j = 0; j < words[i].length; j++) {
      score += words[i][j].charCodeAt(0) - 96;
    }
    if (score > highestScore) {
      highestScore = score;
      highestWord = words[i];
    }
  }

  return highestWord;
}
