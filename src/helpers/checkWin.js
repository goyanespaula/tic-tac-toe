function checkWin(layout, y, x, player, moveCount) {
  let winner = player;

  if (moveCount < 3) return false;

  for (let val of layout[y]) {
    if (val !== player) {
      winner = false;
      break;
    }
  }

  if (winner) return winner;
  winner = player;

  for (let row of layout) {
    if (row[x] !== player) {
      winner = false;
      break;
    }
  }

  if (winner) return winner;
  winner = player;

  let v = 0;
  let h = 0;

  while (v < layout.length) {
    if (layout[v][h] !== player) {
      winner = false;
      break;
    }
    v++;
    h++;
  }

  if (winner) return winner;
  winner = player;

  v = 0;
  h = layout.length - 1;
  while (v < layout.length) {
    if (layout[v][h] !== player) {
      winner = false;
      break;
    }
    v++;
    h--;
  }

  if (winner) return winner;
  winner = player;

  if (moveCount === Math.pow(layout.length, 2)) {
    return "draw";
  }

  return false;
}

export default checkWin;
