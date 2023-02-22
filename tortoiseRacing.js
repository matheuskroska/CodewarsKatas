function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }

  // calculate relative speed
  const relativeSpeed = v2 - v1;

  // calculate time to cover the lead
  const timeInSeconds = (g / relativeSpeed) * 3600;

  // convert time to hours, minutes, and seconds
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return [hours, minutes, seconds];
}
