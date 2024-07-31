import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonTypes from "./ButtonTypes";

const NavTypes = () => {
  const [typeList, setTypeList] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      response.data.results.forEach(async (id) => {
        const pokeType = await axios.get(
          `https://pokeapi.co/api/v2/type/${id.name}/`
        );

        setTypeList(pokeType.data);
      });
    };
    getTypes();
  }, []);

  return <ButtonTypes types={typeList} />;
};

export default NavTypes;
