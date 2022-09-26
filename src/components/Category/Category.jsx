import React from "react";
import data from "./cat";
import { useNavigate } from "react-router-dom";
const Category = (props) => {
  let navigate = useNavigate();
  function operation(name) {
    navigate("/" + name);
  }
  const n = "a1";
 let data = props.data.filter((val)=>val.name)
 
  return (
    <div  >
      

      <div className='cagS'  >
        { data.map((val) => (
          <div
          
            className={val.items}
            onClick={() => {
              operation(val.name);
            }}
          >
            <div>
             
              <img src={val.image} alt='12' /> <h2>{val.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
