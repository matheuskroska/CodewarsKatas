function tripledouble(num1, num2) {
  // Convert the numbers to strings
  let str1 = num1.toString();
  let str2 = num2.toString();

  // Loop through num1 and check for triples
  for (let i = 0; i <= 9; i++) {
    let triple = i.toString().repeat(3);
    if (str1.includes(triple)) {
      // Check if num2 has a double of the same number
      if (str2.includes(i.toString().repeat(2))) {
        return 1;
      }
    }
  }

  // No triple and double found
  return 0;
}
