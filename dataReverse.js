function reverseData(data) {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.push(data.slice(i, i + 8));
  }
  bytes.reverse();
  const reversedData = [].concat(...bytes);
  return reversedData;
}
