import React, { useState } from "react";

import axios from "axios";
import "./types.css";
import Home from "../Home";

function ButtonType(props) {
  const { name, type, id } = props;
  const [pokemons, setPokemons] = useState([]);
  const [activeComponent, setActiveComponent] = useState("Home");

  const getPokemonByTypes = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
    setPokemons(response.data.pokemon);
  };

  return (
    <>
      <div id="btn-content">
        <button onClick={getPokemonByTypes} className={`btn-type ${type}`}>
          {name}
        </button>
      </div>
    </>
  );
}

export default ButtonType;
