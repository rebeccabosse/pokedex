import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import PokemonRandom from "./Pokemons/PokemonRandom";
const Home = () => {
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/type");

      res.data.results.forEach(async (type) => {
        const pokeTypes = await axios.get(
          `https://pokeapi.co/api/v2/type/${type.name}`
        );

        setTypeList((state) => {
          state = [...state, pokeTypes.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };
    getTypes();
  }, []);
  const filterType = typeList.filter(
    (type) => type.name !== "unknown" && type.pokemon.length > 0
  );
  console.log(filterType);
  return (
    <>
      <div>
        {filterType.map((button, i) => {
          return (
            <Link key={i} to={`${button.name}`}>
              {button.name}
            </Link>
          );
        })}
      </div>

      <PokemonRandom />
    </>
  );
};

export default Home;
