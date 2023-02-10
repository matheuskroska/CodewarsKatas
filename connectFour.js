function whoIsWinner(piecesPositionList) {
  let board = [];
  for (let i = 0; i < 6; i++) {
    board.push(["_", "_", "_", "_", "_", "_", "_"]);
  }

  let winner = "Draw";
  for (let i = 0; i < piecesPositionList.length; i++) {
    let move = piecesPositionList[i].split("_");
    let col = move[0].charCodeAt(0) - 65;
    let row = 5;
    while (row >= 0 && board[row][col] !== "_") {
      row--;
    }
    board[row][col] = move[1];

    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 7; k++) {
        if (board[j][k] !== "_") {
          if (
            k + 3 < 7 &&
            board[j][k + 1] === board[j][k] &&
            board[j][k + 2] === board[j][k] &&
            board[j][k + 3] === board[j][k]
          ) {
            winner = board[j][k];
            return winner;
          }

          if (
            j + 3 < 6 &&
            board[j + 1][k] === board[j][k] &&
            board[j + 2][k] === board[j][k] &&
            board[j + 3][k] === board[j][k]
          ) {
            winner = board[j][k];
            return winner;
          }

          if (
            k + 3 < 7 &&
            j + 3 < 6 &&
            board[j + 1][k + 1] === board[j][k] &&
            board[j + 2][k + 2] === board[j][k] &&
            board[j + 3][k + 3] === board[j][k]
          ) {
            winner = board[j][k];
            return winner;
          }

          if (
            k - 3 >= 0 &&
            j + 3 < 6 &&
            board[j + 1][k - 1] === board[j][k] &&
            board[j + 2][k - 2] === board[j][k] &&
            board[j + 3][k - 3] === board[j][k]
          ) {
            winner = board[j][k];
            return winner;
          }
        }
      }
    }
  }

  return winner;
}
