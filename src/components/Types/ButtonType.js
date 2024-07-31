import React from "react";

function ButtonType(props) {
  const { name } = props;
  return (
    <div>
      <h1 style={{ color: "white" }}>{name}</h1>
    </div>
  );
}

export default ButtonType;
