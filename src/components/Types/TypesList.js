import React from "react";
import "./types.css";

function TypesList(props) {
  const { name, type } = props;
  return (
    <div className="scrollmenu">
      <button className={`btn-type ${type} `}> {name}</button>
    </div>
  );
}

export default TypesList;
