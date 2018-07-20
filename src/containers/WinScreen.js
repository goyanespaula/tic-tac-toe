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
    <section>
      {winMessage}
      <button id="reset" onClick={reset}>
        Reset?
      </button>
    </section>
  );
};

WinScreen.propTypes = propTypes;

export default WinScreen;
