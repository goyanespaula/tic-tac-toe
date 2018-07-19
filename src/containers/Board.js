import React from "react";
import Square from "./Square";
import "../styling/Board.css";
import PropTypes from "prop-types";

const propTypes = {
  layout: PropTypes.array.isRequired,
  playSquare: PropTypes.func.isRequired
};

const Board = props => {
  const { layout, playSquare } = props;
  const squares = [];
  for (let y in layout) {
    for (let x in layout[y]) {
      squares.push(
        <Square
          key={[+y, +x]}
          value={layout[+y][+x]}
          y={+y}
          x={+x}
          playSquare={playSquare}
        />
      );
    }
  }
  return <div className="container">{squares}</div>;
};

Board.propTypes = propTypes;

export default Board;
