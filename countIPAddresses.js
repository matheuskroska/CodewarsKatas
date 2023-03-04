function ipsBetween(start, end) {
  const startIp = start
    .split(".")
    .reduce((acc, val) => (acc << 8n) + BigInt(val), 0n);
  const endIp = end
    .split(".")
    .reduce((acc, val) => (acc << 8n) + BigInt(val), 0n);
  return Number(endIp - startIp);
}
