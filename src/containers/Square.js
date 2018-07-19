import React from "react";

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

export default Square;
