import React from "react";
import ButtonType from "./ButtonType";

const TypesList = (props) => {
  const { typeList } = props;
  console.log(typeList);
  return (
    <section className="collection-container">
      {typeList &&
        typeList.map((t, i) => {
          return <ButtonType name={t.name} key={i} />;
        })}
    </section>
  );
};

export default TypesList;
