function titleCase(title, minorWords) {
  if (typeof title !== "string") {
    return "";
  }

  if (typeof minorWords !== "string") {
    minorWords = "";
  }

  var titleArr = title.toLowerCase().split(" ");
  var minorArr = minorWords.toLowerCase().split(" ");

  for (var i = 0; i < titleArr.length; i++) {
    if (i === 0 || minorArr.indexOf(titleArr[i]) === -1) {
      titleArr[i] = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1);
    }
  }

  return titleArr.join(" ");
}
