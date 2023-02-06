function treeByLevels(root) {
  if (!root) return [];
  let result = [],
    queue = [root];
  while (queue.length) {
    let node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}
