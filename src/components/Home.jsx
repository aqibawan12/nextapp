import React from "react";
import PFODUCT from "./Products/Products";
const Home = (props) => {
 
  return (
    <>
      <PFODUCT data = {props.data}  data1 = {props.data1} />
    </>
  );
};

export default Home;
