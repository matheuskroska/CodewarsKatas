// Return the output array, and ignore all non-op characters
function parse(input) {
  let value = 0;
  const output = [];

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    switch (char) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value *= value;
        break;
      case "o":
        output.push(value);
        break;
      default:
        // ignore invalid characters
        break;
    }
  }

  return output;
}
