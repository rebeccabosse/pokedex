import React from "react";
import ButtonType from "./ButtonType";
import "./types.css";

const TypesList = (props) => {
  const { typeList } = props;
  console.log(typeList);
  const filterType = typeList.filter((type) => type.name !== "unknown");
  console.log(filterType);
  return (
    <section className="type-list">
      {filterType &&
        filterType.map((t, i) => {
          return <ButtonType name={t.name} key={i} type={t.name} />;
        })}
    </section>
  );
};

export default TypesList;
