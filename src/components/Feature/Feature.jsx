import React from "react";
import Items from "../Products/ItemsContents";

import { useNavigate } from "react-router-dom";
import "./styles.css";

const Products = (props) => {
  const navigate = useNavigate();

  const data = props.data.filter((val) => val.feature === true);
  
  function operation(id) {
    navigate("/Product/" + id);
  }
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "72px" }}>
        {data.map((value) => (
          <Items
            key={value.id}
            name={value.name}
            index={value.id}
            price={value.price}
            onselect={operation}
            image={value.images}
          />
        ))}
      </div>
    </>
  );
};
export default Products;
