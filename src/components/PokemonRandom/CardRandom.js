import React from "react";
import "../../components/Styles/random.css";
import { COLOR } from "../Types/TypeColors";
//import { useParams } from "react-router-dom";
const Card = ({ pokemons, id, bgtype, description }) => {
  const filterDesc =
    description.flavor_text_entries &&
    description.flavor_text_entries.filter(
      (item) => item.language.name === "en"
    )[0].flavor_text;

  return (
    <div className={`card`} style={{ backgroundColor: COLOR.TYPE(bgtype) }}>
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
      <div className="infos">
        <p>{filterDesc}</p>
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
