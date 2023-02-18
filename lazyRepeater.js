function makeLooper(str) {
  let index = 0;
  return function () {
    const char = str[index];
    index = (index + 1) % str.length;
    return char;
  };
}
