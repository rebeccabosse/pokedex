import React from "react";
import "./types.css";
function ButtonType(props) {
  const { name, type } = props;
  return (
    <div id="btn-content">
      <button className={`btn-type ${type}`}>{name}</button>
    </div>
  );
}

export default ButtonType;
