function checkWin(layout, x, y, player, moveCount) {
  let winner = player;

  for (let val of layout[x]) {
    if (val !== player) {
      winner = false;
      break;
    }
  }

  if (winner) return winner;
  winner = player;

  for (let row of layout) {
    if (row[y] !== player) {
      winner = false;
      break;
    }
  }

  if (winner) return winner;
  winner = player;

  let i = 0;
  let j = layout.length - 1;

  while (i < layout.length) {
    if (layout[i][i] !== player) {
      winner = false;
      break;
    }
    i++;
  }

  if (winner) return winner;
  winner = player;

  while (i < layout.length) {
    if (layout[i][j] !== player) {
      winner = false;
      break;
    }
    i++;
    j--;
  }

  if (winner) return winner;
  winner = player;

  if (moveCount === layout.length * layout.length) {
    return "draw";
  }

  return false;
}

export default checkWin;
