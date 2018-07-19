import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  value: PropTypes.string,
  y: PropTypes.number,
  x: PropTypes.number,
  playSquare: PropTypes.func.isRequired
};

const Square = props => {
  const { value, y, x, playSquare } = props;
  return (
    <div
      style={{
        backgroundColor: "cornsilk",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "-1px"
      }}
      onClick={() => {
        if (value) return;
        playSquare(y, x);
      }}
    >
      {value}
    </div>
  );
};

Square.propTypes = propTypes;

export default Square;
