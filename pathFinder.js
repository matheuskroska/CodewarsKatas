function pathFinder(maze) {
  // Your code here
  let start = maze[0][0];
  let end = maze[maze.length - 1][maze.length - 1];
  let path = [];
  let visited = [];
  let queue = [];
  let current = start;
  let neighbors = [];
  let neighbor = null;
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let m = 0;
  let n = 0;
  let o = 0;
  let p = 0;
  let q = 0;
  let r = 0;
  let s = 0;
  let t = 0;
  let u = 0;
  let v = 0;
  let w = 0;
  let x = 0;
  let y = 0;
  let z = 0;
  let aa = 0;
  let ab = 0;
  let ac = 0;
  let ad = 0;
  let ae = 0;
  let af = 0;
  let ag = 0;
  let ah = 0;
  let ai = 0;
  let aj = 0;
  let ak = 0;
  let al = 0;
  let am = 0;
  let an = 0;
  let ao = 0;
  let ap = 0;

  // Add start to queue
  queue.push(start);

  // While queue is not empty
  while (queue.length > 0) {
    // Dequeue current
    current = queue.shift();

    // If current is end, return path
    if (current === end) {
      return path;
    }

    // If current is not visited
    if (!visited.includes(current)) {
      // Add current to visited
      visited.push(current);

      // Get neighbors
      neighbors = getNeighbors(current, maze);

      // For each neighbor
      for (i = 0; i < neighbors.length; i++) {
        // Add neighbor to queue
        queue.push(neighbors[i]);

        // Add neighbor to path
        path.push(neighbors[i]);

        // Add current to path
        path.push(current);
      }
    }
  }

  // Return path
  return path;

  // Get neighbors
  function getNeighbors(current, maze) {
    // Get current position
    for (j = 0; j < maze.length; j++) {
      for (k = 0; k < maze[j].length; k++) {
        if (maze[j][k] === current) {
          l = j;
          m = k;
        }
      }
    }

    // Get neighbors
    for (n = 0; n < maze.length; n++) {
      for (o = 0; o < maze[n].length; o++) {
        if (n === l && o === m - 1) {
          neighbor = maze[n][o];
          neighbors.push(neighbor);
        }
        if (n === l && o === m + 1) {
          neighbor = maze[n][o];
          neighbors.push(neighbor);
        }
        if (n === l - 1 && o === m) {
          neighbor = maze[n][o];
          neighbors.push(neighbor);
        }
        if (n === l + 1 && o === m) {
          neighbor = maze[n][o];
          neighbors.push(neighbor);
        }
      }
    }

    // Return neighbors
    return neighbors;
  }
}
