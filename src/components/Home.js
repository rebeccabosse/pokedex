import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import PokemonRandom from "./Pokemons/PokemonRandom";
import Types from "./Types/Types";
const Home = () => {
  const [typesList, setTypesList] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/type");

      res.data.results.forEach(async (type) => {
        const pokeTypes = await axios.get(
          `https://pokeapi.co/api/v2/type/${type.name}`
        );

        setTypesList((state) => {
          state = [...state, pokeTypes.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };
    getTypes();
  }, []);

  console.log(typesList);

  const filterType = typesList.filter(
    (type) => type.name !== "unknown" && type.pokemon.length > 0
  );
  console.log(filterType);
  return (
    <>
      <div style={{ display: "flex" }}>
        {filterType.map((type, id) => {
          return <Types key={id} name={type.name} id={type.id} />;
        })}
      </div>
      {/*
  <PokemonRandom />
*/}
    </>
  );
};

export default Home;
