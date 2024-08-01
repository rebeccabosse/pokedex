import React from "react";
import ButtonType from "./ButtonType";
import Home from "../Home";
import "./types.css";

const TypesList = (props) => {
  const { typeList } = props;
  const filterType = typeList.filter((type) => type.name !== "unknown");

  return (
    <>
      <div className="type-list">
        {filterType &&
          filterType.map((t, i) => {
            return (
              <ButtonType
                name={t.name}
                key={i}
                id={t.id}
                type={t.name}
                pokemonList={t.pokemon}
              />
            );
          })}
      </div>
    </>
  );
};

export default TypesList;
