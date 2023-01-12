snail = function snail(array) {
  let result = [];
  while (array.length > 0) {
    // Take the first row
    result = result.concat(array.shift());
    // Take the last element of each remaining row
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    // Take the last row in reverse order
    let lastRow = array.pop();
    if (lastRow) {
      result = result.concat(lastRow.reverse());
    }
    // Take the first element of each remaining row in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};
