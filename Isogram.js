function isIsogram(str) {
  let splitStr = str.toLowerCase().split("");
  let flags = false;

  for (i = 0; i <= splitStr.length; i++) {
    if (splitStr.indexOf(splitStr[i]) === splitStr.lastIndexOf(splitStr[i])) {
      flags = true;
    } else {
      return false;
    }
  }

  return flags;
}

console.log(isIsogram("moOse")); // false
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false, "same chars may not be adjacent"
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true, "an empty string is a valid isogram"
