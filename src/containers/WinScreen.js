import React from "react";

const WinScreen = props => {
  const { winner, reset } = props;
  let winMessage =
    winner === "draw" ? "It's a draw" : `Congrats ${winner} you've won!`;
  return (
    <div>
      {winMessage}
      <button onClick={reset}>Reset?</button>
    </div>
  );
};

export default WinScreen;
