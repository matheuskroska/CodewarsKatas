function solution(input, markers) {
  return input
    .split("\n")
    .map((line) => {
      for (let marker of markers) {
        let index = line.indexOf(marker);
        if (index !== -1) {
          line = line.slice(0, index);
        }
      }
      return line.trim();
    })
    .join("\n");
}
