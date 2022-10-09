import React from "react";

const Footer = () => {
  return (
    <div  style={{
        borderTop: "1px solid",
        width: "100%",
        
        display: "flex",
        justifyContent: "center",
      }} className="footer">
      <h4 onClick={ ()=> window.location.replace("http://localhost:3000/Feature")}
        style={{
         
        
         
          cursor:"pointer"
        }}
      >
        Powered by AA developers
      </h4>
    </div>
  );
};

export default Footer;
