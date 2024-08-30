import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import PokemonList from "../Pokemons/PokemonList";
import PageHome from "../PagePokemon/PageHome";

function RouteConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":type" element={<PokemonList />} />
        <Route path=":type/:name" element={<PageHome />} />
      </Routes>
    </>
  );
}
export default RouteConfig;
