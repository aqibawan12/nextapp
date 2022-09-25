import React from "react";
import Slider from "./Slider";
import Items from "./ItemsContents";
import Feature from '../Category/Category.jsx'
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
    <div style={{borderTop:'3px solid rgb(76, 73, 73)' ,
  width:'60%',
  marginLeft:'23%'

  
  
  }}></div>
 <div >
      <h2 className="titleCag">SHOP BY CATEGORY</h2>
      <div ><Feature data={props.data1}  /></div></div>
      <h2 className="titleCag" style={{marginTop:"44px",marginBottom:"33px"}} >Shop by Product</h2>
      <div   className="main-Pro">
        { props.data.map((value) => (
          <Items
            key={value.id}
            name={value.name}
            index={value.id}
            price={value.price}
            image={value.images}
            cat={value.category}
            onselect={operation}
          />
        ))}
      </div>
      
    </>
  );
};
export default Products;
