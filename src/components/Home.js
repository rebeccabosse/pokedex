import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import ButtonType from "./Types/ButtonType";
const Home = () => {
  const [typeList, setTypeList] = useState([]);
  //const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/type");

      res.data.results.forEach(async (type) => {
        const pokeTypes = await axios.get(
          `https://pokeapi.co/api/v2/type/${type.name}`
        );

        setTypeList((p) => [...p, pokeTypes.data]);
      });
    };
    getTypes();
  }, []);

  return <ButtonType typeList={typeList} />;
};

export default Home;
