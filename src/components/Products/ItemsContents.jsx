import { Box, Card } from "@mui/material";
import React from "react";
import "./styles.css";
 
const itemsContents = (props) => {
 

  let name1 = props.name;
  let id = props.index;


  return (
    <>
      <Box
        className='adjust'
        onClick={() => {
          props.onselect(id);
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
         alignItems:'center',
           marginBottom:'20px'
          }}
        >
          
            <img className='pic_adjust' src={props.image[0]} alt='123' />
       
          <span style={{display:'flex',flexDirection:'column',alignItems:"flex-start" ,height:'100px',}}  >
            <h5>{name1}</h5>
            <p style={{marginTop:"-4px"}}>Rs {props.price}</p>
          </span>
        </Card>
      </Box>
    </>
  );
};

export default itemsContents;
