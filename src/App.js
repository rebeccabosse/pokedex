import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import NavTypes from "./components/Types/NavTypes";

const buttons = [];
function App() {
  const [isSelected, setIsSelected] = useState(0);
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      response.data.results.forEach(async (id) => {
        const pokeType = await axios.get(
          `https://pokeapi.co/api/v2/type/${id.name}`
        );
        setTypeList((t) => [...t, pokeType.data]);
      });
    };
    getTypes();
  }, []);

  //console.log(...typeList);
  const buttons = [typeList];

  return (
    <div className="App">
      <Navbar />
      <NavTypes typeList={typeList} />
    </div>
  );
}

export default App;
