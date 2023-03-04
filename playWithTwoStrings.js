function workOnStrings(a, b) {
  // Convert both strings to arrays of characters
  const arrA = a.split("");
  const arrB = b.split("");

  // Swap case of characters in string b for every occurrence in string a
  arrA.forEach((charA) => {
    const lowerA = charA.toLowerCase();
    const upperA = charA.toUpperCase();
    arrB.forEach((charB, indexB) => {
      if (charB.toLowerCase() === lowerA) {
        arrB[indexB] = charB === lowerA ? upperA : lowerA;
      }
    });
  });

  // Swap case of characters in string a for every occurrence in string b
  arrB.forEach((charB) => {
    const lowerB = charB.toLowerCase();
    const upperB = charB.toUpperCase();
    arrA.forEach((charA, indexA) => {
      if (charA.toLowerCase() === lowerB) {
        arrA[indexA] = charA === lowerB ? upperB : lowerB;
      }
    });
  });

  // Merge new strings a and b
  return arrA.join("") + arrB.join("");
}
