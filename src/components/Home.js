import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonRandom from "./PokemonRandom/PokemonRandom";
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

  const filterType = typesList.filter(
    (type) => type.name !== "unknown" && type.pokemon.length > 0
  );

  return (
    <>
      <div>
        <h2 className="intro">choose a type</h2>
        <div className="type-list">
          {filterType.map((type, id) => {
            return (
              <Types key={id} name={type.name} id={type.id} type={type.name} />
            );
          })}
        </div>

        <PokemonRandom />
      </div>
    </>
  );
};

export default Home;
