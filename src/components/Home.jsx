import React from "react";
import PFODUCT from "./Products/Products";
const Home = (props) => {
  console.log(props.data)
  return (
    <>
      <PFODUCT data = {props.data}  data1 = {props.data1} />
    </>
  );
};

export default Home;
