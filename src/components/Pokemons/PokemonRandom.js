import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const PokemonRandom = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
      );
      response.data.results.forEach(async (pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons(poke.data);
        /*
        setPokemons((state) => {
          state = [...state, poke.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
        */
      });
    };
    getPokemons();
  }, []);

  return (
    <div style={{ backgroundColor: "lightseagreen", marginTop: "30px" }}>
      <Card pokemons={pokemons} />
    </div>
  );
};

export default PokemonRandom;
