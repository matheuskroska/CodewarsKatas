function rgb(r, g, b) {
  function toHex(decimal) {
    decimal = Math.max(0, Math.min(255, decimal));
    let hex = decimal.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }
  return toHex(r) + toHex(g) + toHex(b);
}
