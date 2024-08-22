import React from "react";
import "./pokemonCard.css";
const Card = (props) => {
  const { name } = props;
  //console.log(pokemon);
  return (
    <>
      <div className="card-pokemon" style={{ marginLeft: "20px" }}>
        {name}
      </div>
    </>
  );
};

export default Card;
