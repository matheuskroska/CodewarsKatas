function checkWord(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(i, j, k) {
    if (k === word.length) {
      return true;
    }
    if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j]) {
      return false;
    }
    if (board[i][j] !== word[k]) {
      return false;
    }
    visited[i][j] = true;
    const res =
      dfs(i - 1, j - 1, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i - 1, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i + 1, j - 1, k + 1) ||
      dfs(i + 1, j, k + 1) ||
      dfs(i + 1, j + 1, k + 1);
    visited[i][j] = false;
    return res;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
}
