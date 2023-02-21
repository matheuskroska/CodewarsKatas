function validBraces(braces) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (const brace of braces) {
    if (brace === "(" || brace === "[" || brace === "{") {
      stack.push(brace);
    } else {
      const last = stack.pop();
      if (last !== pairs[brace]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
