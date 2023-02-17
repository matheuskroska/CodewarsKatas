function partitionOn(pred, items) {
  const trueItems = [];
  const falseItems = [];
  for (let item of items) {
    if (pred(item)) {
      trueItems.push(item);
    } else {
      falseItems.push(item);
    }
  }
  const boundaryIndex = falseItems.length;
  items.splice(0, items.length, ...falseItems, ...trueItems);
  return boundaryIndex;
}
