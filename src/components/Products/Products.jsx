import React from "react";
import Slider from "./Slider";
import Items from "./ItemsContents";
import { useNavigate } from "react-router-dom";
import "./styles.css";
 
 
const Products = (props) => {
  const navigate = useNavigate();
 

  function operation(id) {
     
    navigate("/Product/" + id);
  }
  return (
    <>
 
    <Slider  />
 
    
      <div   className="main-Pro">
        {props.data.map((value) => (
          <Items
            key={value.id}
            name={value.name}
            index={value.id}
            price={value.price}
            onselect={operation}
          />
        ))}
      </div>
    </>
  );
};
export default Products;
