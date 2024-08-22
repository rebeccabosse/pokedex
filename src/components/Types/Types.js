import React from "react";
import { Link } from "react-router-dom";
import "./types.css";
const Types = (props) => {
  const { name, type } = props;
  //console.log(type);
  return (
    <>
      <div>
        <Link to={`${name}`} className={`btn-type ${type}`}>
          {name}
        </Link>
      </div>
    </>
  );
};

export default Types;
