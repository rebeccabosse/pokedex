import React from "react";
import { Link } from "react-router-dom";

const Types = (props) => {
  const { name, id } = props;
  console.log(id);
  return (
    <div>
      <Link to={`${name}`}>{name}</Link>
    </div>
  );
};

export default Types;
