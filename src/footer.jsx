import React from "react";

const Footer = () => {
  return (
    <div  style={{
        borderTop: "1px solid",
        width: "100%",
           
        display: "flex",
        justifyContent: "center",
      }}>
      <h4 onClick={ ()=> window.location.replace("http://localhost:3000/Feature")}
        style={{
         
          margin: "8px",
         
          cursor:"pointer"
        }}
      >
        Powered by AA developers
      </h4>
    </div>
  );
};

export default Footer;
