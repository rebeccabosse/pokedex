import React, { useState, useEffect } from "react";
import axios from "axios";
import CardRandom from "./CardRandom";

const PokemonRandom = () => {
  const [pokemons, setPokemons] = useState([]);
  const [flavorText, setFlavorText] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      const pokemonUrl = response.data.results.map((pokemon) => pokemon.url);

      const pokeData = await Promise.all(
        pokemonUrl.map(async (url) => {
          const pokemonResponse = await axios.get(url);
          const speciesResponse = await axios.get(
            pokemonResponse.data.species.url
          );
          const evolutionResponse = await axios.get(
            speciesResponse.data.evolution_chain.url
          );
          return {
            ...pokemonResponse.data,
            species: speciesResponse.data,
            evolution_chain: evolutionResponse.data,
          };
        })
      );
      const randomPokemon =
        pokeData[Math.floor(Math.random() * pokeData.length)];
      setPokemons(randomPokemon);
      setFlavorText(randomPokemon.species);

      //console.log(flavorText);
    };
    getPokemons();
  }, []);

  return (
    <div className="cardRandom">
      <CardRandom pokemons={pokemons} id={pokemons.id} />
    </div>
  );
};

export default PokemonRandom;
