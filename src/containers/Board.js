import React from "react";
import Square from "./Square";
import "../styling/Board.css";

const Board = props => {
  const { layout } = props;
  const squares = [];
  for (let x in layout) {
    for (let y in layout[x]) {
      squares.push(<Square key={[x, y]} value={layout[x][y]} x={x} y={y} />);
    }
  }
  return <div className="container">{squares}</div>;
};

export default Board;
