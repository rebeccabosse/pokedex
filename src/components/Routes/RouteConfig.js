import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import PokemonList from "../Pokemons/PokemonList";
function RouteConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<PokemonList />} />
      </Routes>
    </>
  );
}
export default RouteConfig;
