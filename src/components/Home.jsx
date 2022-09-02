import React from "react";
import PFODUCT from "./Products/Products";
const Home = (props) => {
  return (
    <>
      <PFODUCT data = {props.data} />
    </>
  );
};

export default Home;
