import React from "react";

import "./types.css";
import TypesList from "./TypesList";
const TypeBar = (props) => {
  const { types } = props;
  console.log(types);
  return (
    <div className="navTypes">
      {types.map((type, id) => (
        <TypesList id={type.id} name={type.name} type={type.name} />
      ))}
    </div>
  );
};

export default TypeBar;
