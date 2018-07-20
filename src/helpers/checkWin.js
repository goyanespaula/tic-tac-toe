/**
 * Returns the greatest common divisor of 2 numbers
 * @param {array} layout
 * @param {number} y
 * @param {number} x
 * @param {string} player
 * @param {number} moveCounter
 * @returns {string|bool} false if no winner, "draw" if draw, & "X" or "O" if winner
 */
function checkWin(layout, y, x, player, moveCount) {
  let winner = player;

  // get out early if not enough moves have been made
  if (moveCount < 3) return false;

  // check row of last move
  for (let val of layout[y]) {
    if (val !== player) {
      winner = false;
      break;
    }
  }

  // if completed or broken out of loop and winner is truthy, return. Otherwise, continue
  if (winner) return winner;
  winner = player;

  // check column of last move
  for (let row of layout) {
    if (row[x] !== player) {
      winner = false;
      break;
    }
  }

  if (winner) return winner;
  winner = player;

  // assign starting vertical and horizontal pointers
  let v = 0;
  let h = 0;

  // check diagonal from top left to bottom right
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

  // check diagonal from top right to bottom left
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

  // if no winner but max move count has been met, return "draw"
  if (moveCount === Math.pow(layout.length, 2)) {
    return "draw";
  }

  return false;
}

export default checkWin;
