import React, { useState, useEffect } from "react";
import axios from "axios";
import "./types.css";
import { TYPE_COLOR } from "./TypeColors";

function TypeBar() {
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
    <div className="navTypes">
      <div>
        {types.map((type, i) => (
          <button key={i} className="btn-type">
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TypeBar;
