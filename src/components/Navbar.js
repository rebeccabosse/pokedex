import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
