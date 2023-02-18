function expandedForm(num) {
  // Convert number to array of digits
  let digits = num.toString().split("");

  // Loop through digits and add appropriate number of zeros
  let expanded = digits.map((digit, index) => {
    if (digit !== "0") {
      let zeros = "0".repeat(digits.length - index - 1);
      return digit + zeros;
    } else {
      return null;
    }
  });

  // Remove null values and join with ' + '
  return expanded.filter((val) => val !== null).join(" + ");
}
