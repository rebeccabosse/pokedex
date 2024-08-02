import React from "react";

import "./types.css";

function ButtonType({ typeList }) {
  const filterType = typeList.filter(
    (type) => type.name !== "unknown" && type.pokemon.length > 0
  );

  console.log(filterType);
  return (
    <div id="btn-nav">
      {filterType.map((type) => {
        return <button key={type.id}>{type.name}</button>;
      })}
    </div>
  );
}

export default ButtonType;
