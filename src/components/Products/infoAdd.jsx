import React, { useState, useEffect, useRef } from "react";
import './stylesDes.css'
const InfoAdd = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [is, setIs] = useState();

  const id = props.color;
  const [count, setCount] = useState();

  const HandleClick = (indx) => {

    props.onSelect(props.id);
    setIsActive(props.color)
  };

  return (
    <>
      <h3
        key={props.id}
        onClick={() => {
          HandleClick(props.id);
        }}
        className='ageCardinner'style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
      >
        {props.age}{" "}
      </h3>
    </>
  );
};

export default InfoAdd;
