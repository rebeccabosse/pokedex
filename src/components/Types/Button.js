import React, { useState } from "react";

import "./types.css";
import { Link } from "react-router-dom";

const Button = ({ name, type, id, pokemon }) => {
  console.log(type);
  /*const handleCLick = () => {
    pokemon &&
      pokemon.forEach((p) => {
        let po = p.pokemon.url;

        console.log(po);
      });
  };
  const listPokemon =
    pokemon &&
    pokemon.name?.map((pok) => {
      <div>{pok.name}</div>;
    });
  console.log(listPokemon);
  */
  return (
    <>
      <Link key={id} className={`btn-type ${type}`} to={`${type}`}>
        {name}
      </Link>
    </>
  );
};

export default Button;
