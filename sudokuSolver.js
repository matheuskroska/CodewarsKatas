function sudoku(puzzle) {
  function isValid(x, y, num) {
    // check row
    for (let i = 0; i < 9; i++) {
      if (puzzle[x][i] == num) {
        return false;
      }
    }

    // check column
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][y] == num) {
        return false;
      }
    }

    // check 3x3 grid
    let gridX = Math.floor(x / 3) * 3;
    let gridY = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[gridX + i][gridY + j] == num) {
          return false;
        }
      }
    }

    return true;
  }

  function solve() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (puzzle[i][j] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(i, j, num)) {
              puzzle[i][j] = num;
              if (solve()) {
                return true;
              }
              puzzle[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solve();
  return puzzle;
}
