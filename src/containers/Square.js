import React from "react";

const Square = props => {
  const { value, x, y, playSquare } = props;
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
        playSquare(x, y);
      }}
    >
      {value}
    </div>
  );
};

export default Square;
