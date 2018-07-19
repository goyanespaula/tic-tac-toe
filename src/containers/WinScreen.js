import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  winner: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
};

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

WinScreen.propTypes = propTypes;

export default WinScreen;
