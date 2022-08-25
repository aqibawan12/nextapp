import { Box, Card } from "@mui/material";
import React from "react";
import './styles.css'
 
const itemsContents = (props) => {
  const nums = props.image.filter((val) => val.index === props.index);
  const fur = nums.filter((val)=>val.id===0)
 
    let name1= props.name
    let id =props.index;
  console.table(props.image)
  return (
    <>

      <Box className="adjust"  onClick={() => {
            props.onselect(id);
          }}>
      <Card style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
           {fur.map((val)=>
          <img
          className="pic_adjust"
            src={val.imq}
            alt='123'
          />)} 
       <span><h5 >{name1}</h5><p>{props.price}</p></span>
        </Card>
        
      </Box>
   
    </>
  );
};

export default itemsContents;
