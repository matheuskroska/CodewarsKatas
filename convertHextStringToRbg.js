function hexStringToRGB(hexString) {
  hexString = hexString.toLowerCase();
  if (hexString[0] === "#") {
    hexString = hexString.slice(1);
  }

  let r = parseInt(hexString.slice(0, 2), 16);
  let g = parseInt(hexString.slice(2, 4), 16);
  let b = parseInt(hexString.slice(4), 16);

  return { r, g, b };
}
