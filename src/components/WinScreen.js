import React from "react";
import PropTypes from "prop-types";
import "../styling/WinScreen.css";

const propTypes = {
  winner: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
};

const WinScreen = props => {
  const { winner, reset } = props;
  let emoji;
  if (winner === "X")
    emoji = (
      <span role="img" aria-label="X gesture emoji">
        🙅
      </span>
    );
  if (winner === "O")
    emoji = (
      <span role="img" aria-label="O gesture emoji">
        🙆
      </span>
    );
  let winMessage =
    winner === "draw" ? (
      <div id="win-message">
        <h3>
          <span role="img" aria-label="cowboy emoji">
            🤠
          </span>{" "}
          Congrats!{" "}
          <span role="img" aria-label="cowboy emoji">
            🤠
          </span>
        </h3>
        <p>It's a draw</p>
      </div>
    ) : (
      <div id="win-message">
        <h3>
          {emoji} Congrats! {emoji}
        </h3>
        <p>Player {winner} won!</p>
      </div>
    );
  return (
    <section id="win-screen">
      {winMessage}
      <button id="reset-btn" onClick={reset}>
        Restart
      </button>
    </section>
  );
};

WinScreen.propTypes = propTypes;

export default WinScreen;
