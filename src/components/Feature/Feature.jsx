import React from "react";
 
import Items from "./item";
import { useNavigate } from "react-router-dom";
import "./styles.css";
 

const Products = (props) => {
  const navigate = useNavigate();
  
const data = [...props.data]


  function operation(id) {
    navigate("/Product/" + id);
  }
  return (
    <>
      

      <div style={{ display: "flex", flexWrap: "wrap" ,marginTop:'72px'}}>
        {data.map((value) => (
          <Items
            key={value.id}
            name={value.nam}
            index={value.id}
            price={value.Price}
            onselect={operation}
            image={props.image}
          />
        ))}
      </div>
    </>
  );
};
export default Products;
