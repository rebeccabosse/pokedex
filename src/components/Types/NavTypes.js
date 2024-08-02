import React, { useState, useEffect } from "react";
import axios from "axios";
import TypesList from "./TypesList";
import Home from "../Home";

const NavTypes = () => {
  const [typeList, setTypeList] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      response.data.results.forEach(async (id) => {
        const pokeType = await axios.get(
          `https://pokeapi.co/api/v2/type/${id.name}`
        );
        setTypeList((t) => [...t, pokeType.data]);
      });
    };
    getTypes();
  }, []);

  return (
    <>
      <TypesList typeList={typeList} />
    </>
  );
};

export default NavTypes;
