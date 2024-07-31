import React from "react";
import ButtonType from "./ButtonType";
import "./types.css";

const TypesList = (props) => {
  const { typeList } = props;
  console.log(typeList);
  return (
    <section className="type-list">
      {typeList &&
        typeList.map((t, i) => {
          return <ButtonType name={t.name} key={i} type={t.name} />;
        })}
    </section>
  );
};

export default TypesList;
