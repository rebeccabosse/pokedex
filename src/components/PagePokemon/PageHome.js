import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { COLOR } from "../Types/TypeColors";
import About from "./About";
import Stats from "./Stats";
import Moves from "./Moves";
import Pokeball from "../../pokeball.png";
import "./page.css";
import { FaArrowLeft } from "react-icons/fa";

const PageHome = () => {
  const [pokemon, setPokemon] = useState([]);
  const [species, setSpecies] = useState([]);
  const [isActive, setIsActive] = useState("About");
  const { name } = useParams();

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const speciesResponse = await axios.get(response.data.species.url);
      setPokemon(response.data);
      setSpecies(speciesResponse.data);
    };
    getPokemons();
  }, [name]);
  console.log(pokemon);
  console.log(species);
  return (
    <div
      className="bg"
      style={{
        backgroundColor: COLOR.TYPE(
          pokemon.types && pokemon.types[0].type.name
        ),
      }}
    >
      <div className="nav-back">
        <div className="back-poke-home">
          <Link to="/">
            <img src={Pokeball} className="pokeball" alt="pokeball" />
          </Link>
        </div>
      </div>
      <div className="bg-container">
        <div className="back-poke">
          <Link to="">
            <FaArrowLeft size={25} />
          </Link>
        </div>
        <div className="poke-info">
          <h2>{pokemon.name}</h2>
          <p>#{pokemon.id}</p>
        </div>
        <div id="poke-types">
          {pokemon.types &&
            pokemon.types.map(({ type }, i) => {
              return (
                <button className="type-btn" key={i}>
                  {type.name}
                </button>
              );
            })}
        </div>
        <div className="poke-details">
          <div className="image-body">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              className="img-poke-detail"
              alt="pokemon"
            />
          </div>

          <div className="detail-content">
            <nav>
              <button onClick={() => setIsActive("About")}>About</button>
              <button onClick={() => setIsActive("Stats")}>Stats</button>
              <button onClick={() => setIsActive("Moves")}>Moves</button>
            </nav>
            <div>
              {isActive === "About" && <About />}
              {isActive === "Stats" && <Stats />}
              {isActive === "Moves" && <Moves />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
