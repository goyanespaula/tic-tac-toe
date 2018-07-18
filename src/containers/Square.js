import React from "react";

const Square = props => {
  const { value } = props;
  return (
    <div
      style={{
        backgroundColor: "cornsilk",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "-1px"
      }}
    >
      {value}
    </div>
  );
};

export default Square;
