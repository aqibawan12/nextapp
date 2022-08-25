import React from "react";
import Slider from "./Slider";
import Items from "./ItemsContents";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import data from "./data";

const Products = () => {
  const navigate = useNavigate();
  const nai = data;

  function operation(id) {
     
    navigate("/Product/" + id);
  }
  return (
    <>
      <Slider />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((value) => (
          <Items
            key={value.id}
            name={value.nam}
            index={value.id}
            price={value.Price}
            onselect={operation}
          />
        ))}
      </div>
    </>
  );
};
export default Products;
