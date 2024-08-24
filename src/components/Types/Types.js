import React from "react";
import { Link } from "react-router-dom";
import "../Styles/types.css";

const Types = (props) => {
  const { type } = props;
  //console.log(type);
  return (
    <>
      <div>
        <Link to={`${type}`} className={`btn-type ${type}`}>
          {type}
        </Link>
      </div>
    </>
  );
};

export default Types;
