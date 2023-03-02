function cleanString(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stack.pop(); // remove the last character from the stack
    } else {
      stack.push(s[i]); // add the current character to the stack
    }
  }
  return stack.join(""); // join the characters in the stack into a string
}
