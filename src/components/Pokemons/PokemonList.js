import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import "../Styles/pokemonList.css";
import { FaArrowLeft } from "react-icons/fa";

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
  }, [name]);
  console.log(type);
  return (
    <>
      <div className="back">
        <Link to="/">
          <FaArrowLeft size={30} color="black" />
        </Link>
        <h2>Pokemon {name}</h2>
      </div>

      <div className="content">
        {type.map((pokemon, i) => {
          return <Card name={pokemon.name} />;
        })}
      </div>
    </>
  );
};

export default PokemonList;
