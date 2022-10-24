const removeChar = (str) =>
  str.length >= 2 && str.slice(1, Math.max(str.length) - 1);

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ooopsss"));
