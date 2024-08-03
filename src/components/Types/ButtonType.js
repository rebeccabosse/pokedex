import React from "react";
import "./types.css";
import Button from "./Button";
import PokemonList from "../Pokemons/PokemonList";

function ButtonType({ typeList }) {
  const filterType = typeList.filter(
    (type) => type.name !== "unknown" && type.pokemon.length > 0
  );

  return (
    <>
      <h1 className="intro">choose a type</h1>
      <div className="type-list ">
        {filterType.map((type, id) => {
          return (
            <Button
              key={id}
              name={type.name}
              type={type.name}
              id={type.id}
              pokemon={type.pokemon}
              buttons={type.pokemon.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default ButtonType;
