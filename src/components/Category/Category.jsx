import React from "react";
import data from "./cat";
import { useNavigate } from "react-router-dom";
const Category = () => {
  let navigate = useNavigate()
  function operation(id,name){
    navigate("/" + name)
  }
  return (
    <div style={{ marginTop: "69px" }}>
      <p className='emptyCart1' style={{marginBottom:'60px' }}> 
        <span style={{ borderBottom: "2px solid #d3d3d3" }}>
          Shop by Categories
        </span>
      </p>
      <div className="cagS" >
        {data.map((val) => (
          <div className='cat' onClick={ ()=>{operation(val.id,val.name)} } >
            <div style={{
              border:'24px solid transparent',
                  width: "300px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}>
              {" "}
              <img
              style={{width:'300px'}}
                src={val.img}
                alt='12'
               
              />
            </div>
            <h2>{val.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
