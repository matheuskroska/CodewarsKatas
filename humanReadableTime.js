function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  return [hours, minutes, sec].map((v) => (v < 10 ? "0" + v : v)).join(":");
}

console.log(humanReadable(90)); //"00:01:30"
