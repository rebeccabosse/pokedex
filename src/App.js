import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TypeBar from "./components/Types/TypeBar";
import axios from "axios";

function App() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const filterType = response.data.results.filter(
        (res) => res.name !== "unknown"
      );
      setTypes(filterType);
      console.log(filterType);
    };
    fetchTypes();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <TypeBar types={types} />
      <Home />
    </div>
  );
}

export default App;
