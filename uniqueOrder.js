var uniqueInOrder = function (iterable) {
  let result = [];
  let lastItem;

  for (let item of iterable) {
    if (item !== lastItem) {
      result.push(item);
      lastItem = item;
    }
  }

  return result;
};
