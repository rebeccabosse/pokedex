import React from "react";
import { Link } from "react-router-dom";
import "./pokemonCard.css";
import { COLOR } from "../Types/TypeColors";
const Card = ({ pokemons }) => {
  //console.log(pokemons);
  return (
    <>
      <div
        className={`card-pokemon`}
        style={{ backgroundColor: COLOR.TYPE(pokemons.types[0].type.name) }}
      >
        <div className="card-header">
          <div className="poke-header">
            <Link to={`${pokemons.name}`} style={{ textDecoration: "none" }}>
              <h3 className="poke-name"> {pokemons.name}</h3>
            </Link>

            <h4 className="poke-id"> #{pokemons.id}</h4>
          </div>
          <div className="poke-infos">
            <div className="poke-types">
              {pokemons.types?.map(({ type }, i) => (
                <li key={i}>{type.name}</li>
              ))}
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
      </div>
    </>
  );
};

export default Card;
