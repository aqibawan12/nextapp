import { Box, Card } from "@mui/material";
import React from "react";
import "./styles.css";
import images from "./images";
const itemsContents = (props) => {
  const nums = images.filter((val) => val.index === props.index);
  const fur = nums.filter((val) => val.id === 0);

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
          {fur.map((val) => (
            <img className='pic_adjust' src={val.imq} alt='123' />
          ))}
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
