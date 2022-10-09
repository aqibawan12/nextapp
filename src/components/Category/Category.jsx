import React from "react";
import "./cat.css";
import { useNavigate } from "react-router-dom";
const Category = (props) => {
  let navigate = useNavigate();
  function operation(name) {
    navigate("/Category/" + name);
  }
  const n = "a1";
  let data = props.data.filter((val) => val.name);

  return (
    <div>
      <div className='Pdis1'>
        <ul className='Pul'>
          {data.map((val, index) => {
            if (index % 3 === 0) {
              return (
                <li
                  key={index}
                  className='TwoD1'
                  onClick={() => operation(val.name)}
                >
                  <img className='INfoImg3' src={val.image} alt='12' />
                  <p className='Tittle0111'> {val.name}</p>
                </li>
              );
            } else {
              return (
                <li key={index} className='Block1'>
                  <img
                    className='INfoImg11'
                    src={val.image}
                    alt='12'
                    onClick={() => operation(val.name)}
                  />
                  <p className='Tittle0111'> {val.name}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
