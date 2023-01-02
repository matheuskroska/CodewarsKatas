function validSolution(board) {
  if (board.length !== 9 || board[0].length !== 9) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] < 0 || board[i][j] > 9) {
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!isValid(board[i])) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (!isValid(column)) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let block = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          block.push(board[i + k][j + l]);
        }
      }
      if (!isValid(block)) {
        return false;
      }
    }
  }

  return true;
}

function isValid(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return false;
    }
    if (set.has(arr[i])) {
      return false;
    }
    set.add(arr[i]);
  }
  return true;
}
