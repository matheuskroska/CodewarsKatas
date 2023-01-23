function sumStrings(a, b) {
  let carry = 0;
  let result = "";
  let length = Math.max(a.length, b.length);
  a = a.padStart(length, "0");
  b = b.padStart(length, "0");
  for (let i = length - 1; i >= 0; i--) {
    let temp = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(temp / 10);
    result = (temp % 10) + result;
  }
  if (carry > 0) {
    result = carry + result;
  }
  while (result[0] === "0") {
    result = result.slice(1);
  }
  return result;
}
