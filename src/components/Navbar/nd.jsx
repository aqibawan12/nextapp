import React from "react";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const nd = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        zIndex: "1100",
        top: "0px",
        position: "fixed",
        backgroundColor: " #e3dddc    ",
        margin: "-10px",
        marginTop: "64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        caretColor: "transparent",
      }}
    >
      <p
        style={{
          marginLeft: "22px",
          fontSize: "44px",
          color: "darkred",
          cursor: "pointer",
        }}
      >
        <AccountCircleRoundedIcon />
      </p>{" "}
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-around",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <p>Women</p> 
        <p>Girls</p>
        <p>Accessories</p>
        <p >Sale</p>
      </div>
      <p
        style={{
          marginRight: "32px",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        checkout
      </p>
    </div>
  );
};

export default nd;
