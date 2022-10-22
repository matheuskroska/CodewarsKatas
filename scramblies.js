function scramble(str1, str2) {
  let string1 = str1.split("");
  let string2 = str2.split("");

  return string2.every((letter) => {
    if (string1.includes(letter)) {
      string1.splice(string1.indexOf(letter), 1);
      return true;
    } else {
      return false;
    }
  });
}

console.log(scramble("katas", "steak")); // false
console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble("scriptjava", "javascript")); // true
console.log(scramble("scriptjavx", "javascript") + "hehe"); // false
console.log(scramble("scriptingjava", "javascript")); // true
console.log(scramble("scriptsjava", "javascripts")); // true
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("aabbcamaomsccdd", "commas")); // true
