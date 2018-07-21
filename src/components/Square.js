import React from "react";
import PropTypes from "prop-types";
import "../styling/Square.css";

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
      className="square"
      onClick={() => {
        if (value) return;
        playSquare(y, x);
      }}
      style={value ? { cursor: "not-allowed" } : {}}
    >
      {value}
    </div>
  );
};

Square.propTypes = propTypes;

export default Square;
