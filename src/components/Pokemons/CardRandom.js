import React from "react";
import "./pokemon.css";

//import { useParams } from "react-router-dom";
const Card = ({ pokemons, id, bgtype }) => {
  return (
    <div className={`card ${bgtype}`}>
      <h3>Pokemon random</h3>
      <div className="pokemon-header">
        <h1> {pokemons.name}</h1>
        <h2> #{pokemons.id}</h2>
      </div>
      <div className="types">
        {pokemons.types?.map(({ type }, i) => (
          <li key={i}>{type.name}</li>
        ))}
      </div>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          className="img"
          alt="pokemon"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Card;
