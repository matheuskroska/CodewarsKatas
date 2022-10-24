function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  var sideLength = 2 * circleRadius * Math.sin(Math.PI / numberOfSides);
  var apothem = circleRadius * Math.cos(Math.PI / numberOfSides);
  return 0.5 * numberOfSides * sideLength * apothem;
}

console.log(areaOfPolygonInsideCircle(3, 3)); // 11.691
