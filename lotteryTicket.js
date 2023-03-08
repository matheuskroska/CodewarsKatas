function bingo(ticket, win) {
  let miniWins = 0;
  for (let i = 0; i < ticket.length; i++) {
    const str = ticket[i][0];
    const num = ticket[i][1];
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        miniWins++;
        break; // can only have one mini win per subarray
      }
    }
  }
  return miniWins >= win ? "Winner!" : "Loser!";
}
