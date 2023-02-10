function balancedParens(n) {
  let result = [];

  const generateParenthesis = (current, open, close, n) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      generateParenthesis(current + "(", open + 1, close, n);
    }
    if (close < open) {
      generateParenthesis(current + ")", open, close + 1, n);
    }
  };

  generateParenthesis("", 0, 0, n);

  return result;
}
