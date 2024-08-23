import React from "react";
import "./pokemonCard.css";
import { COLOR } from "../Types/TypeColors";
const Card = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
      <div
        className={`card-pokemon`}
        style={{ backgroundColor: COLOR.TYPE(pokemons.types[0].type.name) }}
      >
        <p className="poke-id">#{pokemons.id}</p>
        <div className="poke-header">
          <div className="poke-info">
            <h3 className="poke-name">{pokemons.name}</h3>
            <div className="types-pokemon">
              {pokemons.types.map(({ type }, i) => (
                <li key={i}>{type.name}</li>
              ))}
            </div>
          </div>

          <div className="image-content">
            <img
              className="img-pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`}
              alt="pokemon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
