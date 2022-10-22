function getMiddle(s) {
  let middle = s.length / 2;
  if (s.length % 2 === 0) {
    return s.slice(middle - 1, middle + 1);
  } else {
    return s.slice(middle, middle + 1);
  }
}

getMiddle("test"); // "es"
getMiddle("testing"); // 't'
getMiddle("middle"); // "dd"
