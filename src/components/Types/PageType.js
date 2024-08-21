import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Pokeball from "../../pokeball.png";
import "./types.css";
const PageType = ({ type }) => {
  console.log(type);
  return (
    <>
      <div className="nav">
        <Link to="/">
          {" "}
          <FaArrowLeftLong size={30} color="aliceblue" />
        </Link>

        <img src={Pokeball} style={{ width: "5%" }} />
      </div>
    </>
  );
};

export default PageType;
