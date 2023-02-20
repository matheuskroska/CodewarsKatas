function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  const sorted1 = array1.sort((a, b) => a - b);
  const sorted2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] * sorted1[i] !== sorted2[i]) {
      return false;
    }
  }

  return true;
}
