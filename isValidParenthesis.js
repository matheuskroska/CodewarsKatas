function isValid(string) {
  let stack = [];
  for (let ch of string) {
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
