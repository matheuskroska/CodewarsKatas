function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let bounces = 0;
  let height = h;

  while (height > window) {
    bounces += 2;
    height *= bounce;
  }

  return bounces - 1;
}
