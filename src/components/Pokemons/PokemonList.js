import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonList = () => {
  const [type, setType] = useState([]);
  const { name } = useParams();
  //console.log(name);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${name}`
      );
      const pokemonUrl = response.data.pokemon.map((u) => u.pokemon.url);

      Promise.all(
        pokemonUrl.map(async (url) => {
          const pokemonResponse = await axios.get(url);

          setType((state) => {
            state = [...state, pokemonResponse.data];
            state.sort((a, b) => (a.id > b.id ? 1 : -1));
            return state;
          });
        })
      );
    };

    fetchPokemon();
  }, []);
  console.log(type);
  return (
    <>
      <div>{name}</div>
      <div>
        {type.map((pokemon, i) => {
          return <p>{pokemon.name}</p>;
        })}
      </div>
    </>
  );
};

export default PokemonList;
